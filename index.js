const picture = document.querySelectorAll('.child');


picture.forEach(function(item) {
    
    item.addEventListener('mouseover', () => {
        remove();
    item.classList.add('active');
    
    })
    remove = () => {
        picture.forEach(item => {
        item.classList.remove('active');
        console.log(item);
    })
    }
})


//очистка формы после отправки
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}