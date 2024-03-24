let popupList = ["welcome","our_team","our_work","contact"]
const navs= document.getElementsByClassName("inner_card")
const changePopUp=(id)=>{
    popupList.forEach(name=>{
        let  popUpToClose = document.getElementById(name)
         popUpToClose.style.display = "none"
    })
    const popUp = document.getElementById(id)
    popUp.style.display = "block"
}

const closePopUp=()=>{
    popupList.forEach(name=>{
        let  popUpToClose = document.getElementById(name)
         popUpToClose.style.display = "none"
    })
}

Array.from(navs)?.forEach(nav=>{
    nav.addEventListener("click",()=>{changePopUp(nav.getAttribute("name"))})
})

const crossButtons= document.getElementsByClassName("cross_icon")

Array.from(crossButtons)?.forEach(nav=>{
    nav.addEventListener("click",()=>{closePopUp()})
})


var currentPage = 0;
        var totalPages = Math.ceil(document.querySelectorAll('.slider-image').length / 4); // Assuming 4 images per page
        var dotsContainer = document.getElementById('dots-container');

        function showSlide(page) {
            currentPage = page;
            var offset = -currentPage * 100;
            document.querySelector('.slider-images').style.transform = `translateX(${offset}%)`;
            updateDots();
        }

        function prevSlide() {
            showSlide(currentPage - 1);
        }

        function nextSlide() {
            showSlide(currentPage + 1);
        }


var dotsContainer = document.getElementById('dots-container');
function updateDots() {
    dotsContainer.innerHTML = '';
    for (var i = 0; i < totalPages; i++) {
        var dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentPage) {
            dot.classList.add('active');
        }
        dot.setAttribute('onclick', `showSlide(${i})`);
        dotsContainer.appendChild(dot);
    }
}

updateDots(); 