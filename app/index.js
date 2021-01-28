const app = require("express")();
const path = require('path');
const appid = process.env.APPID || 3000;

app.get("/", (req, res) => res.sendFile(path.join(__dirname+'/main2.html')));

app.get("/app1", (req, res) =>
  res.send(`appid: ${appid} app1 page: says hello!`)
);

app.get("/app2", (req, res) =>
  res.send(`appid: ${appid} app2 page: says hello!`)
);

app.get('/app3',function(req,res){
    res.sendFile(path.join(__dirname+'/main2.html'));
  });

app.get("/admin", (req, res) =>
  res.send(`appid: ${appid} ADMIN page: very few people should see this`)
);

app.listen(appid, () => console.log(`${appid} is listening on ${appid}`));

//Prep for heroku
