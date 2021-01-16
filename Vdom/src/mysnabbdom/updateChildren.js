import patchVNode from './patchVNode'
import createElement from './createElement'
export default function (parentElm, newCh, oldCh) {
    // console.log(newCh)
    // console.log(oldCh)

    /**创建对比指针**/
    // 新前
    let newStartIdx = 0
    // 旧前
    let oldStartIdx = 0
    // 新后
    let newEndIdx = newCh.length - 1
    // 酒后
    let oldEndIdx = oldCh.length - 1
    /**创建对比节点**/
    // 新前节点
    let newStartNode = newCh[0]
    // 旧前节点
    let oldStartNode = oldCh[0]
    // 新后节点
    let newEndNode = newCh[newEndIdx]
    // 旧后节点
    let oldEndNode = oldCh[oldEndIdx]

    let keyMap = null

    // console.log('newEndNode', newEndNode)
    // console.log('oldEndNode', oldEndNode)
    // console.log(1)

    while (newStartIdx <= newEndIdx && oldStartIdx <= oldEndIdx) {
        //1 新前和旧前
        //2 新后和旧后
        //3 新后和旧前
        //4 新前和旧后
        if (!oldStartNode) {
            oldStartNode = oldCh[++oldStartIdx]
        } else if (!oldEndNode) {
            oldEndNode = oldCh[--oldEndIdx]
        } else if (!newStartNode) {
            newStartNode = newCh[++newStartIdx]
        } else if (!newEndNode) {
            newEndNode = newCh[--newEndIdx]
        } else if (checkSameNode(newStartNode, oldStartNode)) {
            //1 新前和旧前
            patchVNode(oldStartNode, newStartNode)
            oldStartNode = oldCh[++oldStartIdx]
            newStartNode = newCh[++newStartIdx]

        } else if (checkSameNode(newEndNode, oldEndNode)) {
            //2 新后和旧后
            patchVNode(oldEndNode, newEndNode)
            oldEndNode = oldCh[--oldEndIdx]
            newEndNode = newCh[--newEndIdx]
            
        } else if (checkSameNode(newEndNode, oldStartNode)) {
            //3 新后和旧前   
            // 真实dom中的第一个节点会移到最后
            patchVNode(oldStartNode, newEndNode)
            
            parentElm.insertBefore(oldStartNode.elm, oldEndNode.elm.nextSibling)

            oldStartNode = oldCh[++oldStartIdx]
            newEndNode = newCh[--newEndIdx]

        } else if (checkSameNode(newStartNode, oldEndNode)) {
            //4 新前和旧后   
            // 那么真实dom中的最后一个节点会移到最前
            patchVNode(oldStartNode, newStartNode)
            parentElm.insertBefore(oldEndNode.elm, oldStartNode.elm)

            oldEndNode = oldCh[--oldEndIdx]
            newStartNode = newCh[++newStartIdx]
            
        }else{
            // 根据old的key生成一张hash表
            // 用newStartNode的key与hash表做匹配，
            // 匹配成功
            // 就判断newStartNode和匹配节点是否为sameNode，
            // 如果是，就在真实dom中将成功的节点移到最前面，
            // 否则，将newStartNode生成对应的节点插入到dom中对应的oldStartNode位置，
            // newStartIdx指针向中间移动，被匹配old中的节点置为null。
            if(!keyMap){
                keyMap = {}
                for (let i = oldStartIdx; i <= oldEndIdx; i++) {
                    const key = oldCh[i].key
                    if(key != undefined){
                        keyMap[key] = i
                    }
                }

            }

            // 寻找当前这项 newStartIdx 这项在 keyMap 中映射的序号
            const idxInOld = keyMap[newStartNode.key]
            if (idxInOld === undefined) {
                // 判断，如果idxInOld是undefined 表示它是全新的项
                // 被加入的项（就是newStartNode这项）现在不是真实的DOM
                parentElm.insertBefore(createElement(newStartNode), oldStartNode.elm)

            } else {
                // 判断，如果idxInOld不是undefined 表示它不是全新的项，需要移动
                let oldNode = oldCh[idxInOld]
                patchVNode(oldNode,newStartNode)
                // 移动，调用insertBefore  
                parentElm.insertBefore(oldNode.elm, oldStartNode.elm)
                // 把这项设置为null，表示已经处理完了
                oldCh[idxInOld] = null
                
            }
            // 指针下移，只移动新的头
            newStartVNode = newCh[++newStartIdx]

        }

    }
    
    // 新的多
    if (oldStartIdx > oldEndIdx) {
        for (let i = newStartIdx; i <= newEndIdx; i++) {
            // insertBefore 可以自动识别 null，如果是 null 就会自动排到队尾去。和appendChild是一致的
            // newCh[i] 还不是真正的DOM，所以需要此处需要调用createElement
            let before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm
            parentElm.insertBefore(createElement(newCh[i]), before)
        }


    } else if (newStartIdx > newEndIdx) {
        // 旧的多

        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
            parentElm.removeChild(oldCh[i].elm)
        }

        
       
    }

   




}

// 判断是否是同一个节点
function checkSameNode(a, b) {
    return a.key === b.key && a.sel === b.sel
}