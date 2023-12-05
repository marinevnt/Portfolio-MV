import projects from './projectsData.js';

const projectsContainer = document.querySelector('.projects-layout');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.querySelector('.modal-image');
const modalDescription = document.querySelector('.modal-description');


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

        // On ouvre la modale à l'aide de Bootstrap
        const modal = new bootstrap.Modal(document.getElementById('projectModal'));
        modal.show();
    });


    projectsContainer.appendChild(card);
}