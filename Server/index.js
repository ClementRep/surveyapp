const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "19992509",
    database: "survey"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post("/", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const contact = req.body.contact;


db.query("INSERT INTO surveyinfo(name,age,contact)VALUES(?,?,?)",
[name,age,contact],
(err, result) => {
    console.log("error", err);
    console.log("result", result);
}
)
    /*const sqlInsert = "INSERT INTO surveyinfo(name,age,contact) VALUES(?,?,?)";
    db.query(sqlInsert, (err, result) => {
        console.log("error", err);
        console.log("result", result);
    })
    */
    res.send("hello express");
});

app.get("/survier",(req,res)=>{
db.query("SELECT * FROM surveyinfo",(err,result)=>{
    if(err){
        console.log(err);
    }else{
        res.send(result)
    }
})
});




app.listen(5000, () => {
    console.log("server is running");
})