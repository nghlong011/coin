// khi click vaof button work with us hiện ra form
const buttonWorkWithUs = document.querySelectorAll(".button.on--nav");
const form = document.querySelector(".form__popup");
const pre = document.querySelector(".previous-button");
const next = document.querySelector(".next.w-slider-arrow-right");
const step1 = document.querySelector('[aria-label="step1"]');
const step2 = document.querySelector('[aria-label="step2"]');
buttonWorkWithUs.forEach((button) => {
    button.addEventListener("click", () => {
        // tắt display none
        form.style.display = "block";
        step1.style.display = "block";
        step2.style.display = "none";
        pre.style.display = "none";
        next.style.display = "block";
    });
});
// khi click vào close__p thì form ẩn đi
const closePopup = document.querySelector(".close__p");
closePopup.addEventListener("click", () => {
    form.style.display = "none";
});
next.addEventListener("click", () => {
    step1.style.display = "none";
    step2.style.display = "block";
    pre.style.display = "block";
    next.style.display = "none";
});
pre.addEventListener("click", () => {
    step1.style.display = "block";
    step2.style.display = "none";
    pre.style.display = "none";
    next.style.display = "block";
});

document.getElementById("wf-form-Apply-Form").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form (submit)
  
    const formData = new FormData(this); // Lấy toàn bộ dữ liệu form
    const formValues = {};
  
    // Lặp qua formData để lưu vào object
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
  
    console.log(formValues); // Hiển thị toàn bộ giá trị của form
  });
  
