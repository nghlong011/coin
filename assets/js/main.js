const closePopup = document.querySelectorAll('.pop__close');
const popup = document.querySelectorAll('.cc__popup');
const title = document.querySelectorAll('.cc_title');
const popup_highlight = document.querySelector('.popup_highlight');
const popup_highlight_close = document.querySelector('#popup_highlight_close');
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
popup_highlight_close.addEventListener('click', () => {
    popup_highlight.style.display = 'none';
});

// popup highlight tự ẩn sau 5s
setTimeout(() => {
    popup_highlight.style.display = 'none';
}, 5000);
