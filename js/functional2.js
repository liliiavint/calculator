const calculator = {
data: ['clear', '÷','x','ce','9','8','7','-','6','5', '4', '+', '3', '2', '1', '=', '-', '.', '0', '%'],
styledata: 'textcolor'
}

const connectDOM = document.querySelector(".mygtukai")



   let HTML = '';
    for(const item of calculator.data){
        
    HTML += `<button class="btn ${calculator.styledata}">${item}</button>`;
    }
connectDOM.innerHTML = HTML;
