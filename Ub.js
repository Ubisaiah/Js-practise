
function getPersonDetails() {
    let name = prompt("Please input name");
    let gender = prompt("Gender");
    let year = prompt("Year of birth");
    let age = 2024 - year;
    let days = year * 365;
    
    alert("hello " + name + " you are " + " a " + gender + ", you are " + age + " years old " + " and have lived for a period of " + days + " days " + ". That all about you, thanks");
}