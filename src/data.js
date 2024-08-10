const iconv  = require('iconv-lite')

function makeData(num = 192){
    let data = Buffer.alloc(num);
    data.fill(0)
    data.write("", 0, "utf-8");
    return data
}

function data2String(data){
    return iconv.decode(data, 'GBK').toString().replace(/\x00/g,'')
}

module.exports = {
    makeData,
    data2String
}