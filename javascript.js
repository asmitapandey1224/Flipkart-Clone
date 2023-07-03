let input_search = document.getElementById("search_input")
let form_search = document.getElementById("search_form")
let recent_searchE1 = document.querySelector(".recent_search")

let recentArray = ["mobile","earphones"]
form_search.addEventListener("submit",(e)=>{
    e.preventDefault()
    recentArray.unshift(input_search.value)
    console.log(recentArray)
    renderRecent()
})

function renderRecent(){
    let recent_search_html = ''
    recentArray.forEach(el =>{
        recent_search_html += `
        <div class="recent_list">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>${el}</p>
        </div>
        `
    })
    recent_searchE1.innerHTML = recent_search_html;
}
