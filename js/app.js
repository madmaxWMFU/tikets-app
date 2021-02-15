const hall = document.querySelector('.hall');
const cart = document.querySelector('.form__cart');

const addToCart = (seat) => {
    const template = `
        <div>


        </div>
    `;
    cart.appendChild(template);
}

const viewSeatTitle = ({target}) => {
    console.log(target)
    addToCart();
} 

// hall.addEventListener('mouseover', viewSeatTitle)
hall.addEventListener('click', viewSeatTitle)

