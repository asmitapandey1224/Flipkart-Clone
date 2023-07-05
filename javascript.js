import { featureProductNav } from "./Data/featureProductNav.js"
import { imageSlider } from "./Data/imageSlider.js"
import { electronicProductData } from "./Data/electronicProduct.js"

let input_search = document.getElementById("search_input")
let form_search = document.getElementById("search_form")
let recent_searchEl = document.querySelector(".recent_search")

let recentArray = ["mobile", "earphones"]
form_search.addEventListener("submit", (e) => {
  e.preventDefault()
  recentArray.unshift(input_search.value)
  console.log(recentArray)
  renderRecent()
})

function renderRecent() {
  let recent_search_html = ''
  recentArray.forEach(el => {
    recent_search_html += `
        <div class="recent_list">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>${el}</p>
        </div>
        `
  })
  recent_searchEl.innerHTML = recent_search_html;
}
renderRecent()

/***********Feature Product js************/
let featureProduct_listEl = document.querySelector(".featureProduct_list")
let featureProduct_listHTML = ''
// console.log(featureProductNav)

featureProductNav.forEach(el => {
  featureProduct_listHTML += `
    <div class="featureProduct_item">
            <a href="${el.link}">
              <div class="featureProduct_img">
                <img
                  src="${el.img}"
                />
              </div>
              <p class="featureProduct_name">
                ${el.name}
               ${el.subNav ? `<i class="fa-solid fa-angle-down featureProduct_icon_more"></i>` : ""}
              </p>
            </a>
          </div>
          `
})
featureProduct_listEl.innerHTML = featureProduct_listHTML;
// console.log(featureProductsListHTML)




/*************image slider*************/
let imageSliderListEl = document.querySelector(".imageSliderList")
let imageSliderListHTML = ''
// console.log(imageSlider)


imageSlider.forEach(el => {
  imageSliderListHTML += `
    <div class="imageSliderItem">
        <a href="${el.link}">
            <img src="${el.img}" />
        </a>
    </div>
    `
})
imageSliderListEl.innerHTML = imageSliderListHTML;

// let imageSliderListElAll = document.querySelectorAll(".imageSliderList")
let prev_imgBtnEl = document.getElementById("prev_imgBtn")
let next_imgBtnEl = document.getElementById("next_imgBtn")
let start = 0;
let end = -400;

prev_imgBtnEl.addEventListener("click", handlePrevImg)
next_imgBtnEl.addEventListener("click", handleNextImg)

function handlePrevImg() {
  let imageallList = document.querySelectorAll(".imageSliderItem")
  console.log(imageallList)
  if (start < 0)
    start += 100
  imageallList.forEach(el => {
    el.style.transform = `translateX(${start}%)`
  })
}

function handleNextImg() {
  let imageallList = document.querySelectorAll(".imageSliderItem")
  console.log(imageallList)
  if (start > end)
    start -= 100
  imageallList.forEach(el => {
    el.style.transform = `translateX(${start}%)`
  })

}

function renderimageSlider() {
  if (start > end) {
    handleNextImg()
  }
  else {
    start = 100
  }
}
setInterval(renderimageSlider, 3000)


/********************bestofElectronic_Product_item**********************/
let bestofElectronic_Product_itemEl = document.querySelector(".bestofElectronic_Product_item")
let bestofElectronic_Product_html = ""

console.log(electronicProductData)
electronicProductData.forEach(el => {
  bestofElectronic_Product_html += `
  <div class="bestofElectronic_item">
  <div class="bestofElectronic_image_product">
    <img src="${el.img}"/>
  </div>
  <div class="bestofElectronic_moreOpt_product">
    <p><h3>${el.name}</h3></p>
    <p class="bestofElectronic_name">${el.discount}
    </p>
    <p class="bestofElectronic_brand">${el.brand}</p>
    
  </div>
</div>
  `
})

bestofElectronic_Product_itemEl.innerHTML = bestofElectronic_Product_html