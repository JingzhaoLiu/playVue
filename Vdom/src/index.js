import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
// import { h } from 'snabbdom/h' // helper function for creating vnodes
import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'



var container = document.getElementById('container')

var dom = h('ul',{}, [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'D' }, 'D'),
    h('li', { key: 'E' }, 'E'),
    h('li', { key: 'F' }, 'F'),
    h('li', { key: 'G' }, 'G'),
])

var dom2 = h('ul', {}, [
    h('li', { key: 'QQ' }, 'QQB'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'D' }, 'D'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'F' }, 'F'),
    h('li', { key: 'G' }, 'G'),
    h('li', {}, '牛奶'),
    h('li', {}, '咖啡'),
    h('li', {}, [h('div', {}, [h('p', {}, '可口可乐'), h('p', {}, '百事可乐')])]),
    h('li', {}, h('p', {}, '雪碧'))
])




patch(container, dom)

document.querySelector('button').onclick = function(){
    patch(dom, dom2)
}



