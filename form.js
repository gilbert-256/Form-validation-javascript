/** Defining method formValidation */
function formValidation()
{
    // Declaring variables and initializing them to their respective elements
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
{
    // Using if  statement to test whether the condition is true
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
// Returning false if it is not true
return false;

} 

// Defining a method userid_validation with 3 parameters
function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
// Using if statement to test binary expression below
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
// Return statement for false or true
return false;
}
return true;
}
// Defining a method userid_validation with 3 parameters
function passid_validation(passid,mx,my)
{

var passid_len = passid.value.length;
// Using if statement to test binary expression
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
// Return statement for false or true
return false;
}
return true;
}
// Defining a method allLetter with a parameter uname
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
//Using if and else statement to check whether the value matches with alphabet characters
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
// Using if and else statement to check weather the value matches with letters

if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
// Returning false if the statement is not true
return false;
}
}
// Defining a method countryselect with 1 parameter
function countryselect(ucountry)
{
    // Using if with else statements to  test if the country is defait
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}