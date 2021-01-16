import vNode from './vNode'
import createElement from './createElement'
import patchVNode from './patchVNode'
export default function (oldVNode, newVNode) {
    // 判断oldVNode是不是Dom节点
    if (!oldVNode.hasOwnProperty('sel')) {
        // Dom节点转成虚拟节点  {sel, data, children, text, elm}
        oldVNode = vNode(oldVNode.tagName.toLowerCase(), {}, undefined, undefined, oldVNode)
    }
    // 判断 oldVNode,newVNode是不是同一个节点   key  sel相同

    if (oldVNode.key === newVNode.key && oldVNode.sel === newVNode.sel) {
        // 同一个节点  精细比较
        patchVNode(oldVNode, newVNode)
        

    } else {
        //不是同一个节点 插入新的  删除旧的

        let dom = createElement(newVNode)
        // console.log(dom)
        oldVNode.elm.parentNode.insertBefore(dom, oldVNode.elm)
        oldVNode.elm.parentNode.removeChild(oldVNode.elm)
    }


}