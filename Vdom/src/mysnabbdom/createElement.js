// 将VNode创建为dom  
export default function createElement(VNode){

    // 创建dom
    let dom = document.createElement(VNode.sel)
    // console.log(VNode)
    
    // VNode有文本还是子节点
    if (VNode.children && VNode.children.length>0){
        
        // 子节点
        for (let i = 0; i < VNode.children.length; i++) {
            let child = VNode.children[i]
            let childDom = createElement(child)
            dom.appendChild(childDom)
        }

    }else{
            // 文本
            dom.innerText = VNode.text
    }

    return VNode.elm = dom

}



