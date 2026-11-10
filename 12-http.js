const http=require('http')
const server=http.createServer((req, res)=>{
if(req.url === '/'){
  res.end('Welcome to our home page')
}
if(req.url === '/about'){
  res.end('here is our short history')
}
res.end(
  `<h1>Oops!</h1>
  <p> not found page</p>
  back to hame page
  <a href="/">Back Home</a>`
)
})
server.listen(5000)