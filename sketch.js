

var a1, a1Img;
var a2, a2Img;
var a3, a3Img;
var a4, a4Img;
var a5, a5Img;

var database;
var surrender_species=""
var surrender_breed=""
var surrender_name = ""
var surrender_attention = ""
var surrender_floofiness= ""
var surrender_age = ""
var surrender_number = ""
var surrender_allergies = ""
var surrender_purpose = ""


var volunteer_age =""
var volunteer_name=""
var volunteer_purpose=""
var volunteer_skills=""
var volunteer_allergies=""
var volunteer_contact=""

var adopt_house=""
var adopt_hours=""
var adopt_pet=""
var adopt_excersise=""
var adopt_childeren=""
var adopt_age=""
var adopt_name=""
var adopt_contact=""
var adopt_howmany=""
var adopt_allergy = "";

var specialist_job = "";
var specialist_name = ""; 
var specialist_contact= ""; 
var specialist_email = ""; 
var specialist_certification = ""; 
var specialist_age = "";


var petDetails = []



function preload(){
 a1Img=loadImage("Assets/paws.jpeg")
}


function setup(){
    
    database= firebase.database()
}


function draw(){

    
    getting()
}

function openPet(){
    window.location.replace("pets.html")
}
function openVolunteer(){
    window.location.replace("volunteering.html")
}


function surrender(){
    window.location.replace("surrender.html")
}
function backbutton(){
    window.location.replace("index.html")    
}
function openSpecialist(){

    window.location.replace("specialist.html')

 
}



function submit(){

    surrender_species = document.getElementById("surrender_species").value ;
    surrender_breed= document.getElementById("surrender_breed").value;
    surrender_name = document.getElementById("surrender_name").value;
    surrender_attention = document.getElementById("surrender_attention").value ;
    surrender_floofiness= document.getElementById("surrender_floofiness").value;
    surrender_age = document.getElementById("surrender_age").value ;
    surrender_number= document.getElementById("surrender_number").value;
    surrender_allergies = document.getElementById("surrender_allergies").value ;
    surrender_purpose = document.getElementById("surrender_purpose").value ; 
    
    var dataPet = "pets/" + surrender_name
    database.ref(dataPet).set({
        species:surrender_species,
        breed:surrender_breed,
        name:surrender_name,
        attention:surrender_attention,
        floofiness:surrender_floofiness,
        age:surrender_age,
        contact:surrender_number,
        allergies:surrender_allergies,
        purpose:surrender_purpose,

    })

     document.getElementById("surrender_species").value = "";
   document.getElementById("surrender_breed").value = "";
   document.getElementById("surrender_name").value = "";
    document.getElementById("surrender_attention").value = "";
    document.getElementById("surrender_floofiness").value= "";
    document.getElementById("surrender_age").value = "";
    document.getElementById("surrender_number").value = "";
    document.getElementById("surrender_allergies").value = "";
    document.getElementById("surrender_purpose").value = ""; 
  
 alert("Thanks for submitting your data!")

    
}
function volunteer(){
 
    volunteer_age = document.getElementById("volunteer_age").value ;
    volunteer_allergies= document.getElementById("volunteer_allergies").value;
    volunteer_contact = document.getElementById("volunteer_contact").value;
    volunteer_name = document.getElementById("volunteer_name").value ;
    volunteer_skills = document.getElementById("volunteer_skills").value;
    volunteer_purpose = document.getElementById("volunteer_purpose").value ;
   
    
    var dataPet = "volunteer/" + volunteer_name
    database.ref(dataPet).set({
        name:volunteer_name,
        age:volunteer_age,
        contact:volunteer_contact,
        skills:volunteer_skills,
        purpose:volunteer_purpose,
        allergies:volunteer_allergies,


    })
   
    document.getElementById("volunteer_age").value = "";
    document.getElementById("volunteer_allergies").value= "";
    document.getElementById("volunteer_contact").value= "";
    document.getElementById("volunteer_name").value = "";
    document.getElementById("volunteer_skills").value= "";
    document.getElementById("volunteer_purpose").value = "";

 alert("Thanks for submitting your data!")

}


function adopt(){

    adopt_age = document.getElementById("adopt_age").value ;
    adopt_allergy= document.getElementById("adopt_allergy").value;
    adopt_contact = document.getElementById("adopt_contact").value;
    adopt_name = document.getElementById("adopt_name").value ;
    adopt_house= document.getElementById("adopt_house").value;
    adopt_hours = document.getElementById("adopt_hours").value ;
    adopt_pet= document.getElementById("adopt_pet").value ;
    adopt_howmany= document.getElementById("adopt_howmany").value ;
    adopt_children = document.getElementById("adopt_children").value;
    adopt_excersise= document.getElementById("adopt_excersise").value ;
    

    var dataPet = "prospect/" + adopt_name
    database.ref(dataPet).set({
        name:adopt_name,
        age:adopt_age,
        contact:adopt_contact,
        allergies:adopt_allergy,
        house:adopt_house,
        hours:adopt_hours,
        species:adopt_pet,
        quantity:adopt_howmany,
        children:adopt_childeren,
        excersise:adopt_excersise,

    })


 // making text box empty

    document.getElementById("adopt_age").value = "";
    document.getElementById("adopt_allergy").value= "";
    document.getElementById("adopt_contact").value= "";
     document.getElementById("adopt_name").value = "";
     document.getElementById("adopt_house").value= "";
    document.getElementById("adopt_hours").value = "";
    document.getElementById("adopt_pet").value = "";
    document.getElementById("adopt_howmany").value = "";
    document.getElementById("adopt_children").value = "";
    document.getElementById("adopt_excersise").value = "";

  alert("Thanks for submitting your data!")
     

}


function getting (){

    database.ref("/").on("value" , data => {
        petDetails = data.val()
    })
    

}
function specialist(){


    specialist_job = document.getElementById("specialist_job").value ;
    specialist_name = document.getElementById("specialist_name").value ;
    specialist_contact = document.getElementById("specialist_contact").value ;
    specialist_email = document.getElementById("specialist_email").value ;
    specialist_certifications = document.getElementById("specialist_certifications").value ;
    specialist_age = document.getElementById("specialist_age").value ;
   
    

    var dataPet = "Specialist/" + specialist_name
    database.ref(dataPet).set({
        name:specialist_name,
        age:specialist_age,
        contact:specialist_contact,
        job:specialist_job,
        certifications:specialist_certifications,
        age:specialist_age
     

    })


 // making text box empty

    document.getElementById("specialist_job").value ="";
    document.getElementById("specialist_name").value  ="";
    document.getElementById("specialist_contact").value  ="";
    document.getElementById("specialist_email").value  ="";
    document.getElementById("specialist_certifications").value  ="";
    document.getElementById("specialist_age").value  ="";
   
    
  

  alert("Thanks for submitting your data!")
     

}


function getting (){

    database.ref("/").on("value" , data => {
        petDetails = data.val()
    })
    

}


