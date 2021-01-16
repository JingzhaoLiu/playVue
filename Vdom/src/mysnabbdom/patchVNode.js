import vNode from './vNode'
import createElement from './createElement'
import updateChildren from './updateChildren'
export default function patchVNode(oldVNode, newVNode) {
    console.log('oldVNode:',oldVNode)
    console.log('newVNode:',newVNode)
    // 新旧虚拟dom一样 不更改
    if (oldVNode === newVNode) return;

    /* 1. newVNode有没有text值 */
    if (newVNode.text != undefined) {
        //1-1. 有
        // 1-1-1. 新旧虚拟dom text值是不是一样
        // 相同不处理 不相同 新的直接覆盖旧的
        if (oldVNode.text !== newVNode.text) {
            oldVNode.elm.innerText = newVNode.text
        }

    } else {
        //1-2. 没有 （新的有children）
        /** 2 oldVNode 有没有children **/

        //  2-1. 有
        if (oldVNode.children && oldVNode.children.length > 0) {
            //   新老都有children 每个对比
            updateChildren(oldVNode.elm, newVNode.children, oldVNode.children)

        } else {
            //2-2. 没有 （oldVNode原先是文字，删掉原先的文字，添加新的children）
            //   oldVNode.elm.innerText = undefined
            oldVNode.elm.innerText = ''
            var fragment = document.createDocumentFragment();
            for (let i = 0; i < newVNode.children.length; i++) {
                const element = newVNode.children[i];

                let dom = createElement(element)

                fragment.appendChild(dom)

            }

            oldVNode.elm.appendChild(fragment)

        }


    }

}