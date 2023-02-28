const fs = require('fs');
const { argv } = require('process');

/**
 * 
 * @param {*} path 
 * @returns data du fichier au bout du chemin
 */
function getData(path) {
    let rawdata = fs.readFileSync(`${path}`);
    let data = JSON.parse(rawdata);
    return data;
}

/**
 * 
 * @param {*} indice le indice ième du tableau argv
 * @returns argument
 */
function getArgv(indice) {
    return argv[indice];
}

/**
 * 
 * @param {*} data 
 * @returns 
 */
function getCountByCompany(data) {
    const countByCompany = data.reduce((tab, user) => {
        tab[user.company] = (tab[user.company] ?? 0) + 1;
        return tab;
    }, {});
    return countByCompany;
}

/**
 * 
 * @param {*} data 
 * @returns 
 */
function getCountByCountry(data) {
    const countByCountry = data.reduce((tab, user) => {
        tab[user.country] = (tab[user.country] ?? 0) + 1;
        return tab;
    }, {});
    return countByCountry;
}

/**
 * 
 * @param {*} group 
 * @returns 
 */
function sort(group) {
    const sort = Object.entries(group).sort((a, b) => b[1] - a[1]);
    return sort;
}

/**
 * 
 * @param {*} sort 
 */
function print(sort) {
    sort.forEach(([group, count]) => {
        console.log(`${group} - ${count}`);
    })
}

const path = 'users.json';
let data = getData(path);

let input = getArgv(2);

if (input === "company") {
    let group = getCountByCompany(data);
    const sorted = sort(group);
    print(sorted);
} else if (input === "country") {
    let group = getCountByCountry(data);
    const sorted = sort(group);
    print(sorted);
} else {
    console.log('RAPPEL : Les arguments sont soit company soit country !\n');
}