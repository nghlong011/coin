const closePopup = document.querySelectorAll('.pop__close');
const popup = document.querySelectorAll('.cc__popup');
const title = document.querySelectorAll('.cc_title');

title.forEach((title, index) => {
    title.addEventListener('click', () => {
        popup[index].style.display = 'flex';
    });
});

closePopup.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (popup[index]) { // Đảm bảo rằng popup tại index tồn tại
            popup[index].style.display = 'none';
        }
    });
});
