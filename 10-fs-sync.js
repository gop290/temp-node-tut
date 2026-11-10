
const first=readFileSync('./first.txt','utf8')
const second=readFileSync('./second.txt','utf8')

writeFileSync('./result.txt',`here is the result result:${first} , ${second},{flag:'a'}`)