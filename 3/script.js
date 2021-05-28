function useRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);

    xhr.onload = function(){
        if (xhr.status != 200){
            console.log('Статус - ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback){
                callback(result);
            }
        }
    };

    xhr.error = function(){
        console.log('Ошибка. Статус - ', xhr.status);
    };

    xhr.send();

};

const buttonNode = document.querySelector(".button");
const resultNode = document.querySelector(".output");

function displayResult(apiData){
let cards = '';

apiData.forEach(item =>{
    const cardBlock = 
    `<div class="card">
    <img src="${item.download_url}"
    class = "card-image"/></div>`;

    cards = cards + cardBlock;
});

resultNode.innerHTML = cards;
}

const inputValue = document.querySelector(".input");

buttonNode.addEventListener('click',() => {
    const value = +inputValue.value;
    if (Number.isInteger(value)){
        if (value < 1 || value > 10){
            resultNode.innerHTML = "<p>Число не входит в диапазон</p>";
        } else {
            useRequest(`https://picsum.photos/v2/list/?limit=${value}`, displayResult);
        }
}

else {
    resultNode.innerHTML = "<p>Введено не целое число.</p>";
  }
})
