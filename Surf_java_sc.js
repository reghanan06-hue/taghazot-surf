// code source .........JS.......

//     o Intégration de l'API météo.............



const apiKey = "39d6ed49fcbba410c4433fc64c2ae867";
const city = "Taghazout";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp;
    const wind = data.wind.speed;
    const humidite = data.main.humidity;
    const description = data.weather[0].description;

     document.getElementById("temp_value").innerHTML = `Température : ${temp}°C`;
    document.getElementById("vente_value").innerHTML = `Vent : ${wind} m/s`;
    document.getElementById("humidite_value").innerHTML = `Humidité : ${humidite}%`;
    document.getElementById("info_wether").innerHTML = `Les informations météo : ${description}`;
 
 
  })
  .catch(error => console.error("Erreur : ", error));
 
 
 
 


//code source .........................

// o Validation de formulaire pour le contact


 
//creer une fonction pour Envoyer les D quqnt usser click on bttn envoyer
function Send_data(){

var myname = nom.value;
  // stock le nom  dans  VARIABLE myname
var nom = document.getElementById('first_name');
var myname = nom.value;
// stock l'email dans v
var email = document.getElementById('my_email');
var myemail = email.value;  
// stock le message dans a
var message = document.getElementById('story');
var my_msg = message.value; 


  //console.log(myname);
  // test les champes vides 
  
  if (myname != "" && myemail != ""  && my_msg != ""){
 
 alert("Les informations envoyées !"); 
// vider les champs aprés user clic sur envoye
    nom.value = "";
    email.value = "";
    message.value = ""
  
  }else{  
    alert(" remplir les champs vides !");
 }

 }  
