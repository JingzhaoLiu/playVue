export default class Scanner{
    constructor(templateStr){
        // console.log('this is Scanner')
        // console.log(templateStr)
        this.templateStr = templateStr
        // I bug a { { name } }, I { { mood } } !

        // 指针
        this.pos = 0

        // 尾部
        this.tail = templateStr

        

    }
    // 路过指定符号
    scan(tag){
        if (this.tail.indexOf(tag) === 0){
            this.pos += tag.length
        }
    }

    // 扫描内容直到指定符号  取出扫描的内容
    scanUntil(tag){
        const point = this.pos
        while (!this.eos() && this.tail.indexOf(tag) !== 0){
            this.pos ++
            this.tail = this.templateStr.substring(this.pos)
        }
        
        return this.templateStr.substring(point,this.pos)

    }

    // end of string

    eos(){
        return this.pos === this.templateStr.length
    }
}