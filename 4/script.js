const btn = document.querySelector('.button');
const result = document.querySelector('.output');

btn.addEventListener('click', () =>{
    let width = document.querySelector('.input__width').value;
    let height = document.querySelector('.input__height').value;

    if (width >= 100 && width <= 300 && height >= 100 && height <= 300){
        fetch (`https://picsum.photos/${width}/${height}`)

    .then((response) =>{
    result.innerHTML = 
    `<div class="card">
    <img src="${response.url}"/>
    </div>`;
    })

    .catch(()=>{console.log('error')});

} else {
    result.innerHTML = "<p>Введите число от 100 до 300.</p>"
}
});