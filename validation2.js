function validate2() {
    /*
    Check the information that user enter and return the correct image
    */
    document.getElementById("Email").appendChild(getImage(emailCheck(document.forms["myForm"]["email"].value), "email"));
    document.getElementById("Phone").appendChild(getImage(phonenumberCheck(document.forms["myForm"]["phone"].value), "phone"));
    document.getElementById("City").appendChild(getImage(cityCheck(document.forms["myForm"]["city"].value), "city"));
    /*
    Special check for State because it's a drop-down select
    */
    if (document.forms["myForm"]["state"].selectedIndex == 0 )
    {
      stateCheck = false;
     document.getElementById("state").appendChild(getImage(false,"state"));
    } else
    //This is also save State in localStorage
    {
      var stateData = document.forms["myForm"]["state"].value;
      localStorage.setItem("State",stateData);
      document.getElementById("state").appendChild(getImage(true,"state"));
      stateCheck = true;
    }
    // We also need to store city name in localStorage
    var cityData = document.forms["myForm"]["city"].value;
    localStorage.setItem("City",cityData);

    /*
    Check all inputs are valid, then direct to next page
    */
    if ( (emailCheck(document.forms["myForm"]["email"].value)) == true &&
    (phonenumberCheck(document.forms["myForm"]["phone"].value)) == true &&
    (cityCheck(document.forms["myForm"]["city"].value)) == true && stateCheck == true)
    {
      window.location.href = "map.html";
    }
}
/*
Validate phone number in correct format
*/
function phonenumberCheck(phone){
// case 1 10 digits xxxxxxxxxx
var case1 = /^\d{10}$/;
// case 2 10 digits xxx-xxx-xxxx or xxx xxx xxxx or xxx.xxx.xxxx
var case2 =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if (phone.match(case1)|| phone.match(case2)) {
   return true;
 } else {
   return false;
 }
}
/*
Retrieve correct image if passing value is true, else return wrong image
*/
function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}
//Check if the email is in correct formart
function emailCheck(email) {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(emailRegex))
    {
      return true;
    } else {
      return false;
    }
}
/*
Use this code for the city name that has space or dash in between the name
e.g: Sioux City - passed (where i come from)
*/
function cityCheck(cityname){
  var cityregex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  if (cityname.match(cityregex)){

  return true;
}else {

  return false;}
}

//Check if entry only contain chacracter and number
function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}
