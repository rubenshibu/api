let express = require('express');
let app = express();
let sql = require('sqlite3').verbose()
let db = new sqlite3.Database(':memory')
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS shortner(shorter VARCHAR(5), longer VARCHAR(256)) ")
})

app.get('/server',(req,res)=>{
    res.json({name:"ruben"})
})

app.get('/server/:region',(req,res) => {
    res.send("the region is " + req.params.region)
})
app.listen(2580)