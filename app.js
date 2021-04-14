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






app.use(express.static("public"));
//Copied

// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
    res.sendFile(__dirname+"/Frontpage.html");
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
    successRedirect: "/secret",
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

  res.sendFile(__dirname+"/Front.html");

});
/* app.get("/Frontpage",function(req,res){

  res.sendFile(__dirname+"/Frontpage.html");

});
*/

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


/*app.listen(3000,function(){
  console.log("Server started");
});
*/

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
});
