let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burawala", "Shekhupura", "Kashmir"]

let input = document.getElementById("input-group")



// btn clear input
function clearInput(){
    document.getElementById("input-group").value = ""
}
// btn clear output
function clearOutput(){
    document.getElementById("output").innerHTML=""
}


// btn simple aler
function simpleAlert(){
    let simpleAlert  = input.value
    if(!simpleAlert){
    
     document.getElementById("output").innerHTML="Please Enter somthing else in input-box that u wanna alert...!!!"
    }else{
        alert(input.value)
        document.getElementById("output").innerHTML="This is a simple alert function"
    }
   
}

// btn My name
function myName(){
    let myName = input.value
   document.getElementById("output").innerHTML=input.value
   if(!myName){
    alert("Please Enter Your Name in input box")
    // document.getElementById("output").innerHTML="Please Enter Your Name in input box"
   }
}

// btn print all cities 

function printCities(){
    document.getElementById("output").innerHTML = " "
    for (let i=0; i<cities.length; i++){
        document.getElementById("output").innerHTML += i+1 +") " + cities[i] + "<br />"
    }
}

    // btn add city 

function addCity(){
    let city = document.getElementById("input-group").value
    if (!city){
        alert("Please enter a city in input box")
        return;
    }
    cities.push(city)
    document.getElementById("output").innerHTML= '<span style=color:green;> Your city has successfully been added.</span'
}

// generating table 
function generateTable(){
    let number = document.getElementById("input-group").value
    if (!number){
        alert("Please enter a number for creating table of that number")
        return;
    }
    let limit = +prompt("Enter table`s Limit")
    
    document.getElementById("output").innerHTML = " ";
    
    for (let index=1 ; index<=limit;index++){
        document.getElementById("output").innerHTML += number + '*' + index + '=' + number*index + '<br>'
    }

    
}
