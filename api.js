const express = require('express');
const app = express();

const xlsx = require('xlsx');


var cors = require('cors')
app.use(cors())

app.use(express.json());


app.get('/',function (req, res){
    
     let workbook = xlsx.readFile('data7.xlsx')
     let  worksheet = workbook.Sheets["students"];
     let data = xlsx.utils.sheet_to_json( worksheet);
     res.send(data)
    

    
  
})


app.post('/addstudents',function (req, res){
     console.log(req.body)
    

     let workbook = xlsx.readFile('data7.xlsx');
     
     let worksheet = workbook.Sheets["students"];
     let newStudent =req.body;
     xlsx.utils.sheet_add_json(worksheet,[newStudent],{skipHeader:true , origin:-1})
     xlsx.writeFile(workbook, "data7.xlsx");

     res.send('new student is added');

})


app.listen(3000)