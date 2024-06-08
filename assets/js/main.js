/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-taerget]'),
tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skills__active")
        })

        target.classList.add('skills__active')

        tabs.forEach(tab => {
            tab.classList.remove("skills__active")
        })

        tab.classList.add('skills__active')
    })
})

/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    Loop: true,
    grabCursor: true,

    pagination: {
        el: ",swiper-pagination",
        clicklable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidePerView: 2,
            spaceBetween: 48,
        }
    }
})

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelecttorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]"); // get all sections that has id defined

window,addEventListener("scroll", navHighlighter); // add an event listener listening for scroll

function navHighlighter()
{
    // get current scroll position
    let scrollY = window.pageYOffset; 
    // Loop through sections to get height, top and ID values
    sections.forEach(current => {
        const sectionHeight = cuurrent.offsetHeight;
        const sectionTop = cuurrent.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-Link")
            }
            else
            {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-Link")
            }
    })
}