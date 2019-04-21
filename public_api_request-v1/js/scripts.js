const gallery = document.querySelector('#gallery');
let employeeArray = [];


fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(response => response.json())
    .then(data => employeeCard(data.results))



function employeeCard(employees) {

    employees.forEach(card => {
        employeeArray.push(card)

        // let employee = `
        // <div class="card">
        //     <div class="card-img-container">
        //         <img class="card-img" src="${card.picture.large}" alt="profile picture">
        //     </div>
        //     <div class="card-info-container">
        //         <h3 id="name" class="card-name cap">${card.name.first} ${card.name.last}</h3>
        //         <p class="card-text">${card.email}</p>
        //         <p class="card-text cap">${card.location.city}</p>
        //     </div>
        // </div>

        // <div class="modal-container" style="display:none">
        //     <div class="modal">
        //         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        //         <div class="modal-info-container">
        //             <img class="modal-img" src="${card.picture.large}" alt="profile picture">
        //             <h3 id="name" class="modal-name cap">${card.name.first} ${card.name.last}</h3>
        //             <p class="modal-text">${card.email}</p>
        //             <p class="modal-text cap">${card.location.city}</p>
        //             <hr>
        //             <p class="modal-text">${card.phone}</p>
        //             <p class="modal-text cap">${card.location.street}, ${card.location.state}, ${card.location.postcode}</p>
        //             <p class="modal-text">Birthday: ${card.dob.date}</p>
        //         </div>
        //     </div>

        //     <div class="modal-btn-container">
        //         <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        //         <button type="button" id="modal-next" class="modal-next btn">Next</button>
        //     </div>
        // </div>
        // `
        gallery.innerHTML += employeeDiv(card.picture.large, card.name.first, card.name.last, card.email, card.location.city);

    })
    console.log(employeeArray);

    const cards = document.querySelectorAll('.card');
    const modalContainer = document.querySelectorAll('.modal-container');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (card) {
                card.nextElementSibling.style.display = '';
            }
        })
    })
    // console.log(employees);
}

function employeeDiv(pic, firstName, lastName, email, city) {
    let employee = `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${pic}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
                    <p class="card-text">${email}</p>
                    <p class="card-text cap">${city}</p>
                </div>
            </div>
            `;

    return employee;
}