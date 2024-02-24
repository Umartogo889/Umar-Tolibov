const openBtn = document.querySelector(".burger")
const closeBtn = document.querySelector(".close__btn")
const ulList = document.querySelector(".nav__list")

openBtn.addEventListener("click", () => {

    ulList.classList.add("nav__toggle")

    closeBtn.addEventListener("click", () => {

        ulList.classList.remove("nav__toggle")

    })
})