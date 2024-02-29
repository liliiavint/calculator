const calculator = {
    data: ['clear', '÷','x','ce','7','8','9','-','4','5', '6', '+', '1', '2', '3', '=', '.', '0', '%'],
    styledata: 'textcolor span btnhover' 
};

const connectDOM = document.querySelector('.mygtukai');

function selectTextcolor(item) {
    
    if (['clear', '÷', 'x', 'ce', '-', '+'].includes(item)) {
        return 'textcolor';
    } 
    if (['='].includes(item)) {
        return 'span';
    }
    if (['.'].includes(item)) {
        return 'btnhover';
    }
}

let HTML = '';
for (const item of calculator.data) {
    HTML += `<button class="btn ${selectTextcolor(item)}">${item}</button>`;
}
connectDOM.innerHTML = HTML


const mygtukaiDOM = connectDOM.querySelectorAll('.btn');


const shortText = () => {
    const maxLength = 14;
    const digitDOM = document.getElementById('digit');
    let text = digitDOM.innerText;
    let maxLengthText = maxLength - text.length;
    if (maxLengthText < 0){ 
        digitDOM.innerText = digitDOM.innerText.slice(0, maxLength);
    }
}

for (let i = 0; i < mygtukaiDOM.length; i++) {
    mygtukaiDOM[i].addEventListener('click', (event) => {
        event.preventDefault();
        const digitDOM = document.getElementById('digit');
        if (calculator.data[i] === 'clear') {
            return digitDOM.innerText = '';
        }
        if (calculator.data[i] === 'ce') {
            return digitDOM.innerText = digitDOM.innerText.slice(0, -1);
        } else {
            digitDOM.innerText += calculator.data[i];
            shortText(); 
        }
    });
}
