const gallery = document.querySelector('#gallery');
let employeeArray = [];


fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(response => response.json())
    .then(data => employeeCard(data.results))



function employeeCard(employees) {

    employees.forEach(card => {
        employeeArray.push(card)

        gallery.innerHTML += employeeDiv(
            card.picture.large,
            card.name.first,
            card.name.last,
            card.email,
            card.location.city,
            card.phone,
            card.location.street,
            card.location.state,
            card.location.postcode,
            card.dob.date
        );

    })

    const cards = document.querySelectorAll('.card');
    const modalBtn = document.querySelectorAll('#modal-close-btn');
    const modalToggle = document.querySelectorAll('.modal-btn-container');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.nextElementSibling.style.display = '';
        })
    })

    modalBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.style.display = 'none';
        })
    })

    modalToggle.forEach(toggle => {
        toggle.addEventListener('click', (e) => {

            if (e.target.className == 'modal-next btn' && toggle.parentElement.parentElement.lastElementChild.style.display == 'none') {
                toggle.parentElement.style.display = 'none';
                toggle.parentElement.nextElementSibling.nextElementSibling.style.display = '';
            } else if (e.target.className == 'modal-next btn' && toggle.parentElement.parentElement.lastElementChild.style.display == '') {
                toggle.parentElement.parentElement.lastElementChild.style.display = 'none'
                toggle.parentElement.parentElement.firstElementChild.nextElementSibling.style.display = '';
            }

            if (e.target.className == 'modal-prev btn' && toggle.parentElement.parentElement.firstElementChild.nextElementSibling.style.display == 'none') {
                toggle.parentElement.style.display = 'none';
                toggle.parentElement.previousElementSibling.previousElementSibling.style.display = '';
            } else if (e.target.className == 'modal-prev btn' && toggle.parentElement.parentElement.firstElementChild.nextElementSibling.style.display == '') {
                toggle.parentElement.parentElement.firstElementChild.nextElementSibling.style.display = 'none'
                toggle.parentElement.parentElement.lastElementChild.style.display = '';
            }

        })
    })

}

function employeeDiv(pic, firstName, lastName, email, city, phone, street, state, zip, dob) {
    let bday = dob.slice(0, 10);
    const reg = /(\d+)-(\d+)-(\d+)/;
    let birthday = bday.replace(reg, '$2/$3/$1');
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

            <div class="modal-container" style="display:none">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${pic}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${firstName} ${lastName}</h3>
                        <p class="modal-text">${email}</p>
                        <p class="modal-text cap">${city}</p>
                        <hr>
                        <p class="modal-text">${phone}</p>
                        <p class="modal-text cap">${street}, ${state} ${zip}</p>
                        <p class="modal-text">Birthday: ${birthday}</p>
                    </div>
                </div>

                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>
            `;

    return employee;
}