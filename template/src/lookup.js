export default function lookup(data,keyName){

    if(keyName.indexOf('.') !==-1 && keyName !== '.'){

        return keyName.split('.').reduce((pre, cur) => pre[cur], data)

    }

    // 没有 .

    return data[keyName]

}