//Particula
const express=require('express')
const bodyParser=require('body-parser');
const app=express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));



app.get("/",function(req,res){

  res.sendFile(__dirname+"/Front.html");

});
app.get("/Frontpage",function(req,res){

  res.sendFile(__dirname+"/Frontpage.html");

});

app.get("/staffMember",function(req,res){

  res.sendFile(__dirname+"/staffMember.html");

});

app.get("/AdminMod",function(req,res){

  res.sendFile(__dirname+"/AdminMod.html");

});

app.get("/doctor",function(req,res){

  res.sendFile(__dirname+"/doctor.html");

});

app.get("/doctorDetails",function(req,res){

  res.sendFile(__dirname+"/doctor_details.html");

});

app.get("/staffMemberDetail",function(req,res){

  res.sendFile(__dirname+"/staffMemberDetail.html");

});

app.get("/DoctorMod",function(req,res){

  res.sendFile(__dirname+"/DoctorMod.html");

});

app.get("/PatientMod",function(req,res){

  res.sendFile(__dirname+"/PatientMod.html");

});

app.get("/PatientRegistration",function(req,res){

  res.sendFile(__dirname+"/PatientRegistration.html");

});

app.get("/MedicalRecord",function(req,res){

  res.sendFile(__dirname+"/MedicalRecord.html");

});

app.get("/patient_examine",function(req,res){

  res.sendFile(__dirname+"/patient_examine.html");

});

app.get("/ViewPatient",function(req,res){

  res.sendFile(__dirname+"/ViewPatient.html");

});
app.get("/patient_details",function(req,res){

  res.sendFile(__dirname+"/patient_details.html");

});
app.get("/record_details",function(req,res){

  res.sendFile(__dirname+"/record_details.html");

});
app.get("/examine_details",function(req,res){

  res.sendFile(__dirname+"/examine_details.html");

});

app.get("/ReceptionMod",function(req,res){

  res.sendFile(__dirname+"/ReceptionMod.html");

});





app.post("/doctor",function(req,res){
res.send("Thanks for posting");
});


app.post("/",function(req,res){
res.send("Thanks for posting");
});


app.listen(3000,function(){
  console.log("Server started");
});
