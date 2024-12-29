const http = require("http");
const url = require("url");
const exec = require("child_process");

function res_page(urlpath,res) {
    console.log(`GET ${urlpath} at ${new Date().toString()}`);
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.write("ok");
    res.end();
}

function playSound(filepath) {
    if(Math.random() < 0.95) {
        exec.exec(`mpv ${filepath} --no-video --really-quiet`);
    }else{
        exec.exec(`mpv ~/osirase/sound4.mp3 --no-video --really-quiet`);
    }
    // console.log("Play sound filepath:" + filepath);
}

function serverMain(req,res) {
    switch(url.parse(req.url).pathname) {
        case "/osirase/1":
            res_page("/osirase/1",res);
            playSound("~/osirase/sound1.mp3");
            break;
        
        case "/osirase/2":
            res_page("/osirase/2",res);
            playSound("~/osirase/sound2.mp3");
            break;
        
        case "/osirase/3":
            res_page("/osirase/3",res);
            playSound("~/osirase/sound3.mp3");
            break;
        
        case "/shutdown/nekosaikyo":
            res_page("/shutdown/nekosaikyo",res);
            exec.exec('sudo shutdown now');
            break;
    
    }
}
var server = http.createServer(serverMain);

server.listen(5000);
console.log("Server started in 5000");