document.querySelectorAll('#text-bar li').forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-img');
        document.querySelector('#popupIMG').src = imgSrc;
        document.querySelector('#popup').style.visibility = 'visible';
    });
});

document.querySelector('#close-btn').addEventListener('click', () => {
    document.querySelector('#popup').style.visibility = 'hidden';
});
