"use strict";

async function get_json(filepath) {
    return (await fetch(filepath)).json();
}

function load_abilities(texts, id) {
    const div = document.getElementById('abilities-description');
    let abilities_list = `<ul>`;
    for (let item of texts[id]) {
        abilities_list += `<li>${item}</li>`;
    }
    abilities_list += '</ul>';
    div.innerHTML = abilities_list;
}

function load_studies(texts) {
    // const studies = texts.sort((a,b) => new Date(a.ini + '-01') - new Date(b.ini + '-01'));
    const div = document.getElementById('studies-list');
    let studies_list = '<ul>';
    for (let study of texts) {
        studies_list += `<li class="metro-item"><strong>${study.title}</strong><br/>${study.ini}&nbsp;&mdash;&nbsp;${study.fin}<br/>${study.where}<br/>${study.institution}</li>`;
    }
    studies_list += '</ul>';
    div.insertAdjacentHTML('afterbegin',studies_list);
}

function load_experiences(texts) {
    const div = document.getElementById('experience-list');
    let experiences_list = '<ul>';
    for (let experience of texts) {
        if (experience.type === 'work') {
            experiences_list += `<li class="metro-item"><strong>${experience.title}</strong><br/>${experience.ini}&nbsp;&mdash;&nbsp;${experience.fin}<br/>${experience.where}<br/>${experience.institution}</li>`;
        } else if (experience.type === 'merit') {
            experiences_list += `<li class="metro-item-square"><strong>${experience.title}</strong><br/>${experience.ini}<br/>${experience.where}<br/>${experience.institution}</li>`;
        }
    }
    experiences_list += '</ul>';
    div.insertAdjacentHTML('afterbegin',experiences_list);
}

function load_projects(texts) {
    const div = document.getElementById('project-grid');
    let projects_list = '<ul>';
    for (let project of texts) {
        let imgdiv = '';
        if(project.img != null) {
            imgdiv = `<a class="card-img" href="${project.img}" target="_blank"><img src="${project.img}" alt="${project.title}"/></a>`;
        }
        const technologies = project.technologies.join(', ');
        projects_list += `<li class="card card-project"><div class="card-title card-title-project"><strong>${project.title}</strong>&nbsp;(${project.when})</div><div class="card-body"><div class="card-body-text"><p>Tecnolog&iacute;as:&nbsp;${technologies}</p><p>${project.description}</p></div>${imgdiv}</div></li>`;
    }
    projects_list += '</ul>';
    div.insertAdjacentHTML('afterbegin',projects_list);
}

function load_designs(texts) {
    const div = document.getElementById('designs-grid');
    let designs_list = '<ul>';
    for (let design of texts) {
        let descr = '';
        if(design.description) {
            descr = design.description;
        }
        designs_list += `<li class="card card-design"><div class="card-title card-title-design"><strong>${design.title}</strong></div><div class="card-body"><div class="card-body-text"><p>${design.when}</p><p>${descr}</p></div><a class="card-img" href="${design.img}" target="_blank"><img src="${design.img}" alt="${design.img}"></a></div></li>`;
    }
    designs_list += '</ul>';
    div.insertAdjacentHTML('afterbegin',designs_list);
}

function load_whoami(texts) {
    const div = document.getElementById('whoami-title');
    let designs_list = `<p id="whoami-description">${texts}</p>`;
    div.insertAdjacentHTML('afterend',designs_list);
}


get_json("src/texts.json")
.then(texts => {
    load_whoami(texts.whoami);
    // load_abilities(texts.abilities);
    load_studies(texts.studies);
    load_experiences(texts.experience);
    load_projects(texts.projects);
    load_designs(texts.designs);
    
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 900) {
            document.getElementById("menu").classList.add('menu-color');
        } else {
            document.getElementById("menu").classList.remove('menu-color');
        }
    };

    document.getElementById('abilities-buttons').querySelectorAll('span').forEach((s) => {
        s.addEventListener('click', function(event) {
            let elem = event.target;
            let abilitiesDiv = document.getElementById('abilities-buttons').querySelectorAll('span');
            for (let ab of abilitiesDiv) {
                if(ab.getAttribute('data-state') == elem.getAttribute('data-state')) {
                    ab.classList.remove('closed');
                    ab.classList.add('open');
                    load_abilities(texts.abilities,ab.getAttribute('id'));
                } else {
                    ab.classList.remove('open');
                    ab.classList.add('closed');
                }
            }
    
        });
    });
})
.catch();