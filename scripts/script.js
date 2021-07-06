let popUp=document.querySelector('.pop_up');
let btn=document.querySelector(".btn_dark");
let btnClose=document.querySelector('.pop_up_close');
let btnStartScreen=document.querySelector ('.btn_pop_up');
function showPopUpOnClick() {
    popUp.classList.add('pop_up_show')
}
btn.addEventListener('click', showPopUpOnClick);
btnStartScreen.addEventListener('click', showPopUpOnClick);

btnClose.addEventListener('click', function() {
    popUp.classList.remove('pop_up_show')
})
