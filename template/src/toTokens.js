import Scanner from './Scanner'
import nestTokens from './nestTokens'
export default function toTokens(templateStr){
    //  1.扫描模板
    const scanner = new Scanner(templateStr)
    let word;
    let tokens = []
    while (!scanner.eos()) {
        word = scanner.scanUntil("{{")
        // console.log(word)
        if (word !== ''){
            tokens.push(['text', word])
        }
        scanner.scan("{{")


        word = scanner.scanUntil("}}")
        if(word !== ''){
            
            if (word[0] === '#'){
                tokens.push(['#', word.substring(1)])
            }else if (word[0] === '/') {
                tokens.push(['/', word.substring(1)])
            }else{
                tokens.push(['name', word])
            }
        }
       
        // console.log(word)
        scanner.scan("}}")
    }

    // console.log(tokens)

    return nestTokens(tokens)

}