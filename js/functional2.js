const calculator = {
    data: ['clear', '÷','x','ce','9','8','7','-','6','5', '4', '+', '3', '2', '1', '=', '.', '0', '%'],
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


for (let i = 0; i < calculator.data.length; i++) {
    function pressMygtukaiDOM (event) {
        event.preventDefault();
        const digitDOM = document.getElementById('digit');
        if(calculator.data[i] === 'clear'){
            return digitDOM.innerText = digitDOM.innerText.slice(100);
        }
        if(calculator.data[i] ==='ce'){
            return digitDOM.innerText = digitDOM.innerText.slice(0, -1);
        }else{
         digitDOM.innerText += calculator.data[i];
    }
    }    
    mygtukaiDOM[i].addEventListener('click', pressMygtukaiDOM);
   
}



  

