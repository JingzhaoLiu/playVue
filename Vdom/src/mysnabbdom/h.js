// sel, data, children, text, elm
import vNode from './vNode'

// 低配版本的h函数，这个函数必须接受3个参数
// 第一个参数 sel 第二个 data  第三个参数  1. 文字|2. 数组|3. h()
export default function (sel,data,c){
    
    if(arguments.length !== 3){
        throw new Error('参数个数传递错误')
    }

    // 检测c的类型
    // 1.文字
    if(typeof c === 'string' || typeof c === 'number'){
        return vNode(sel, data, undefined, c)
    }else if(Array.isArray(c)){
    // 2.数组
        let children = []
        for (let i = 0; i < c.length; i++) {
            if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))){
                throw new Error('第三个参数数组中传递的项有不是h函数')
            }
            children.push(c[i])
        }
        return vNode(sel, data, children)
    }else if(typeof c === 'object' && c.hasOwnProperty('sel')){
    //3. h()  {sel, data, children, text, elm}
        let children = [c]
        return vNode(sel, data, children)
    }else{
        throw new Error('第三个参数类型传递错误')
    }
}