//Particula
var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose =
        require("passport-local-mongoose"),
    User = require("./models/user");


    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect("mongodb://localhost/hospital");





    var app = express();
    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({ extended: true }));


    app.use(require("express-session")({
        secret: "Rusty is a dog",
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    const appointSchema=new mongoose.Schema({
      name:String,
      date:String,
      time:String,
      reason:String,
      id:String

});
const Appoint=mongoose.model("Appoint",appointSchema);






app.use(express.static("public"));
//Copied

// Showing secret page
app.get("/sec", isLoggedIn, function (req, res) {

    res.sendFile(__dirname+"/html/Frontpage.html");
});

app.get("/display1", function (req, res) {
    res.render("display1");
  });


app.post("/display", function (req, res) {
  var doct1=req.body.doctorId1;
  var dat=req.body.Daate;
  Appoint.find({id:doct1,date:dat},function(err,appts){
    if(err){console.log(err);}else{console.log("Done");}
    res.render('display',{'appts':appts});
  });

});

app.get("/appoint", function (req, res) {
    res.render("appoint");
});

app.post("/appoint", function (req, res) {
    var name1=req.body.name;
    var date1=req.body.date;
    var time1=req.body.time;
    var reason1=req.body.reason;
    var id1=req.body.doctorId;

    const appt=new Appoint({name:name1,date:date1,time:time1,reason:reason1,id:id1});
    appt.save();
      res.sendFile(__dirname+"/ReceptionMod.html");

});




// Showing register form
app.get("/register", function (req, res) {
    res.render("register");
});

// Handling user signup
app.post("/register", function (req, res) {
    var username = req.body.username
    var password = req.body.password
    User.register(new User({ username: username }),
            password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }

        passport.authenticate("local")(
            req, res, function () {
              res.sendFile(__dirname+"/Frontpage.html");
        });
    });
});



//Showing login form
app.get("/login", function (req, res) {
    res.render("login");
});

//Handling user login
app.post("/login", passport.authenticate("local", {
    successRedirect: "/sec",
    failureRedirect: "/"
}), function (req, res) {
});







//Handling user logout
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}






























app.get("/",function(req,res){

  res.sendFile(__dirname+"/html/Front.html");

});
/* app.get("/Frontpage",function(req,res){

  res.sendFile(__dirname+"/Frontpage.html");

});
*/

app.get("/staffMember",function(req,res){

  res.sendFile(__dirname+"/html/staffMember.html");

});

app.get("/AdminMod",function(req,res){

  res.sendFile(__dirname+"/html/AdminMod.html");

});

app.get("/doctor",function(req,res){

  res.sendFile(__dirname+"/html/doctor.html");

});

app.get("/doctorDetails",function(req,res){

  res.sendFile(__dirname+"/html/doctor_details.html");

});

app.get("/staffMemberDetail",function(req,res){

  res.sendFile(__dirname+"/html/staffMemberDetail.html");

});

app.get("/DoctorMod",function(req,res){

  res.sendFile(__dirname+"/html/DoctorMod.html");

});

app.get("/PatientMod",function(req,res){

  res.sendFile(__dirname+"/html/PatientMod.html");

});

app.get("/PatientRegistration",function(req,res){

  res.sendFile(__dirname+"/html/PatientRegistration.html");

});

app.get("/MedicalRecord",function(req,res){

  res.sendFile(__dirname+"/html/MedicalRecord.html");

});

app.get("/patient_examine",function(req,res){

  res.sendFile(__dirname+"/html/patient_examine.html");

});

app.get("/ViewPatient",function(req,res){

  res.sendFile(__dirname+"/html/ViewPatient.html");

});
app.get("/patient_details",function(req,res){

  res.sendFile(__dirname+"/html/patient_details.html");

});
app.get("/record_details",function(req,res){

  res.sendFile(__dirname+"/html/record_details.html");

});
app.get("/examine_details",function(req,res){

  res.sendFile(__dirname+"/html/examine_details.html");

});

app.get("/ReceptionMod",function(req,res){

  res.sendFile(__dirname+"/html/ReceptionMod.html");

});





app.post("/doctor",function(req,res){
res.send("Thanks for posting");
});


app.post("/",function(req,res){
res.send("Thanks for posting");
});


/*app.listen(3000,function(){
  console.log("Server started");
});
*/

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
});
