let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burawala", "Shekhupura", "Kashmir"]


// simple alert 
function simpleAlert(){
    alert("Alert Button is Clicked")
    document.getElementById("output").innerHTML = "alert button is clicked"
}

// print my name 
function printName (){
    let userName = prompt("Please Enter Your Name")
    document.getElementById("output").innerHTML = userName ;
}

// print all cities 
function printAllCities(){
    document.getElementById("output").innerHTML = " "
    for (let i=0; i<cities.length; i++){
        document.getElementById("output").innerHTML += i+1 +") " + cities[i] + "<br />"
    }
}

// add city in list 
function addCity(){
    document.getElementById("output").innerHTML = " "
    let newCity = prompt("Please Enter City Name You Want To Add")
    cities.push(newCity)

    for (let i=0; i<cities.length; i++){
        document.getElementById("output").innerHTML += i+1 +")" + cities[i] + "<br />"
    }
}

// generate table 
function generateTable(){
    tableNumber = +prompt("Please Enter Table Number That Use Want To Generate")
    document.getElementById("output").innerHTML = `<h3>Table of ${tableNumber}<h3/> <hr />`
    for(let i=1; i<11; i++){
        let table = tableNumber + " * " + i + " = " + tableNumber*i + "<br />"
        document.getElementById("output").innerHTML += table ;
    }
}

// clear Intput button 
function clearInput (){
    document.getElementById("intput").innerHTML = " "
}


// clear output button 
function clearOutput (){
    document.getElementById("output").innerHTML = " "
}