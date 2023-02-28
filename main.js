const fs = require('fs');
const { argv } = require('process');

/**
 * 
 * @param {*} path 
 * @returns data du fichier au bout du chemin
 */
function getData(path){
    let rawdata = fs.readFileSync(`${path}`);
    let data = JSON.parse(rawdata);
    return data;
}

/**
 * 
 * @param {*} indice le indice ième du tableau argv
 * @returns argument
 */
function getArgv(indice){
    return argv[indice];
}

function groupByAttr(attr, path){
    let data = getData(path);
    const group = data.reduce((tab) =>{
        tab[attr] = (tab[attr] ?? 0) + 1;
    })
    return group;
}


if (answer === "company") {
    const group = data.reduce((company, user) => {
        company[user.company] = (company[user.company] ?? 0) + 1;
        return company;
    }, {});

    const sort = Object.entries(group).sort((a, b) => b[1] - a[1]);

    sort.forEach(([group, count]) => {
        console.log(`${group} - ${count}`);
    });

} else if (answer === "country") {
    const group = data.reduce((country, user) => {
        country[user.country] = (country[user.country] ?? 0) + 1;
        return country;
    }, {});

    const sort = Object.entries(group).sort((a, b) => b[1] - a[1]);

    sort.forEach(([group, count]) => {
        console.log(`${group} - ${count}`);
    });
} else {
    console.log('RAPPEL : Les arguments sont soit company soit country !\n');
}