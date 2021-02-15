const filmPoster = document.querySelector('.cinema-info__image');
const filmTitle = document.querySelector('.description__title');
const filmHall = document.querySelector('.description__hall');
const filmDate = document.querySelector('.description__date');
const filmTime = document.querySelector('.description__time');


const getData = () => {
    return fetch('./data/data.json')
     .then(res => res.json())
     .then((data) => data);
}   

const reverseDate= (date) => date.split("-").reverse().join("-");

const renderData = (data) => {
    filmPoster.src = data.poster;
    filmTitle.innerText = `"${data.film}"`;
    filmHall.innerText = `Зал №${data.hall}`;

    const [date, time] = data.datetime.split(' ');
    filmDate.innerText = reverseDate(date);
    filmDate.setAttribute('datetime', date);

    filmTime.innerText = time;
    filmTime.setAttribute('datetime', time);

    data.selected.forEach((item) => {
        const seat = document.querySelector(`#seat${item.row}-${item.seat}`);
        seat.closest('.hall__seat').classList.add('noHover');
        seat.setAttribute("disabled", "");
        seat.nextElementSibling.classList.add(`${item.type}--active`);  
    });
}

const init = async () => {
    renderData(await getData());
}

window.onload = init();
