const fs = require('fs');
const { argv } = require('process');

let rawdata = fs.readFileSync('users.json');
let data = JSON.parse(rawdata);

const answer = argv[2];
let liste = [];
let trouvé;

if (answer == "société") {
    for (element in data) {
        for (el in liste) {
            if (el.company == data[element].company) {
                trouvé = 1;
            } else {
                trouvé = 0;
            }
        }
        let obj = new Object();
        if (trouvé) {
            el.compteur += 1;
        } else {
            obj.company = data[element].company;
            obj.compteur = 1;
            liste.push(obj);
        }
    }
    for(society in liste){
        console.log(society);
    }
} else if (answer == "pays") {
    for (element in data) {
        console.log(data[element].country);
    }
} else {
    console.log('RAPPEL : Les arguments sont soit société soit pays !\n');
}








