const btn = document.querySelector('.button');
const resetBtn = document.querySelector('.reset');
const result = document.querySelector('.output');
const inputOfNumber = document.querySelector('.input__number');
const inputOfLimit = document.querySelector('.input__limit');

let data = localStorage.getItem('info');
inputOfNumber.value = localStorage.getItem('numberValue');
inputOfLimit.value = localStorage.getItem('limitValue');

resetBtn.addEventListener('click',()=>{
result.textContent = '';
localStorage.clear();
})

btn.addEventListener('click',() =>{
result.textContent = '';
let number = inputOfNumber.value;
let limit = inputOfLimit.value;
if ((number < 1 || number > 10) && (limit < 1 || limit > 10)){
    result.innerHTML = '<p>Номер страницы и лимит меньше 1 или больше 10</p>';
} else if (number < 1 || number > 10){
    result.innerHTML = '<p>Номер страницы меньше 1 или больше 10</p>';
} else if (limit < 1 || number > 10){
    result.innerHTML = '<p>Лимит меньше 1 или больше 10</p>';
} else {
    fetch(`https://picsum.photos/v2/list?page=${number}&limit=${limit}`)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        localStorage.setItem('info', JSON.stringify(data));
        localStorage.setItem('numberValue', number);
        localStorage.setItem('limitValue',limit);
        displayResult(data);
    })
    .catch(() =>{
        console.log('error');
    });
}
});

function displayResult(data){
    let cards = '';
    if (data){
        data.forEach((item) => {
            const cardBlock = 
            `<div class = "card">
            <img src="${item.download_url}"
            class = "card__img"
            />
            </div>
            `;
            cards = cards + cardBlock;
        });

        result.innerHTML = cards;
    }
}

displayResult(JSON.parse(data));