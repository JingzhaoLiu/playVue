// 折叠tokens  栈   把#、/中的数据放到第三个参数中

// 0: (2)["text", "I buy a "]
// 1: (2)["name", "name"]
// 2: (2)["text", ", I "]
// 3: (2)["name", "mood"]
// 4: (2)["text", "!↵        <ul>↵            "]
// 5: (2)["#", "list"]
// 6: (2)["text", "↵              <li>↵                "]
// 7: (2)["#", "arr"]
// 8: (2)["text", "↵                  <p>"]
// 9: (2)["name", "content"]
// 10: (2)["text", "</p>↵                "]
// 11: (2)["/", "arr"]
// 12: (2)["text", "↵                ↵              </li>↵            "]
// 13: (2)["/", "list"]
// 14: (2)["text", "↵        </ul>↵        ↵        ↵        "]      "]

export default function nestTokens(tokens) {
    // 结果数组
    let nestedTokens = []

    // 收集器 引用类型所以指向的是同一个数组   
    var collector = nestedTokens

    // 栈结构  
    let sections = []

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        switch (token[0]) {
            case '#':
                // 收集器中放入这个token
                collector.push(token)
                //   入栈
                sections.push(token)

                // collector 指向 当前#中的索引为2的数据

                collector = token[2] = []

                break;

            case '/':
                sections.pop()
                
                // collector 如果栈中有值 指向 最顶栈#中的索引为2的数据  没有栈了 指向全局数组数据
                collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens

                break;

            default:
                collector.push(token)
                
        }

    }




    return nestedTokens
}



// if (token[0] === '#') {
//     token[2] = []
//     // 压栈  入栈
//     sections.push(token)
// } else if (token[0] === '/') {
//     // 出栈
//     let section = sections.pop()
//     // nestedTokens.push(section)
// } else {
//     // 栈是空的
//     if (sections.length === 0) {
//         nestedTokens.push(token)
//     } else {
//         sections[sections.length - 1][2].push(token)
//     }
// }