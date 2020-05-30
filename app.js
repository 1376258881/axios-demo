const http = require('http')
const server = http.createServer((res,req)=>{
    res.writeHead(200,{
        'Content-Type':"text/html;charset=UTF8"
    })
    res.write('hello world')
    res.end(JSON.stringify({
        name:"laney"
    }))
})
const server = http.createServer((res,req)=>{
    res.writeHead(200,{
        'Content-Type':"text/html;charset=UTF8"
    })
    res.write('test')
    res.end()
})
server.listen(3001,()=>{
    console.log('losten 3001')
})
server.listen(3002,()=>{
    console.log('losten 3002')
})