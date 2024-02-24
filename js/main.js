const openBtn = document.querySelector(".burger")
const closeBtn = document.querySelector(".close__btn")
const ulList = document.querySelector(".nav__list")
const listItem = document.querySelectorAll(".nav__item")

listItem.forEach(item => {
    item.addEventListener("click", () => {
        ulList.classList.remove("nav__toggle")
    })
})

openBtn.addEventListener("click", () => {

    ulList.classList.add("nav__toggle")

    closeBtn.addEventListener("click", () => {

        ulList.classList.remove("nav__toggle")

    })
})