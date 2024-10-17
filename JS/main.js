
let people = [];

function lisaaListaan() {
    
    for (let kerrat = 0; kerrat < 10; kerrat ++) {
        
        let person = prompt("Nimi tänne");
        
        if (person != null) {
            people.push(person); //lisätään array listaan kun tehtävä sitä halusi
        }
    }

    if (kerrat = 10) {
        listanTulostus();
    }
}

function listanTulostus() {

    for (let kerrat2 = 0; kerrat2 < people.length; kerrat2 ++) {

        let uusiNimi = document.createElement("li");
        uusiNimi.innerHTML = people[kerrat2];
        document.getElementById("kaverit1").append(uusiNimi);
    }


}