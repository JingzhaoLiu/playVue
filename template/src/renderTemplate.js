import lookup from "./lookup"
export default function renderTemplate(tokens,data){

    var resultStr = '';
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]

        if (token[0] === 'text') {
            resultStr += token[1]
        } else if (token[0] === 'name') {
            // 防止  a.b.c
            resultStr += lookup(data,token[1])
        } else if (token[0] === '#') {

            resultStr += parseArray(token, data)
            
        }
    }

    return resultStr


}

// 处理数组 递归
function parseArray(token,data){

    var v = lookup(data, token[1])
    var resultStr = ''

    // 遍历v  遍历数据  数据有几条遍历几遍模板
    for (let i = 0; i < v.length; i++) {
        // 添加一个点属性 解析 .

        resultStr += renderTemplate(token[2],{
            ...v[i],
            '.':v[i]
        })
    }


    return resultStr

}

