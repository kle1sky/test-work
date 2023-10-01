const wrapper = document.querySelector(".carousel__wrapper"),
    btnPrevious = document.querySelector(".button-previous"),
    btnNext = document.querySelector(".button-next"),
    items = document.querySelectorAll(".carousel__item");

let index = 0;

btnPrevious.addEventListener("click", () => {
    index--;
    if (index < 0) index = items.length - 1;

    const scrollWidth = index * (items[index].offsetWidth + 16);

    wrapper.style.transform = `translateX(-${scrollWidth}px)`;
});

btnNext.addEventListener("click", () => {
    index++;
    if (index > items.length - 1) index = 0;

    const scrollWidth = index * (items[index].offsetWidth + 16);

    wrapper.style.transform = `translateX(-${scrollWidth}px)`;
})