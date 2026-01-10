function checkEmail(emailID) {
    var email = document.getElementById(emailID).value;
    if (email === "") {
        alert("please enter your email")
    } else if (email.includes("@") === false) {
        alert("your email is not correct, missing @ symbol")
    } else {
        alert("your email is correct", email)
    }
    console.log("Email==>", email)
    console.log("emailID==>", emailID)
}



function checkCampus() {
    var rollNumber = document.getElementById("rollNumber").value;
    var campus = "";

    switch (rollNumber) {
        case "100":
            campus = "zaiton ashraf campus";
            break;
        case "200":
            campus = "gunshan campus";
            break; 
        case "300":
            campus = "bahadurabad campus";
            break; 
        default:
            campus = "you are not inrolled";
            break;
    }

    document.getElementById("campus").value = campus;

        console.log("campus==>", campus)
}

var paragraph = false;

function expentpara() {
    var expentpara = 'Ya hai click karna k bad ka text'

    if(paragraph === false) {
        document.getElementById("expent").innerHTML = expentpara +  '<a href="#" onclick="expentpara()"><em> Click for Less</em></a>';
        paragraph = true;
    } else {
        document.getElementById("expent").innerHTML = ' This is a small information <a href="#" onclick="expentpara()"><em> Click for more</em></a>';
        paragraph = false;
    }
}



function list(){
    var listItems = '<li>Rafay</li><li>Ali</li><li>Osama</li><li>bilal</li>';
    var oderListH1 = '<h1>Oder List</h1>';

    document.getElementById("oderList").innerHTML = oderListH1 + listItems;
    
}