const http = require("http");

const server = http.createServer((req,res)=>
{
    // console.log(req.url);
    if(req.url=='/')
    {
        res.end('HELLO FROM THE OTHER SIDE');
    }
    else if(req.url=='/about')
   res.end('HELLO FROM THE  OTHER OTHER SIDE');
   else{
      res.writeHead(404); 
    res.end('<h1>404 error page page doen not exist</h1>');
   }
});

server.listen(8000,"127.0.0.1",()=>
{
    console.log("listening to the port number");
});


// const validator  = require("validator");
// const chalk = require("chalk");


// console.log(chalk.green.underline.inverse("hello world!!"));

// const res = validator.isEmail("thapa@vaibhav.com");
// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res) );

