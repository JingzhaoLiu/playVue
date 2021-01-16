
import toTokens from './toTokens'
import renderTemplate from './renderTemplate'

window.ShareTemplate = {
    render(templateStr,data){
        // *** 模板编译成tokens ***
        
        const tokens = toTokens(templateStr)
        // console.log(tokens)

        // *** 模板编译成tokens转换成dom字符串 ***

        const domString = renderTemplate(tokens,data)
        // console.log(domString)


        return domString
    }
}