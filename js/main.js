window.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector(".burger"),
        closeBtn = document.querySelector(".close__btn"),
        ulList = document.querySelector(".nav__list"),
        listItem = document.querySelectorAll(".nav__item")

    const slides = document.querySelectorAll(".card-slide"),
        slideParent = document.querySelector(".slider-container"),
        slidesInner = document.querySelector(".slider"),
        slideBtnLeft = document.querySelector(".slide-left-btn"),
        slideBtnRight = document.querySelector(".slide-right-btn")

    // Navbar toggle

    listItem.forEach(item => {
        item.addEventListener("click", () => {
            ulList.classList.remove("nav__toggle")
        })
    })

    openBtn.addEventListener("click", () => {

        ulList.classList.add("nav__toggle")

        closeBtn.addEventListener("click", () => {

            ulList.classList.remove("nav__toggle")
            ulList.style.style.zIndex = "10";


        })
    })
    console.log(getComputedStyle(ulList));
    // projects slide 

    let oneCard = slides[0],
        CardWidth = getComputedStyle(oneCard).width,
        CardMargin = getComputedStyle(oneCard).marginLeft,
        offset = 0


    slidesInner.style.width = ((+ CardWidth.slice(0, 3) + +CardMargin.slice(0, 2)) * slides.length + "px")

    slides.forEach(slide => {
        slide.style.width = +CardWidth.slice(0, 3) + 'px'
    })



    slideBtnRight.addEventListener("click", () => {

        if (offset == (+CardWidth.slice(0, 3) + +CardMargin.slice(0, 2) + 1) * (slides.length - 3)) {
            offset = 0

        } else {
            offset += (+CardWidth.slice(0, 3) + +CardMargin.slice(0, 2) + 1)
        }



        slidesInner.style.transform = `translateX(-${offset}px)`
    })
    slideBtnLeft.addEventListener("click", () => {

        if (offset == (+CardWidth.slice(0, 3) + +CardMargin.slice(0, 2) + 1) * (slides.length)) {
            offset = 0

        } else {

            offset -= (+CardWidth.slice(0, 3) + +CardMargin.slice(0, 2) + 1)

        }


        slidesInner.style.transform = `translateX(-${offset}px)`
    })

})

