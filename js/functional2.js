const calculator = {
    data: ['clear', '÷','x','ce','9','8','7','-','6','5', '4', '+', '3', '2', '1', '=', '.', '0', '%'],
    styledata: 'textcolor span btnhover' 
};

const connectDOM = document.querySelector(".mygtukai");

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
