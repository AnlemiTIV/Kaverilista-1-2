
var people2 = [];

var vaihtuva = ""; //tänne uusi arvo joka kerta kun nimi lisätään?

// Koulun tutoriaalin mukaan
lomake = document.forms["versio2Form"]; //koska sivu latautui heti syötön jälkeen
lomake.addEventListener("submit", lisaaListaan2);

window.onload = init;

// Poistaa input kentästä tekstin kun sivun lataa

function init() {
    document.getElementById("nimi01").value = "";
}

// Button funktiot alapuolella

function lisaaListaan2(event) {
    
    event.preventDefault();
    
    let person = document.getElementById("nimi01").value; 

    vaihtuva = person;
    
    if (person != null) {
        people2.push(person); //lisätään array listaan kun tehtävä sitä halusi
        
        }
        
        document.getElementById("nimi01").value = "";

        
    listanTulostus2();
}

//Suoritetaan "lisaaListaan2()" funktion yhteydessä, sen lopussa. Ei suoriteta erikseen

function listanTulostus2() {

    let tamaKerta1 = vaihtuva;
    
    let uusiNimi = document.createElement("li");
    uusiNimi.innerHTML = tamaKerta1;
    document.getElementById("kaverit2").append(uusiNimi);
}

// ######################################################################################

// Funktio mikä poistaa nimen mikä syöttökentässä, funktio mikä asettaa olemassa olevan järjestykseen alphabet

function poistaListasta() {

    let person3 = document.getElementById("nimi01").value; 

    var indexi = people2.indexOf(person3);

    if (people2.includes(person3)){
        let poistettava = document.getElementById("kaverit2");
        poistettava.removeChild(poistettava.children[indexi]);
        people2.splice(indexi, 1);

        document.getElementById("nimi01").value = "";
    }

    else {
        document.getElementById("nimi01").value = "";
        return
    }   

// ######################################################################################

}

function jarjestykseen() {

    let testi20 = document.getElementById("kaverit2");
    testi20 = testi20.children;
    people2.sort();

    for (var i = 0; i < testi20.length; i ++){
        testi20[i].innerHTML = people2[i];
    }
}
