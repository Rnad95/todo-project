var userName, age, gender, message;

var confirmMsg = confirm("You want to skip the welcoming message ");
if (confirmMsg === true) {
    alert("Welcome");
}
else {

    userName = prompt("Enter your name please: ");
    gender = prompt("Enter your gender please: ");
    age = Number(prompt("Enter your age: "));

    gender = gender.toLowerCase();
    console.log(gender);


    switch (gender) {
        case "female":
            message = "Welcome, \n Hello Mrs. ";
            break;
        case "male":
            message = "Welcome, \n Hello Mr. "
            break;
        default:
            alert("Your gender is not correct");
            message = "Welcome, ";
    }

    if (age <= 0)
        alert("Your age less than or equal zero");

    alert(message + userName);

}



