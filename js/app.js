let userName, age, gender;
let info = [];
let confirmMsg = confirm("Do you want to answer some question to us :)");
if (confirmMsg === true) {

    userName = prompt("Enter your name please: ");
    User(userName);

    checkGender();
    age = Number(prompt("Enter your age please: "));
    userAge(age);
    var ageCheck = checkAge(age);
    info.push(ageCheck);

    let Msg = prompt("Enter your suggestions please:")
    Message(Msg);
    let arrayCheck = checkValid(info);

    QuestionLoc();
    QuestionMic();
    QuestionIP();
    QuestionDb();



    printArray(info);

}
else {
    alert("Welcome Mr/Mr.s Anonymous ;)");

}

function User(userName) {

    info.push(userName);
    console.log("UserName is Saved");
}

function UserGender(gender) {

    gender = gender.toLowerCase();
    checkGender(gender);
}

function Message(Msg) {
    info.push(Msg);
    console.log(alert("Your suggestion is saved"));
}

//adding a gender check function
function checkGender() {
    gender = prompt("Welcome " + userName + " :) ,\nPlease Enter your gender: ");
    gender = gender.toLowerCase();
    while (gender != "female" && gender != "male" && gender != "f" && gender != "ma") {
        gender = prompt("Enter your gender please: 'Hint please type female or male' ");
        gender = gender.toLowerCase();
    }


    console.log("Gender is Saved");
    let message = "";
    switch (gender) {
        case "female":
            message = "Welcome, Mrs. " + userName;
            break;
        case "male":
            message = "Welcome, Mr. " + userName;
            break;
        default:
            message = "Welcome, ";
    }
    info.push(gender);
    return message;

}


function userAge(age) {
    info.push(age);
}
//adding valid check function
function checkValid(infoArr) {
    for (var i = 0; i < infoArr.length; i++) {
        if (infoArr[i] == "")
            infoArr[i] = "invalid";
        else
            continue;
    }
    console.log(infoArr);
}

function QuestionIP() {
    let M1 = confirm("Do you want to allow to access your IP?");
    if (M1) {
        //"Access to User's Location";
        alert("Access to IP");
        console.log("Access to IP");

    }
    else
        alert("Access to IP");
    console.log("Don't access to your IP");

}

function QuestionLoc() {
    let Loc = prompt("Do you want to allow to access your Loc?")
    Loc = Loc.toLowerCase();
    while (Loc != "yes" && Loc != "no" && Loc != "y" && Loc != "n") {
        Loc = prompt("Please type your answer correctly: 'Hint please type yes(y) / no(n)' ");
        Loc = Loc.toLowerCase();
    }
    info.push(Loc);
    if (Loc)
        console.log("Loc is Accessed");
    else
        console.log("Loc isn't Accessed")

}

function QuestionMic() {
    let Mic = prompt("Do you want to allow to access to your Mic?")
    Mic = Mic.toLowerCase();
    while (Mic != "yes" && Mic != "no" && Mic != "y" && Mic != "n") {
        Mic = prompt("Please type your answer correctly: 'Hint please type yes(y) / no(n)' ");
    }
    info.push(Mic);
    if (Mic)
        console.log("Mic is Accessed");
    else
        console.log("Mis isn't Accessed")
}

function QuestionDb() {
    let Db = confirm("Are you sure you want to save this thing into the database?");
    if (Db) {
        alert("Database is Saved")
        console.log("Database is Saved")
    }
    else
        alert("Data will not save in database :)");
    console.log("Data will not save in database")
}

//adding a print function
function printArray(info) {
    for (var x = 0; x < info.length; x++) {
        console.log(info[x]);
    }
}

//adding a age check function
function checkAge(modifiedAge) {
    while (modifiedAge <= 0) {

        var modifiedAge = prompt("Your age less than or equal zero, please write your age correctly:");

    }
    return modifiedAge;
}
