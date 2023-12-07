import projects from './projectsData.js';

const projectsContainer = document.querySelector('.projects-layout');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.querySelector('.modal-image');
const modalDescription = document.querySelector('.modal-description');

const modalLinkGithub = document.querySelector('.github-link');
const modalLinkwebsite = document.querySelector('.link-website');

const siteWebLink = document.createElement('a');
siteWebLink.target = '_blank';
siteWebLink.innerText = 'Voir le site';
modalLinkwebsite.appendChild(siteWebLink);

const githubLink = document.createElement('a');
githubLink.target = '_blank';
const githubIcon = document.createElement('i');
githubIcon.className = 'fab fa-github';
githubLink.appendChild(githubIcon);
githubLink.appendChild(document.createTextNode(' Voir sur GitHub'));
modalLinkGithub.appendChild(githubLink);


for (let i = 0; i < projects.length; i++) {
    const project = projects[i];  
    
    const card = document.createElement('div');
    card.classList.add('col');

    card.innerHTML = `
        <div class="card custom-card">
            <img src="${project.image}" class="custom-image" alt="${project.name}">
            <div class="card-body">
                <h5>${project.name}</h5>
            </div>
        </div>
    `;


    card.addEventListener('click', function () {
        // On met à jour le titre et l'image de la modale avec les informations du projet
        modalTitle.innerText = project.name;
        modalImage.src = project.imagewebsite;
        modalDescription.textContent = project.description;

        githubLink.hidden = (project.gitlink === undefined);
        githubLink.href = project.gitlink;

        siteWebLink.hidden = (project.website === undefined);
        siteWebLink.href = project.website;

        // On ouvre la modale à l'aide de Bootstrap
        const modal = new bootstrap.Modal(document.getElementById('projectModal'));
        modal.show();
    });


    projectsContainer.appendChild(card);
}