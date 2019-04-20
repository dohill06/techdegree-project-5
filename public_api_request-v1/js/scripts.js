
const gallery = document.querySelector('#gallery');



fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(response => response.json())
    .then(data => employeeCard(data.results))



function employeeCard(employees) {
    employees.forEach(card => {
        let employee = `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${card.picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${card.name.first}${card.name.last}</h3>
                <p class="card-text">${card.email}</p>
                <p class="card-text cap">${card.location.city}</p>
            </div>
        </div>
        `   
        gallery.innerHTML += employee;
    })   
}

