let userName, age, gender;
let info = [];
let confirmMsg = confirm("You want to skip the welcoming message ");
if (confirmMsg === true) {
    alert("Welcome");
}
else {

    //adding a gender check function
    var checkGender = function (gender) {

        let message = "";
        switch (gender) {
            case "female":
                message = "Welcome, Mrs. " + userName;
                break;
            case "male":
                message = "Welcome, Mr. " + userName;
                break;
            default:
                alert("Your gender is not correct");
                message = "Welcome, ";
        }
        return message;
    }

    //adding valid check function
    function checkValid(infoArr) {
        for (var i = 0; i < infoArr.length; i++) {
            if (infoArr[i] == "")
                infoArr[i] = "invalid";
            else
                continue;
        }
        return infoArr;
    }

    //adding a print function
    var printArray = (info) => {
        for (var x = 0; x < info.length; x++) {
            console.log(info[x]);
        }
    }

    //adding a age check function
    function checkAge(modifiedAge) {
        while (modifiedAge <= 0) {

            var modifiedAge = prompt("Your age less than or equal zero, please write your age correctly:");
            // console.log(modifiedAge);
        }
        return modifiedAge;
    }


    userName = prompt("Enter your name please: ");
    info.push(userName);

    gender = prompt("Enter your gender please: ");
    gender = gender.toLowerCase();
    while (gender != "female" && gender != "male") {
        gender = prompt("Enter your gender please: 'Hint please type female or male' ");
        gender = gender.toLowerCase();
    }
    info.push(gender);




    age = Number(prompt("Enter your age please: "));

    var ageCheck = checkAge(age);
    info.push(ageCheck);


    let arrayCheck = checkValid(info);


    let maritalStatus = confirm("Are you married?");
    info.push(maritalStatus);


    let IP = confirm("Do you want to allow to access your IP?");
    info.push(IP);


    let loc = confirm("Do you want to allow to access your location?");
    info.push(loc);

    let Msg = prompt("Enter your suggestions please:")
    info.push(Msg);

    //  console.log(arrayCheck);

    var genderCheck = checkGender(gender);
    alert(genderCheck);

    printArray(info);



}