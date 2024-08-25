"use strict";

async function get_json(filepath) {
    return (await fetch(filepath)).json();
}

function load_abilities(texts) {
    for (let category in texts) {
        const div = document.getElementById(category);
        let abilities_list = `<ul>`;
        for (let item of texts[category]) {
            abilities_list += `<li>${item}</li>`;
        }
        abilities_list += '</ul>';
        div.insertAdjacentHTML('afterend',abilities_list);
    }
}

function load_studies(texts) {
    // const studies = texts.sort((a,b) => new Date(a.ini + '-01') - new Date(b.ini + '-01'));
    const div = document.getElementById('studies');
    let studies_list = '<ul>';
    for (let study of texts) {
        studies_list += `<li><strong>${study.title}</strong><br/>${study.ini}&nbsp;&mdash;&nbsp;${study.fin}<br/>${study.where}<br/>${study.institution}</li>`;
    }
    studies_list += '</ul>';
    div.insertAdjacentHTML('afterend',studies_list);
}

function load_experiences(texts) {
    const div = document.getElementById('experiences');
    let experiences_list = '<ul>';
    for (let experience of texts) {
        if (experience.type === 'work') {
            experiences_list += `<li><strong>${experience.title}</strong><br/>${experience.ini}&nbsp;&mdash;&nbsp;${experience.fin}<br/>${experience.where}<br/>${experience.institution}</li>`;
        } else if (experience.type === 'merit') {
            experiences_list += `<li><strong>${experience.title}</strong><br/>${experience.ini}<br/>${experience.where}<br/>${experience.institution}</li>`;
        }
    }
    experiences_list += '</ul>';
    div.insertAdjacentHTML('afterend',experiences_list);
}

get_json("src/texts.json")
.then(texts => {
    load_abilities(texts.abilities);
    load_studies(texts.studies);
    load_experiences(texts.experience);
})
.catch();