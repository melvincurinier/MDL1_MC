const fs = require('fs');
const { argv } = require('process');

let rawdata = fs.readFileSync('users.json');
let data = JSON.parse(rawdata);

const answer = argv[2];

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








