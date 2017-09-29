function validate1() {
    // Check for first name and last name contain only character and number
    var fnameimage = getImage(alphaNumCheck(document.forms["myForm"]["fname"].value), "fname");
    document.getElementById("Fname").appendChild(fnameimage); //This for insert image
    var lnameimage = getImage(alphaNumCheck(document.forms["myForm"]["lname"].value), "lname");
    document.getElementById("Lname").appendChild(lnameimage);
    (document.forms["myForm"]["fname"].value == 0 || alphaNumCheck(document.forms["myForm"]["fname"].value)==false) ? fnameCheck = false: fnameCheck = true;

    (document.forms["myForm"]["lname"].value == 0 || alphaNumCheck(document.forms["myForm"]["lname"].value)==false) ? lnameCheck = false: lnameCheck = true;
    /*
    Check if user select Gender or State
    insert image
    */
    if (document.forms["myForm"]["gender"].selectedIndex == 0 )
        {
            document.getElementById("gender").appendChild(getImage(false,"gender"));
            genCheck = false;
         } else {
           document.getElementById("gender").appendChild(getImage(true,"gender"));
           genCheck = true;
         }
    if (document.forms["myForm"]["state"].selectedIndex == 0 )
    {
      stateCheck = false;
     document.getElementById("state").appendChild(getImage(false,"state"));
    } else
    //This is also save State in localStorage
    {
      var data = document.forms["myForm"]["state"].value;
      localStorage.setItem("State",data);
      document.getElementById("state").appendChild(getImage(true,"state"));
      stateCheck = true;
    }
    /*
    Check all inputs are valid, then direct to validation2.html
    */
    if (fnameCheck == true && lnameCheck == true && genCheck == true && stateCheck == true)
    {
      window.location.href = "validation2.html";
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
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    valCheck = false;
    return false;
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
