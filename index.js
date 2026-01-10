function checkEmail(emailID) {
    var email = document.getElementById(emailID).value;
    if (email === "") {
        alert("please enter your email")
    } else if (email.includes("@") === false) {
        alert("your email is not correct, missing @ symbol")
    } else {
        alert("your email is correct: " + email);
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
            campus = "you are not enrolled";
            break;
    }

    document.getElementById("campus").value = campus;

    console.log("campus==>", campus)
}

var paragraph = false;

function expentpara() {
    var expandedText = 'Ya hai click karna k bad ka text';

    if (!paragraph) {
        document.getElementById("expent").innerHTML = expandedText + ' <a href="#" onclick="expentpara()"><em> Click for Less</em></a>';
        paragraph = true;
    } else {
        document.getElementById("expent").innerHTML = ' This is a small information <a href="#" onclick="expentpara()"><em> Click for more</em></a>';
        paragraph = false;
    }
}


var oderList = false;

function list() {
    var listItems = '<li>Rafay</li><li>Ali</li><li>Osama</li><li>bilal</li>';
    var oderListH1 = '<h1>Oder List</h1>';
    var buttonTextchange = 'Click to Hide Oder List';

    if (oderList === false) {
        document.getElementById("oderList").innerHTML = oderListH1 + listItems;
        document.getElementById("changeOderListButtonText").innerText = buttonTextchange;
        oderList = true;
    } else {
        document.getElementById("oderList").innerHTML = '';
        document.getElementById("changeOderListButtonText").innerText = 'Click to get oder list ';
        oderList = false;
    }

}

var oderList = false;

function listImage() {
    var listItems = '<img src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww" alt="Car image" width="200px">';
    var oderListH1 = '<h1>Image</h1>';
    var buttonTextchange = 'Click to Hide Image';

    if (oderList === false) {
        document.getElementById("oderListImage").innerHTML = oderListH1 + listItems;
        document.getElementById("changeOderListButtonImage").innerText = buttonTextchange;
        oderList = true;
    } else {
        document.getElementById("oderListImage").innerHTML = '';
        document.getElementById("changeOderListButtonImage").innerText = 'Click to get images ';
        oderList = false;
    }

}

// first car image hide and show

function hideImage() {
    document.getElementById("hideImage").className = "imageHide";
}



function showImage() {
    document.getElementById("hideImage").className = "";
}

// second image big and small on hover

function bigImage() {
    var image = document.getElementById("imageHideShow");
    image.className = "bigImage";
    console.log("image==>", image)
}

function smallImage() {
    var image = document.getElementById("imageHideShow");
    image.className = "smallImage";
    console.log("image==>", image)
}

