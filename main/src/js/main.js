/*

Table Contents
==============================
    1. Countdown timer
    2. Stirct Mode
    4. Loader
    6. Menu
    7. Shopping Cart 
    8. Product Image Change
    9. Cart Quantity
    10. Products Filter
    11. Range Slider
    12. Lightbox Plugin
    13. Swiper Slider
    14. Filter
        14.1    Filter Sidebar
        14.2    Blog Sidebar Filter
        14.3    Shop Sidebar Filter 
    15. Password Show/Hide
    16. Slider
        16.1    Banner Slider
        16.2    Categories Slider
        16.3    Products Slider
        16.4    Gallery Slider
        16.5    Deals Slider
        16.6    Featured Sliders
        16.7    News Slider
        16.8    Testimonial Slider
        16.9    Instagram Slider
        16.10   Brands Slider
        16.11   Member Slider
        16.12   Blog Post Slider

 */

/* 
    1. Countdown timer
======================== */
if (document.getElementById("countdownTwo")) {
  $("#countdownTwo").syotimer({
    year: 2021,
    month: 9,
    day: 30,
    hour: 20,
    minute: 30,
  });
}

if (document.getElementById("countdown")) {
  $("#countdown").syotimer({
    year: 2023,
    month: 09,
    day: 06,
    hour: 20,
    minute: 30,
  });
}

/* 
    2. Stirct Mode
======================== */
("use strict");

/* 
    4. Loader 
======================== */
const preloader = document.querySelector(".loader");

window.addEventListener("load", (event) => {
  preloader.style.display = "none";
});

/* 
    6. Menu 
======================== */

//  Header navigation Sidebar
let closeBar = document.querySelector(".header__cross");
let mobileSidebar = document.querySelector(".header__sidebar");
let menuBtn = document.querySelector(".header__sidebar-btn");
const body = document.querySelector("body");

// Open
if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    mobileSidebar.classList.add("active");
    body.classList.add("overlay");
  });
}

// close
closeBar.addEventListener("click", function () {
  mobileSidebar.classList.remove("active");
  body.classList.remove("overlay");
});

var navMenu = [].slice.call(
  document.querySelectorAll(".header__mobile-menu-item")
);

for (var y = 0; y < navMenu.length; y++) {
  navMenu[y].addEventListener("click", function () {
    menuClick(this);
  });
}

function menuClick(current) {
  const active = current.classList.contains("active");
  navMenu.forEach((el) => el.classList.remove("active"));
  if (active) {
    current.classList.remove("active");
  } else {
    current.classList.add("active");
  }
}

/* 
    7. Shopping Cart 
======================== */
let cartBtn = document.querySelector("#cart-bag");
let closeBtn = document.querySelector(".shopping-cart .close");
const shoppingCart = document.querySelector(".shopping-cart");

/* 
    9. Cart Quantity
======================== */
function increment() {
  document.getElementById("counter-btn-counter").stepUp();
}

function decrement() {
  document.getElementById("counter-btn-counter").stepDown();
}

/* 
    10. Products Filter
======================== */
const filterToggle = document.querySelector("#filter");
if (filterToggle) {
  filterToggle.addEventListener("click", function () {
    const sidebar = document.querySelector(".shop-content .col-lg-3");
    const productGallery = document.querySelector(".shop-content .col-lg-9");
    const column = document.querySelectorAll(".custom-col");
    const productContent = document.querySelectorAll(
      ".shop__product-items .col-md-6"
    );

    sidebar.classList.toggle("d-none");
    productGallery.classList.toggle("col-lg-12");
    console.log(column);
    column.forEach((item) => {
      if (item.classList.contains("col-xl-6")) {
        item.classList.remove("col-xl-6");
        item.classList.add("col-xl-4");
      } else if (item.classList.contains("col-xl-4")) {
        item.classList.remove("col-xl-4");
        item.classList.add("col-xl-6");
      }
    });

    // it's will be on 4 column
    productContent.forEach((item) => {
      if (item.classList.contains("col-xl-4")) {
        item.classList.add("col-xl-3");
        item.classList.remove("col-xl-4");
      } else if (item.classList.contains("col-xl-3")) {
        item.classList.add("col-xl-4");
        item.classList.remove("col-xl-3");
      }
    });
  });
}

const filterBtn = document.querySelector("button.filter");
if (filterBtn) {
  filterBtn.addEventListener("click", () => {
    let shopSidebar = document.querySelector(".shop__sidebar");
    let body = document.querySelector("body");
    shopSidebar.classList.toggle("active");
    body.classList.toggle("overlay");
  });
}

/* 
    14. Filter 
======================== */
// 14.1    Filter Sidebar
const orderHisotryFilter = document.querySelector(".filter-icon");

if (orderHisotryFilter) {
  orderHisotryFilter.addEventListener("click", () => {
    let sidebarNav = document.querySelector(".dashboard__nav");
    let body = document.querySelector("body");
    sidebarNav.classList.toggle("active");
    body.classList.toggle("overlay");
  });
}

var overlay = document.querySelector(".overlay");
if (overlay) {
  var overlayAfter = window.getComputedStyle(overlay, "::after");
  console.log(overlayAfter);
}

// overlayAfter.addEventListener('click', () => {
//   let sidebarNav = document.querySelector(".dashboard__nav");
//   let body = document.querySelector("body");
//   sidebarNav.classList.toggle("active");
//   body.classList.toggle("overlay");
// })

/* 
    15. Password Show/Hide
======================== */
function showPassword(id, el) {
  let x = document.getElementById(id);
  if (x.type === "password") {
    x.type = "text";
    el.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> ';
  } else {
    x.type = "password";
    el.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
  }
}
// jQuery
$(document).ready(function () {
  function animateBanner() {
    var banner = $(".banner-slider--one");
    var offset = banner.offset().top;
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();

    // Check if the banner is in the viewport
    if (scrollPosition + windowHeight > offset) {
      banner.addClass("active");
    }
  }

  // Initial check
  animateBanner();

  // Check on scroll
  $(window).on("scroll", function () {
    animateBanner();
  });
});

// 16.8    Testimonial Slider
var testimonialOne = new Swiper(".testimonial-slider--one", {
  loop: true,
  loopFillGroupWithBlank: true,
  autoHeight: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: " .swiper-button--next",
    prevEl: " .swiper-button--prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
      centeredSlides: true,
    },
  },
});

function createSnackbar() {
  const snackbar = document.createElement("div");
  snackbar.id = "snackbar";
  snackbar.style.visibility = "hidden";
  snackbar.style.minWidth = "250px";
  snackbar.style.backgroundColor = "#333";
  snackbar.style.color = "#fff";
  snackbar.style.textAlign = "center";
  snackbar.style.borderRadius = "4px";
  snackbar.style.padding = "16px";
  snackbar.style.position = "fixed";
  snackbar.style.zIndex = "1000";
  snackbar.style.bottom = "30px";
  snackbar.style.right = "30px";
  snackbar.style.fontSize = "17px";
  snackbar.style.transition = "visibility 0.5s, opacity 0.5s ease-in-out";
  snackbar.style.opacity = "0";
  document.body.appendChild(snackbar);
}

function showSnackbar(message, isSuccess = true) {
  let snackbar = document.getElementById("snackbar");
  if (!snackbar) {
    createSnackbar();
    snackbar = document.getElementById("snackbar");
  }

  snackbar.textContent = message;
  snackbar.style.backgroundColor = isSuccess ? "#4CAF50" : "#f44336"; // Green for success, red for error
  snackbar.style.visibility = "visible";
  snackbar.style.opacity = "1";
  snackbar.className = "show";

  setTimeout(() => {
    snackbar.style.visibility = "hidden";
    snackbar.style.opacity = "0";
  }, 3000);
}

function createAccount(e) {
  e.preventDefault();
  // dom ... id bata email , password value line
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const agreement = document.getElementById("remember"); // Checkbox for agreement

  if (!email.value) {
    showSnackbar("Please Enter the email. Please try again.", false);
    return; // Exit the function if passwords don't match
  }
  // remember
  // Validate that passwords match
  if (password.value !== confirmPassword.value) {
    showSnackbar("Passwords do not match. Please try again.", false);
    return; // Exit the function if passwords don't match
  }

  // Validate that the agreement checkbox is checked
  if (!agreement.checked) {
    showSnackbar("Please agree to the terms and conditions.", false);
    return; // Exit the function if agreement is not checked
  }
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email: email.value,
    password: password.value,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://grocery-q716.onrender.com/register", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        showSnackbar("Registration successful!", true);
        setTimeout(() => {
          window.location.href = "/sign-in.html";
        }, 1000);
      } else {
        showSnackbar("failed. Please check your credentials.", false);
      }
    })
    .catch((error) => console.error(error));
}

function loginAccount(e) {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email: email.value,
    password: password.value,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://grocery-q716.onrender.com/login", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        localStorage.setItem("LoginToken", result.token);
        showSnackbar("Login successful!", true);
        setTimeout(() => {
          window.location.href = "/index.html";
        }, 1500);
      } else {
        showSnackbar("Login failed. Please check your credentials.", false);
      }
    })
    .catch((error) => console.error(error));
}

function renderProducts(sortOption, sortType) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("type");
  const searchParams = urlParams.get("search");
  let baseUrl = "https://grocery-q716.onrender.com/products";

  if (sortOption !== "" && sortOption !== undefined) {
    console.log("here", sortOption);
    baseUrl += `?filter=${sortType}&filterType=${sortOption}`;
  }
  if (myParam) {
    baseUrl += `?filter=category&filterType=${myParam}`;
  }
  if (searchParams) {
    baseUrl += `?search=${searchParams}`;
  }
  console.log(baseUrl);
  fetch(baseUrl, requestOptions)
    .then((response) => response.json())
    .then((products) => {
      const productContainer = document.getElementById("product-container");
      if (productContainer) {
        productContainer.innerHTML = "";
      }

      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "col-lg-3 col-md-6";
        productCard.innerHTML = `
              <div class="cards-md cards-md--four w-100">
                  <div class="cards-md__img-wrapper">
                      <a href="product-details.html?id=${product.id}">
                                                              <img src=${
                                                                product?.image
                                                              } alt="products" />

                      </a>
                      
${
  product?.discount
    ? `<span class="tag danger font-body--md-400">sale ${product.discount}</span>`
    : ""
}                      <div class="cards-md__favs-list"  onclick="handleFavsListClick(event,${
          product.id
        })">
                          <span class="action-btn">
                          <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.9996 16.5451C-6.66672 7.3333 4.99993 -2.6667 9.9996 3.65668C14.9999 -2.6667 26.6666 7.3333 9.9996 16.5451Z"
                                                    stroke="currentColor" stroke-width="1.5"></path>
                                            </svg>  
                          

                          </span>
                          
                      </div>
                  </div>
                  <div class="cards-md__info d-flex justify-content-between align-items-center">
                      <a href="product-details.html?id=${
                        product.id
                      }" class="cards-md__info-left">
                          <h6 class="font-body--md-400">${product.name}</h6>
                          <div class="cards-md__info-price">
                              <span class="font-body--lg-500">$${
                                product.price
                              }</span>
                              <del class="font-body--lg-400">$${
                                product.original_price
                              }</del>
                          </div>
                          <ul class="cards-md__info-rating d-flex">
                                                     ${generateRatingStars(
                                                       product.rating
                                                     )}

                          </ul>
                      </a>
                  </div>
              </div>
          `;
        productContainer.appendChild(productCard);
      });
      if (myParam) {
        document.getElementById("category").value = myParam;
      }
    })
    .catch((error) => console.error(error));
}
function generateRatingStars(rating) {
  console.log(rating);
  let starsHTML = "";

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      // Full star
      starsHTML += `
        <li>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="#FF8A00" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z" fill="#FF8A00"></path>
          </svg>
        </li>`;
    } else if (i < rating) {
      // Half star
      starsHTML += `
        <li>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="halfStarGradient">
                <stop offset="50%" stop-color="#FF8A00" />
                <stop offset="50%" stop-color="none" />
              </linearGradient>
            </defs>
            <path d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z" fill="url(#halfStarGradient)"></path>
          </svg>
        </li>`;
    } else {
      // Empty star
      starsHTML += `
        <li>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z" fill="none" stroke="#FF8A00"></path>
          </svg>
        </li>`;
    }
  }

  return starsHTML;
}

// Function to fetch products from an API and render them
async function fetchProducts() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("id");
    const response = await fetch(
      `https://grocery-q716.onrender.com/product?id=${myParam}`
    );

    const product = await response.json();

    const breadContainer = document.getElementById("breedcrumb-js");
    breadContainer.innerHTML = "";

    breadContainer.innerHTML = `<ul class="breedcrumb__content">
                    <li>
                        <a href="index.html">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 8L9 1L17 8V18H12V14C12 13.2044 11.6839 12.4413 11.1213 11.8787C10.5587 11.3161 9.79565 11 9 11C8.20435 11 7.44129 11.3161 6.87868 11.8787C6.31607 12.4413 6 13.2044 6 14V18H1V8Z"
                                    stroke="#808080" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <span> > </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            category
                            <span> > </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            ${product?.category}
                            <span> > </span>
                        </a>
                    </li>
                    <li class="active"><a href="#">  ${product?.name}</a></li>
                </ul>`;

    const productsContainer = document.getElementById("product-detail");
    productsContainer.innerHTML = ""; // Clear the container

    productsContainer.innerHTML = `
             <div class="col-lg-6">
                    <!-- Product View Slider -->
                    

                        <div class="gallery-main-image products__gallery-img--lg">
                            <img class="product-main-image" src=${
                              product?.image
                            } alt="products"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <!-- Products information -->
                    <div class="products__content">
                        <div class="products__content-title">
                            <h2 class="font-title--md">${product.name}</h2>
                            <span class="label stock-in">in Stock</span>
                            <span class="label weight">Weght: ${
                              product?.weight
                            }</span>

                            <!-- <span class="label stock-out">Stock out</span> -->
                        </div>
                        <div class="products__content-info">
                            <ul class="ratings">
                                <li>
                                    <a href="#">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.31008 13.9111L12.8566 16.1577C13.31 16.4446 13.8725 16.0176 13.7381 15.4883L12.7138 11.458C12.6848 11.3458 12.6882 11.2276 12.7234 11.1172C12.7586 11.0067 12.8243 10.9084 12.9129 10.8336L16.0933 8.18708C16.5106 7.83946 16.2958 7.1459 15.7586 7.11102L11.6056 6.84102C11.4938 6.83309 11.3866 6.79356 11.2964 6.72704C11.2061 6.66052 11.1367 6.56974 11.096 6.46527L9.5469 2.5649C9.50472 2.45405 9.42984 2.35864 9.33219 2.29132C9.23455 2.22401 9.11875 2.18796 9.00015 2.18796C8.88155 2.18796 8.76575 2.22401 8.6681 2.29132C8.57046 2.35864 8.49558 2.45405 8.4534 2.5649L6.90427 6.46527C6.86372 6.56985 6.79429 6.66074 6.70406 6.72737C6.61383 6.79399 6.50652 6.83361 6.39465 6.84158L2.24171 7.11158C1.70508 7.1459 1.48908 7.83946 1.90702 8.18708L5.0874 10.8342C5.17588 10.9089 5.2415 11.0071 5.27673 11.1175C5.31195 11.2278 5.31534 11.3458 5.28652 11.458L4.33702 15.1958C4.17558 15.8309 4.85115 16.3433 5.39452 15.9985L8.69077 13.9111C8.78342 13.8522 8.89093 13.8209 9.00071 13.8209C9.11049 13.8209 9.218 13.8522 9.31065 13.9111H9.31008Z"
                                                fill="#FF8A00" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.31008 13.9111L12.8566 16.1577C13.31 16.4446 13.8725 16.0176 13.7381 15.4883L12.7138 11.458C12.6848 11.3458 12.6882 11.2276 12.7234 11.1172C12.7586 11.0067 12.8243 10.9084 12.9129 10.8336L16.0933 8.18708C16.5106 7.83946 16.2958 7.1459 15.7586 7.11102L11.6056 6.84102C11.4938 6.83309 11.3866 6.79356 11.2964 6.72704C11.2061 6.66052 11.1367 6.56974 11.096 6.46527L9.5469 2.5649C9.50472 2.45405 9.42984 2.35864 9.33219 2.29132C9.23455 2.22401 9.11875 2.18796 9.00015 2.18796C8.88155 2.18796 8.76575 2.22401 8.6681 2.29132C8.57046 2.35864 8.49558 2.45405 8.4534 2.5649L6.90427 6.46527C6.86372 6.56985 6.79429 6.66074 6.70406 6.72737C6.61383 6.79399 6.50652 6.83361 6.39465 6.84158L2.24171 7.11158C1.70508 7.1459 1.48908 7.83946 1.90702 8.18708L5.0874 10.8342C5.17588 10.9089 5.2415 11.0071 5.27673 11.1175C5.31195 11.2278 5.31534 11.3458 5.28652 11.458L4.33702 15.1958C4.17558 15.8309 4.85115 16.3433 5.39452 15.9985L8.69077 13.9111C8.78342 13.8522 8.89093 13.8209 9.00071 13.8209C9.11049 13.8209 9.218 13.8522 9.31065 13.9111H9.31008Z"
                                                fill="#FF8A00" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.31008 13.9111L12.8566 16.1577C13.31 16.4446 13.8725 16.0176 13.7381 15.4883L12.7138 11.458C12.6848 11.3458 12.6882 11.2276 12.7234 11.1172C12.7586 11.0067 12.8243 10.9084 12.9129 10.8336L16.0933 8.18708C16.5106 7.83946 16.2958 7.1459 15.7586 7.11102L11.6056 6.84102C11.4938 6.83309 11.3866 6.79356 11.2964 6.72704C11.2061 6.66052 11.1367 6.56974 11.096 6.46527L9.5469 2.5649C9.50472 2.45405 9.42984 2.35864 9.33219 2.29132C9.23455 2.22401 9.11875 2.18796 9.00015 2.18796C8.88155 2.18796 8.76575 2.22401 8.6681 2.29132C8.57046 2.35864 8.49558 2.45405 8.4534 2.5649L6.90427 6.46527C6.86372 6.56985 6.79429 6.66074 6.70406 6.72737C6.61383 6.79399 6.50652 6.83361 6.39465 6.84158L2.24171 7.11158C1.70508 7.1459 1.48908 7.83946 1.90702 8.18708L5.0874 10.8342C5.17588 10.9089 5.2415 11.0071 5.27673 11.1175C5.31195 11.2278 5.31534 11.3458 5.28652 11.458L4.33702 15.1958C4.17558 15.8309 4.85115 16.3433 5.39452 15.9985L8.69077 13.9111C8.78342 13.8522 8.89093 13.8209 9.00071 13.8209C9.11049 13.8209 9.218 13.8522 9.31065 13.9111H9.31008Z"
                                                fill="#FF8A00" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.31008 13.9111L12.8566 16.1577C13.31 16.4446 13.8725 16.0176 13.7381 15.4883L12.7138 11.458C12.6848 11.3458 12.6882 11.2276 12.7234 11.1172C12.7586 11.0067 12.8243 10.9084 12.9129 10.8336L16.0933 8.18708C16.5106 7.83946 16.2958 7.1459 15.7586 7.11102L11.6056 6.84102C11.4938 6.83309 11.3866 6.79356 11.2964 6.72704C11.2061 6.66052 11.1367 6.56974 11.096 6.46527L9.5469 2.5649C9.50472 2.45405 9.42984 2.35864 9.33219 2.29132C9.23455 2.22401 9.11875 2.18796 9.00015 2.18796C8.88155 2.18796 8.76575 2.22401 8.6681 2.29132C8.57046 2.35864 8.49558 2.45405 8.4534 2.5649L6.90427 6.46527C6.86372 6.56985 6.79429 6.66074 6.70406 6.72737C6.61383 6.79399 6.50652 6.83361 6.39465 6.84158L2.24171 7.11158C1.70508 7.1459 1.48908 7.83946 1.90702 8.18708L5.0874 10.8342C5.17588 10.9089 5.2415 11.0071 5.27673 11.1175C5.31195 11.2278 5.31534 11.3458 5.28652 11.458L4.33702 15.1958C4.17558 15.8309 4.85115 16.3433 5.39452 15.9985L8.69077 13.9111C8.78342 13.8522 8.89093 13.8209 9.00071 13.8209C9.11049 13.8209 9.218 13.8522 9.31065 13.9111H9.31008Z"
                                                fill="#FF8A00" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.31008 13.9111L12.8566 16.1577C13.31 16.4446 13.8725 16.0176 13.7381 15.4883L12.7138 11.458C12.6848 11.3458 12.6882 11.2276 12.7234 11.1172C12.7586 11.0067 12.8243 10.9084 12.9129 10.8336L16.0933 8.18708C16.5106 7.83946 16.2958 7.1459 15.7586 7.11102L11.6056 6.84102C11.4938 6.83309 11.3866 6.79356 11.2964 6.72704C11.2061 6.66052 11.1367 6.56974 11.096 6.46527L9.5469 2.5649C9.50472 2.45405 9.42984 2.35864 9.33219 2.29132C9.23455 2.22401 9.11875 2.18796 9.00015 2.18796C8.88155 2.18796 8.76575 2.22401 8.6681 2.29132C8.57046 2.35864 8.49558 2.45405 8.4534 2.5649L6.90427 6.46527C6.86372 6.56985 6.79429 6.66074 6.70406 6.72737C6.61383 6.79399 6.50652 6.83361 6.39465 6.84158L2.24171 7.11158C1.70508 7.1459 1.48908 7.83946 1.90702 8.18708L5.0874 10.8342C5.17588 10.9089 5.2415 11.0071 5.27673 11.1175C5.31195 11.2278 5.31534 11.3458 5.28652 11.458L4.33702 15.1958C4.17558 15.8309 4.85115 16.3433 5.39452 15.9985L8.69077 13.9111C8.78342 13.8522 8.89093 13.8209 9.00071 13.8209C9.11049 13.8209 9.218 13.8522 9.31065 13.9111H9.31008Z"
                                                fill="#FF8A00" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="font-body--md-400 review-count">${
                                      product?.numberOfReviews
                                    } Review</a>
                                </li>
                            </ul>
                            <span class="dot"></span>
                           
                        </div>

                        <div class="products__content-price">
                            <h2 class="font-body--xxxl-500"><del class="font-body--xxl-400">$${
                              product.original_price
                            }</del> $${product.price}</h2>
                           ${
                             product?.discount
                               ? `<span class="label sale-off">${product.discount} off </span>`
                               : ``
                           } 
                        </div>
                    </div>
                    <!-- brand  -->
                    <div class="products__content">
                        <div class="products__content-brand">
                          
                            <div class="social-site">
                                <h2 class="font-body--md-400">Share item:</h2>
                                <ul class="social-icon">
                                    <li class="social-icon-link">
                                        <a href="https://www.facebook.com/yourfacebookusername" target="_blank">
                                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.99764 2.98875H9.64089V0.12675C9.35739 0.08775 8.38239 0 7.24689 0C4.87764 0 3.25464 1.49025 3.25464 4.22925V6.75H0.640137V9.9495H3.25464V18H6.46014V9.95025H8.96889L9.36714 6.75075H6.45939V4.5465C6.46014 3.62175 6.70914 2.98875 7.99764 2.98875Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="social-icon-link">
                                        <a href="https://www.twitter.com/yourtwitterusername" target="_blank">
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18 2.41888C17.3306 2.7125 16.6174 2.90713 15.8737 3.00163C16.6388 2.54488 17.2226 1.82713 17.4971 0.962C16.7839 1.38725 15.9964 1.68763 15.1571 1.85525C14.4799 1.13413 13.5146 0.6875 12.4616 0.6875C10.4186 0.6875 8.77387 2.34575 8.77387 4.37863C8.77387 4.67113 8.79862 4.95238 8.85938 5.22013C5.7915 5.0705 3.07687 3.60013 1.25325 1.36025C0.934875 1.91263 0.748125 2.54488 0.748125 3.2255C0.748125 4.5035 1.40625 5.63638 2.38725 6.29225C1.79437 6.281 1.21275 6.10888 0.72 5.83775C0.72 5.849 0.72 5.86363 0.72 5.87825C0.72 7.6715 1.99912 9.161 3.6765 9.50413C3.37612 9.58625 3.04875 9.62563 2.709 9.62563C2.47275 9.62563 2.23425 9.61213 2.01038 9.56263C2.4885 11.024 3.84525 12.0984 5.4585 12.1333C4.203 13.1154 2.60888 13.7071 0.883125 13.7071C0.5805 13.7071 0.29025 13.6936 0 13.6565C1.63462 14.7106 3.57188 15.3125 5.661 15.3125C12.4515 15.3125 16.164 9.6875 16.164 4.81175C16.164 4.64863 16.1584 4.49113 16.1505 4.33475C16.8829 3.815 17.4982 3.16588 18 2.41888Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="social-icon-link">
                                        <a href="https://www.pinterest.com/yourpinterestusername" target="_blank">
                                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.24471 0C3.31136 0 0.687744 3.16139 0.687744 6.60855C0.687744 8.20724 1.58103 10.2008 3.01097 10.8331C3.22811 10.931 3.34624 10.8894 3.39462 10.688C3.43737 10.535 3.62525 9.79807 3.71638 9.45042C3.74451 9.33904 3.72988 9.24229 3.63988 9.13766C3.16511 8.58864 2.78821 7.58847 2.78821 6.65017C2.78821 4.24594 4.69967 1.91146 7.9522 1.91146C10.7648 1.91146 12.7325 3.73854 12.7325 6.35204C12.7325 9.30529 11.1698 11.3484 9.13912 11.3484C8.0152 11.3484 7.17816 10.4663 7.44367 9.37505C7.76431 8.07561 8.39321 6.6783 8.39321 5.74113C8.39321 4.90072 7.91844 4.20544 6.94865 4.20544C5.80447 4.20544 4.87631 5.33837 4.87631 6.85943C4.87631 7.82585 5.21832 8.47838 5.21832 8.47838C5.21832 8.47838 4.08652 13.0506 3.87614 13.9045C3.52062 15.3502 3.92451 17.6914 3.95939 17.8928C3.98077 18.0042 4.10565 18.0391 4.1754 17.9479C4.28678 17.8017 5.65484 15.8497 6.03848 14.4389C6.17799 13.9248 6.75064 11.84 6.75064 11.84C7.12753 12.5207 8.21546 13.0911 9.37426 13.0911C12.8214 13.0911 15.3123 10.0613 15.3123 6.30141C15.2999 2.69675 12.215 0 8.24471 0Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="social-icon-link">
                                        <a href="https://www.instagram.com/yourusername" target="_blank">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.0027 24.0548C8.72269 24.0548 8.33602 24.0375 7.05602 23.9815C6.05785 23.9487 5.07259 23.7458 4.14269 23.3815C3.34693 23.0718 2.62426 22.6 2.02058 21.9961C1.4169 21.3922 0.945397 20.6694 0.636019 19.8735C0.28576 18.9402 0.0968427 17.9542 0.0773522 16.9575C0.00268554 15.6802 0.00268555 15.2615 0.00268555 12.0068C0.00268555 8.7175 0.0200189 8.3335 0.0773522 7.06017C0.0972691 6.06486 0.28618 5.08018 0.636019 4.14817C0.945042 3.35128 1.41686 2.62761 2.02134 2.02335C2.62583 1.4191 3.34968 0.947556 4.14669 0.638836C5.07821 0.287106 6.06315 0.0976949 7.05869 0.0788358C8.33202 0.0068358 8.75069 0.00683594 12.0027 0.00683594C15.3094 0.00683594 15.6894 0.0241691 16.9494 0.0788358C17.9467 0.0975025 18.936 0.286836 19.8694 0.638836C20.6661 0.947914 21.3898 1.41958 21.9943 2.02379C22.5987 2.628 23.0706 3.35149 23.38 4.14817C23.736 5.09484 23.9267 6.09484 23.9414 7.10417C24.016 8.3815 24.016 8.79883 24.016 12.0522C24.016 15.3055 23.9974 15.7322 23.9414 16.9948C23.9214 17.9924 23.7321 18.9794 23.3814 19.9135C23.0712 20.7099 22.5988 21.4332 21.9942 22.0373C21.3896 22.6414 20.666 23.1133 19.8694 23.4228C18.936 23.7722 17.9507 23.9615 16.9547 23.9815C15.6814 24.0548 15.264 24.0548 12.0027 24.0548ZM11.9574 2.1175C8.69602 2.1175 8.35735 2.1335 7.08402 2.19084C6.32355 2.20078 5.57042 2.34103 4.85735 2.6055C4.33726 2.80486 3.86471 3.11098 3.47017 3.50414C3.07563 3.89731 2.76786 4.36878 2.56669 4.88817C2.30002 5.60817 2.16002 6.3695 2.15202 7.1375C2.08135 8.4295 2.08135 8.76817 2.08135 12.0068C2.08135 15.2068 2.09335 15.5948 2.15202 16.8788C2.16402 17.6388 2.30402 18.3922 2.56669 19.1055C2.97469 20.1548 3.80669 20.9842 4.85869 21.3868C5.57083 21.653 6.32382 21.7933 7.08402 21.8015C8.37469 21.8762 8.71469 21.8762 11.9574 21.8762C15.228 21.8762 15.5667 21.8602 16.8294 21.8015C17.5899 21.7923 18.3432 21.652 19.056 21.3868C19.5733 21.186 20.0432 20.8796 20.4357 20.4873C20.8282 20.095 21.1348 19.6254 21.336 19.1082C21.6027 18.3882 21.7427 17.6255 21.7507 16.8575H21.7654C21.8227 15.5828 21.8227 15.2428 21.8227 11.9855C21.8227 8.72817 21.808 8.3855 21.7507 7.11217C21.7386 6.35278 21.5984 5.60088 21.336 4.88817C21.1353 4.37023 20.8289 3.89977 20.4364 3.50677C20.0438 3.11376 19.5737 2.80682 19.056 2.6055C18.3427 2.33884 17.5894 2.20017 16.8294 2.19084C15.54 2.1175 15.2027 2.1175 11.9574 2.1175ZM12.0027 18.1655C10.7834 18.1663 9.59136 17.8055 8.5772 17.1287C7.56304 16.4519 6.77236 15.4896 6.30517 14.3634C5.83798 13.2373 5.71526 11.9978 5.95254 10.8019C6.18982 9.60598 6.77644 8.50729 7.63819 7.64478C8.49995 6.78228 9.59814 6.19471 10.7939 5.9564C11.9896 5.71808 13.2291 5.83973 14.3557 6.30594C15.4823 6.77216 16.4453 7.56201 17.1229 8.57558C17.8006 9.58916 18.1624 10.7809 18.1627 12.0002C18.1606 13.6337 17.5111 15.1999 16.3565 16.3555C15.2018 17.5111 13.6363 18.162 12.0027 18.1655ZM12.0027 7.9975C11.2116 7.9975 10.4382 8.2321 9.78041 8.67162C9.12261 9.11115 8.60992 9.73586 8.30717 10.4668C8.00442 11.1977 7.9252 12.0019 8.07954 12.7779C8.23388 13.5538 8.61485 14.2665 9.17426 14.8259C9.73367 15.3853 10.4464 15.7663 11.2223 15.9206C11.9982 16.075 12.8025 15.9958 13.5334 15.693C14.2643 15.3903 14.889 14.8776 15.3286 14.2198C15.7681 13.562 16.0027 12.7886 16.0027 11.9975C16.0002 10.9374 15.578 9.92141 14.8284 9.1718C14.0788 8.42219 13.0628 7.99997 12.0027 7.9975ZM18.4027 7.04683C18.2139 7.04613 18.0272 7.00826 17.8531 6.93538C17.6789 6.8625 17.5209 6.75604 17.3879 6.62208C17.1193 6.35153 16.9693 5.98537 16.9707 5.60417C16.9721 5.22296 17.1249 4.85793 17.3954 4.58938C17.666 4.32083 18.0321 4.17075 18.4134 4.17217C18.7946 4.17358 19.1596 4.32637 19.4281 4.59693C19.6967 4.86748 19.8468 5.23363 19.8454 5.61484C19.8439 5.99604 19.6912 6.36107 19.4206 6.62962C19.15 6.89817 18.7839 7.04825 18.4027 7.04683Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p class="products__content-brand-info font-body--md-400">
                            ${product?.description}
                        </p>
                    </div>
                    <!-- Action button -->
                    <div class="products__content">
                        <div class="products__content-action">
                            <div class="counter-btn-wrapper products__content-action-item">
                                <button class="counter-btn-dec counter-btn" onclick="decrement()">
                                    -
                                </button>
                                <input type="number" id="counter-btn-counter" class="counter-btn-counter" min="1"
                                    max="10" placeholder="1" />
                                <button class="counter-btn-inc counter-btn" onclick="increment()">
                                    +
                                </button>
                            </div>
                            <!-- add to cart  -->
                            <button class="button button--md products__content-action-item" onclick="handleAddtoCartClick(event, ${
                              product?.id
                            })">
                                Add to Cart
                                <span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.66667 7.33333H3.16667L1.5 16.5H16.5L14.8333 7.33333H12.3333M5.66667 7.33333V4.83333C5.66667 2.99239 7.15905 1.5 9 1.5V1.5C10.8409 1.5 12.3333 2.99238 12.3333 4.83333V7.33333M5.66667 7.33333H12.3333M5.66667 7.33333V9.83333M12.3333 7.33333V9.83333"
                                            stroke="currentColor" stroke-width="1.3" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </button>

                            <!-- fav  -->
                            <button class="button-fav products__content-action-item" onclick="handleFavsListClick(event,${
                              product.id
                            })">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.9996 17.5451C-6.66672 8.33336 4.99993 -1.66664 9.9996 4.65674C14.9999 -1.66664 26.6666 8.33336 9.9996 17.5451Z"
                                        stroke="currentColor" stroke-width="1.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <!-- Tags  -->
                    <div class="products__content">
                        <h5 class="products__content-category font-body--md-500">Category: <a href="/product.html?type=${
                          product.category
                        }">${product.category}</a>
                        </h5>
                        <div class="products__content-tags">
                            <h5 class="font-body--md-500">Tag :</h5>
                            <div class="products__content-tags-item">
                            ${product.tags
                              .map(
                                (tag) => `
        <a href="#" class="font-body--md-400">
            ${tag}
        </a>
    `
                              )
                              .join("")}
                               
                            </div>
                        </div>
                    </div>
                </div>
          `;

    const addinfo = document.querySelector(".products-tab__information-list");
    addinfo.insertAdjacentHTML(
      "beforeend",
      `<li>
                                            <h5 class="title">Weight:</h5>
                                            <p class="title-description">${product?.weight}</p>
                                        </li>
                                        <li>
                                            <h5 class="title">Color:</h5>
                                            <p class="title-description">${product?.color}</p>
                                        </li>
                                        <li>
                                            <h5 class="title">Type:</h5>
                                            <p class="title-description">${product?.type}</p>
                                        </li>
                                        <li>
                                            <h5 class="title">Unit:</h5>
                                            <p class="title-description">${product?.unit}</p>
                                        </li>
                                        <li>
                                            <h5 class="title">Expiry Date :</h5>
                                            <p class="title-description">${product?.expiry_date}</span></p>
                                        </li>
                                        `
    );
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Check if the user is logged in by verifying the presence of the token
  const isLoggedIn = !!localStorage.getItem("LoginToken");

  if (isLoggedIn) {
    // Hide elements with the "header__top-right" class
    const headerTopRight = document.querySelector(".header__top-right");
    if (headerTopRight) {
      headerTopRight.style.display = "none";
    }
  }
  if (!isLoggedIn) {
    const headerTopRight = document.querySelector(".header__cart");
    if (headerTopRight) {
      headerTopRight.style.display = "none";
    }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const cartBag = document.getElementById("cart-bag");

  if (cartBag) {
    cartBag.addEventListener("click", () => {
      window.location.href = "shopping-cart.html";
    });
  }
});

const filterSidebarButton = document.querySelector("button.filter");
if (filterSidebarButton) {
  filterSidebarButton.addEventListener("click", () => {
    let filterSidebar = document.querySelector(".filter__sidebar");
    let body = document.querySelector("body");
    filterSidebar.classList.toggle("active");
    body.classList.toggle("overlay");
  });
}

function popularProducts() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://grocery-q716.onrender.com/popular-product", requestOptions)
    .then((response) => response.json())
    .then((products) => {
      const productContainer = document.getElementById(
        "popular-products__wrapper"
      );

      const productContainerMobile = document.getElementById("mobileProduct");
      // productContainer.innerHTML = ""; // Clear existing content if necessary

      products.forEach((product) => {
        productContainer.insertAdjacentHTML(
          "beforeend",
          `<div class="cards-md">
                    <div class="cards-md__img-wrapper">
                      <a href="product-details.html?id=${product.id}">
                            <img src=${product?.image} />
                        </a>
${
  product?.discount
    ? `<span class="tag danger font-body--md-400">sale ${product.discount}</span>`
    : ""
}                         <div class="cards-md__favs-list" onclick="handleFavsListClick(event,${
            product.id
          })">
                            <span class="action-btn">
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.9996 16.5451C-6.66672 7.3333 4.99993 -2.6667 9.9996 3.65668C14.9999 -2.6667 26.6666 7.3333 9.9996 16.5451Z"
                                        stroke="currentColor" stroke-width="1.5"></path>
                                </svg>
                            </span>

                        </div>
                    </div>
                    <div class="cards-md__info d-flex justify-content-between align-items-center">
                        <a href="product-details.html" class="cards-md__info-left">
                            <h6 class="font-body--md-400">${product?.name}</h6>
                            <div class="cards-md__info-price">
                                <span class="font-body--lg-500">$${
                                  product?.price
                                }</span>
                                <del class="font-body--lg-400">$${
                                  product?.original_price
                                }</del>
                            </div>
                            <ul class="cards-md__info-rating d-flex">
                                <li>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                                            fill="#FF8A00"></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                                            fill="#FF8A00"></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                                            fill="#FF8A00"></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                                            fill="#FF8A00"></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                                            fill="#CCCCCC"></path>
                                    </svg>
                                </li>
                            </ul>
                        </a>
                        <div class="cards-md__info-right"  onclick="handleAddtoCartClick(event, ${
                          product?.id
                        })">
                            <span class="action-btn">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.66667 8.83333H4.16667L2.5 18H17.5L15.8333 8.83333H13.3333M6.66667 8.83333V6.33333C6.66667 4.49239 8.15905 3 10 3V3C11.8409 3 13.3333 4.49238 13.3333 6.33333V8.83333M6.66667 8.83333H13.3333M6.66667 8.83333V11.3333M13.3333 8.83333V11.3333"
                                        stroke="currentColor" stroke-width="1.3" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>`
        );

        productContainerMobile.insertAdjacentHTML(
          "beforeend",
          ` <div class="swiper-slide">
                        <div class="cards-md w-100">
                            <div class="cards-md__img-wrapper">
                                <a href="product-details.html?id=checkout.htm${product?.id}">
                                    <img src=${product?.image} alt="products" />
                                </a>
                                <!-- <span class="tag danger font-body--md-400">sale 50%</span> -->
                                <div class="cards-md__favs-list">
                                    <span class="action-btn">
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.9996 16.5451C-6.66672 7.3333 4.99993 -2.6667 9.9996 3.65668C14.9999 -2.6667 26.6666 7.3333 9.9996 16.5451Z"
                                                stroke="currentColor" stroke-width="1.5"></path>
                                        </svg>
                                    </span>
                                    <span class="action-btn" data-bs-toggle="modal" data-bs-target="#productView">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10 3.54102C3.75 3.54102 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 16.4577 10 16.4577C16.25 16.4577 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 3.54102 10 3.54102V3.54102Z"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path
                                                d="M10 13.125C10.8288 13.125 11.6237 12.7958 12.2097 12.2097C12.7958 11.6237 13.125 10.8288 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875C9.1712 6.875 8.37634 7.20424 7.79029 7.79029C7.20424 8.37634 6.875 9.1712 6.875 10C6.875 10.8288 7.20424 11.6237 7.79029 12.2097C8.37634 12.7958 9.1712 13.125 10 13.125V13.125Z"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div class="cards-md__info d-flex justify-content-between align-items-center">
                                <a href="product-details.html" class="cards-md__info-left">
                                    <h6 class="font-body--md-400">${product?.name}</h6>
                                    <div class="cards-md__info-price">
                                        <span class="font-body--lg-500">$${product?.price}</span>
                                        <del class="font-body--lg-400">$${product?.original_price}</del>
                                    </div>
                                    <ul class="cards-md__info-rating d-flex">
                                        <li>
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                                                    fill="#FF8A00"></path>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                                                    fill="#FF8A00"></path>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                                                    fill="#FF8A00"></path>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                                                    fill="#FF8A00"></path>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                                                    fill="#CCCCCC"></path>
                                            </svg>
                                        </li>
                                    </ul>
                                </a>
                                <div class="cards-md__info-right">
                                    <span class="action-btn">
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.66667 8.83333H4.16667L2.5 18H17.5L15.8333 8.83333H13.3333M6.66667 8.83333V6.33333C6.66667 4.49239 8.15905 3 10 3V3C11.8409 3 13.3333 4.49238 13.3333 6.33333V8.83333M6.66667 8.83333H13.3333M6.66667 8.83333V11.3333M13.3333 8.83333V11.3333"
                                                stroke="currentColor" stroke-width="1.3" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>`
        );
      });
    });
}

function randomProducts() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const classes = ["one", "two", "three", "four", "five"];
  fetch("https://grocery-q716.onrender.com/random-products", requestOptions)
    .then((response) => response.json())
    .then((products) => {
      const productContainer = document.getElementById(
        "deals-products__wrapper"
      );
      // productContainer.innerHTML = ""; // Clear existing content if necessary

      products.forEach((product, index) => {
        const dynamicClass = classes[index % classes.length];
        productContainer.insertAdjacentHTML(
          "beforeend",
          `
        <div class="cards-lg deals-products__wrapper-item deals-products__wrapper-item--${dynamicClass}">
          <div class="cards-lg__img-wrapper">
            <img src="src/images/products/img-12.png" alt="products" />
            <div class="tag-group">
              <span class="tag danger">Sale 50%</span>
              <span class="tag blue">Best Sale</span>
            </div>
            <form action="#">
              <div class="cards-lg__group-action">
                <button class="action-btn">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.9996 16.5451C-6.66672 7.3333 4.99993 -2.6667 9.9996 3.65668C14.9999 -2.6667 26.6666 7.3333 9.9996 16.5451Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </button>
                <button class="button button--md w-75" onclick="handleAddtoCartClick(event, ${product?.id})">
                  Add to cart
                  <span>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66667 8.83333H4.16667L2.5 18H17.5L15.8333 8.83333H13.3333M6.66667 8.83333V6.33333C6.66667 4.49239 8.15905 3 10 3V3C11.8409 3 13.3333 4.49238 13.3333 6.33333V8.83333M6.66667 8.83333H13.3333M6.66667 8.83333V11.3333M13.3333 8.83333V11.3333"
                        stroke="currentColor"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div class="cards-lg__favs-list">
                <button class="action-btn">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.9996 16.5451C-6.66672 7.3333 4.99993 -2.6667 9.9996 3.65668C14.9999 -2.6667 26.6666 7.3333 9.9996 16.5451Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </button>
                <button class="action-btn">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3.54102C3.75 3.54102 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 16.4577 10 16.4577C16.25 16.4577 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 3.54102 10 3.54102V3.54102Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 13.125C10.8288 13.125 11.6237 12.7958 12.2097 12.2097C12.7958 11.6237 13.125 10.8288 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875C9.1712 6.875 8.37634 7.20424 7.79029 7.79029C7.20424 8.37634 6.875 9.1712 6.875 10C6.875 10.8288 7.20424 11.6237 7.79029 12.2097C8.37634 12.7958 9.1712 13.125 10 13.125V13.125Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div class="cards-lg__info text-center">
            <h6 class="font-body--xl-400">Chinese Cabbage</h6>
            <div class="cards-lg__info-price">
              <span class="font-body--xxxl-500">$14.99</span>
              <del class="font-body--xxxl-400">$14.99</del>
            </div>
            <ul class="cards-lg__info-rating d-flex justify-content-center">
              <li>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                    fill="#FF8A00"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                    fill="#FF8A00"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                    fill="#FF8A00"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                    fill="#FF8A00"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                    fill="#CCCCCC"
                  ></path>
                </svg>
              </li>
              <li>
                <span>(524 feedback)</span>
              </li>
            </ul>
            <div class="cards-lg__info-countdown">
              <h6 class="font-body--md-400">Hurry up! Offer ends In:</h6>
              <div id="countdownOne" class="info-countdown__card"></div>
            </div>
          </div>
        </div>`
        );
      });
    });
}

function categorieProducts() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://grocery-q716.onrender.com/categories", requestOptions)
    .then((response) => response.json())
    .then((products) => {
      const productContainer = document.getElementById(
        "popular-categories__wrapper"
      );
      const productContainerMobile = document.getElementById(
        "popular-categories__wrapper-mobile"
      );

      const searchCategory = document.getElementById("category");

      // productContainer.innerHTML = ""; // Clear existing content if necessary

      products.forEach((product) => {
        productContainer?.insertAdjacentHTML(
          "beforeend",
          `
        <a href="/product.html?type=${product.category}" class="cards-sm popular-categories__wrapper-item">
          <div class="cards-sm__img-wrapper">
            <img src=${product.image} alt="img-01" />
          </div>
          <h5 class="font-body--xl-500">${product.category}</h5>
        </a>`
        );

        searchCategory?.insertAdjacentHTML(
          "beforeend",
          ` <option value=${product.category}>${product.category}</option>
                                `
        );
        productContainerMobile?.insertAdjacentHTML(
          "beforeend",
          `  <div class="swiper-slide">
                        <a href="/product" class="cards-sm popular-categories__wrapper-item">
                            <div class="cards-sm__img-wrapper">
                                <img src="src/images/categories/image-fruits.png" alt="img-01" />
                            </div>
                            <h5 class="font-body--xl-500">Fresh Fruit</h5>
                        </a>
                    </div>`
        );
      });
    });
}

function handleFavsListClick(e, productId) {
  console.log(e);
  e.preventDefault();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("LoginToken");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const raw = JSON.stringify({
    productId: productId,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://grocery-q716.onrender.com/wishlist/add", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success) {
        showSnackbar(result.message, true);
      } else {
        showSnackbar(result.message, false);
      }
    })
    .catch((error) => console.error(error));
  return false;
}

function getWishList() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("LoginToken");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://grocery-q716.onrender.com/wishlist", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success) {
        showSnackbar(result.message, true);
        const productContainer = document.getElementById("wishlist-item");
        const mobileView = document.getElementById("shoping-card-wishlist");

        // productContainer.innerHTML = ""; // Clear existing content if necessary
        console.log(productContainer);
        result?.data.forEach((product) => {
          productContainer.insertAdjacentHTML(
            "beforeend",
            `
               <tr>
                  <!-- Product item  -->
                  <td class="cart-table-item align-middle">
                    <a href="product-details.html" class="cart-table__product-item">
                      <div class="cart-table__product-item-img">
                        <img src=${product?.image} alt="product" />
                      </div>
                      <h5 class="font-body--lg-400">${product?.name}</h5>
                    </a>
                  </td>
                  <!-- Price  -->
                  <td class="cart-table-item order-date align-middle">
                    <p class="font-body--lg-500">$${product.price} <del>${
              product?.original_price
            }</del></p>
                  </td>
                  <!-- Stock Status  -->
                  <td class="cart-table-item stock-status align-middle">
                    <span class="font-body--md-400 in">${
                      product?.inStock
                    }</span>
                  </td>
                  <td class="cart-table-item add-cart align-middle">
                    <div class="add-cart__wrapper">
                   ${
                     product?.inStock
                       ? `<button class="button button--md" onclick="handleAddtoCartClick(event, ${product?.id})">Add to Cart</button>`
                       : ""
                   }
                      <button class="delete-item" onclick=handleRemoveFavsListClick(event,${
                        product?.id
                      })>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
                            stroke="#CCCCCC" stroke-miterlimit="10" />
                          <path d="M16 8.5L8 16.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M16 16.5L8 8.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>`
          );

          mobileView.insertAdjacentHTML(
            "beforeend",
            ` <div class="shoping-card">
            <div class="shoping-card__img-wrapper">
              <img src=${product?.image} alt="product-item" />
            </div>
            <h5 class="shoping-card__product-caption font-body--lg-400">
              ${product?.name}

              <span class="tag tag--in">${product?.inStock}</span>
              <!-- <span class="tag tag--out">Out of Stock</span> -->
            </h5>

            <h6 class="shoping-card__product-price font-body--lg-600">
              $${product?.price} 
            </h6>

            <button class="button button--md" onclick="handleAddtoCartClick(event, ${product?.id})">Add to Cart</button>
            <button class="close-btn" onclick=handleRemoveFavsListClick(event,${product?.id})>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z"
                  stroke="#CCCCCC" stroke-miterlimit="10" />
                <path d="M16 8L8 16" stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M16 16L8 8" stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>`
          );
        });
        mobileView.insertAdjacentHTML(
          "beforeend",
          `   <div class="cart-table__share-content d-flex align-items-center">
            <span class="font-body--md-400" style="margin-right: 10px; color: #1a1a1a">Share:
            </span>
            <ul class="social-icon">
              <li class="social-icon-link">
                <a href="#">
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.99764 2.98875H9.64089V0.12675C9.35739 0.08775 8.38239 0 7.24689 0C4.87764 0 3.25464 1.49025 3.25464 4.22925V6.75H0.640137V9.9495H3.25464V18H6.46014V9.95025H8.96889L9.36714 6.75075H6.45939V4.5465C6.46014 3.62175 6.70914 2.98875 7.99764 2.98875Z"
                      fill="currentColor"></path>
                  </svg>
                </a>
              </li>
              <li class="social-icon-link">
                <a href="#">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 2.41888C17.3306 2.7125 16.6174 2.90713 15.8737 3.00163C16.6388 2.54488 17.2226 1.82713 17.4971 0.962C16.7839 1.38725 15.9964 1.68763 15.1571 1.85525C14.4799 1.13413 13.5146 0.6875 12.4616 0.6875C10.4186 0.6875 8.77387 2.34575 8.77387 4.37863C8.77387 4.67113 8.79862 4.95238 8.85938 5.22013C5.7915 5.0705 3.07687 3.60013 1.25325 1.36025C0.934875 1.91263 0.748125 2.54488 0.748125 3.2255C0.748125 4.5035 1.40625 5.63638 2.38725 6.29225C1.79437 6.281 1.21275 6.10888 0.72 5.83775C0.72 5.849 0.72 5.86363 0.72 5.87825C0.72 7.6715 1.99912 9.161 3.6765 9.50413C3.37612 9.58625 3.04875 9.62563 2.709 9.62563C2.47275 9.62563 2.23425 9.61213 2.01038 9.56263C2.4885 11.024 3.84525 12.0984 5.4585 12.1333C4.203 13.1154 2.60888 13.7071 0.883125 13.7071C0.5805 13.7071 0.29025 13.6936 0 13.6565C1.63462 14.7106 3.57188 15.3125 5.661 15.3125C12.4515 15.3125 16.164 9.6875 16.164 4.81175C16.164 4.64863 16.1584 4.49113 16.1505 4.33475C16.8829 3.815 17.4982 3.16588 18 2.41888Z"
                      fill="currentColor"></path>
                  </svg>
                </a>
              </li>
              <li class="social-icon-link">
                <a href="#">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.24471 0C3.31136 0 0.687744 3.16139 0.687744 6.60855C0.687744 8.20724 1.58103 10.2008 3.01097 10.8331C3.22811 10.931 3.34624 10.8894 3.39462 10.688C3.43737 10.535 3.62525 9.79807 3.71638 9.45042C3.74451 9.33904 3.72988 9.24229 3.63988 9.13766C3.16511 8.58864 2.78821 7.58847 2.78821 6.65017C2.78821 4.24594 4.69967 1.91146 7.9522 1.91146C10.7648 1.91146 12.7325 3.73854 12.7325 6.35204C12.7325 9.30529 11.1698 11.3484 9.13912 11.3484C8.0152 11.3484 7.17816 10.4663 7.44367 9.37505C7.76431 8.07561 8.39321 6.6783 8.39321 5.74113C8.39321 4.90072 7.91844 4.20544 6.94865 4.20544C5.80447 4.20544 4.87631 5.33837 4.87631 6.85943C4.87631 7.82585 5.21832 8.47838 5.21832 8.47838C5.21832 8.47838 4.08652 13.0506 3.87614 13.9045C3.52062 15.3502 3.92451 17.6914 3.95939 17.8928C3.98077 18.0042 4.10565 18.0391 4.1754 17.9479C4.28678 17.8017 5.65484 15.8497 6.03848 14.4389C6.17799 13.9248 6.75064 11.84 6.75064 11.84C7.12753 12.5207 8.21546 13.0911 9.37426 13.0911C12.8214 13.0911 15.3123 10.0613 15.3123 6.30141C15.2999 2.69675 12.215 0 8.24471 0Z"
                      fill="currentColor"></path>
                  </svg>
                </a>
              </li>
              <li class="social-icon-link">
                <a href="#">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.0027 24.0548C8.72269 24.0548 8.33602 24.0375 7.05602 23.9815C6.05785 23.9487 5.07259 23.7458 4.14269 23.3815C3.34693 23.0718 2.62426 22.6 2.02058 21.9961C1.4169 21.3922 0.945397 20.6694 0.636019 19.8735C0.28576 18.9402 0.0968427 17.9542 0.0773522 16.9575C0.00268554 15.6802 0.00268555 15.2615 0.00268555 12.0068C0.00268555 8.7175 0.0200189 8.3335 0.0773522 7.06017C0.0972691 6.06486 0.28618 5.08018 0.636019 4.14817C0.945042 3.35128 1.41686 2.62761 2.02134 2.02335C2.62583 1.4191 3.34968 0.947556 4.14669 0.638836C5.07821 0.287106 6.06315 0.0976949 7.05869 0.0788358C8.33202 0.0068358 8.75069 0.00683594 12.0027 0.00683594C15.3094 0.00683594 15.6894 0.0241691 16.9494 0.0788358C17.9467 0.0975025 18.936 0.286836 19.8694 0.638836C20.6661 0.947914 21.3898 1.41958 21.9943 2.02379C22.5987 2.628 23.0706 3.35149 23.38 4.14817C23.736 5.09484 23.9267 6.09484 23.9414 7.10417C24.016 8.3815 24.016 8.79883 24.016 12.0522C24.016 15.3055 23.9974 15.7322 23.9414 16.9948C23.9214 17.9924 23.7321 18.9794 23.3814 19.9135C23.0712 20.7099 22.5988 21.4332 21.9942 22.0373C21.3896 22.6414 20.666 23.1133 19.8694 23.4228C18.936 23.7722 17.9507 23.9615 16.9547 23.9815C15.6814 24.0548 15.264 24.0548 12.0027 24.0548ZM11.9574 2.1175C8.69602 2.1175 8.35735 2.1335 7.08402 2.19084C6.32355 2.20078 5.57042 2.34103 4.85735 2.6055C4.33726 2.80486 3.86471 3.11098 3.47017 3.50414C3.07563 3.89731 2.76786 4.36878 2.56669 4.88817C2.30002 5.60817 2.16002 6.3695 2.15202 7.1375C2.08135 8.4295 2.08135 8.76817 2.08135 12.0068C2.08135 15.2068 2.09335 15.5948 2.15202 16.8788C2.16402 17.6388 2.30402 18.3922 2.56669 19.1055C2.97469 20.1548 3.80669 20.9842 4.85869 21.3868C5.57083 21.653 6.32382 21.7933 7.08402 21.8015C8.37469 21.8762 8.71469 21.8762 11.9574 21.8762C15.228 21.8762 15.5667 21.8602 16.8294 21.8015C17.5899 21.7923 18.3432 21.652 19.056 21.3868C19.5733 21.186 20.0432 20.8796 20.4357 20.4873C20.8282 20.095 21.1348 19.6254 21.336 19.1082C21.6027 18.3882 21.7427 17.6255 21.7507 16.8575H21.7654C21.8227 15.5828 21.8227 15.2428 21.8227 11.9855C21.8227 8.72817 21.808 8.3855 21.7507 7.11217C21.7386 6.35278 21.5984 5.60088 21.336 4.88817C21.1353 4.37023 20.8289 3.89977 20.4364 3.50677C20.0438 3.11376 19.5737 2.80682 19.056 2.6055C18.3427 2.33884 17.5894 2.20017 16.8294 2.19084C15.54 2.1175 15.2027 2.1175 11.9574 2.1175ZM12.0027 18.1655C10.7834 18.1663 9.59136 17.8055 8.5772 17.1287C7.56304 16.4519 6.77236 15.4896 6.30517 14.3634C5.83798 13.2373 5.71526 11.9978 5.95254 10.8019C6.18982 9.60598 6.77644 8.50729 7.63819 7.64478C8.49995 6.78228 9.59814 6.19471 10.7939 5.9564C11.9896 5.71808 13.2291 5.83973 14.3557 6.30594C15.4823 6.77216 16.4453 7.56201 17.1229 8.57558C17.8006 9.58916 18.1624 10.7809 18.1627 12.0002C18.1606 13.6337 17.5111 15.1999 16.3565 16.3555C15.2018 17.5111 13.6363 18.162 12.0027 18.1655ZM12.0027 7.9975C11.2116 7.9975 10.4382 8.2321 9.78041 8.67162C9.12261 9.11115 8.60992 9.73586 8.30717 10.4668C8.00442 11.1977 7.9252 12.0019 8.07954 12.7779C8.23388 13.5538 8.61485 14.2665 9.17426 14.8259C9.73367 15.3853 10.4464 15.7663 11.2223 15.9206C11.9982 16.075 12.8025 15.9958 13.5334 15.693C14.2643 15.3903 14.889 14.8776 15.3286 14.2198C15.7681 13.562 16.0027 12.7886 16.0027 11.9975C16.0002 10.9374 15.578 9.92141 14.8284 9.1718C14.0788 8.42219 13.0628 7.99997 12.0027 7.9975ZM18.4027 7.04683C18.2139 7.04613 18.0272 7.00826 17.8531 6.93538C17.6789 6.8625 17.5209 6.75604 17.3879 6.62208C17.1193 6.35153 16.9693 5.98537 16.9707 5.60417C16.9721 5.22296 17.1249 4.85793 17.3954 4.58938C17.666 4.32083 18.0321 4.17075 18.4134 4.17217C18.7946 4.17358 19.1596 4.32637 19.4281 4.59693C19.6967 4.86748 19.8468 5.23363 19.8454 5.61484C19.8439 5.99604 19.6912 6.36107 19.4206 6.62962C19.15 6.89817 18.7839 7.04825 18.4027 7.04683Z"
                      fill="currentColor"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>`
        );
      } else {
        showSnackbar(result.message, false);
      }
    })
    .catch((error) => console.error(error));
}
function handleRemoveFavsListClick(e, productId) {
  console.log(e);
  e.preventDefault();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("LoginToken");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const raw = JSON.stringify({
    productId: productId,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://grocery-q716.onrender.com/wishlist/remove", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success) {
        showSnackbar(result.message, true);
      } else {
        showSnackbar(result.message, false);
      }
    })
    .catch((error) => console.error(error));
  return false;
}

function logoutAccount(event) {
  localStorage.removeItem("LoginToken"); // Remove token from local storage
  showSnackbar("Logout successful!", true);
  setTimeout(() => {
    window.location.href = "sign-in.html"; // Redirect to sign-in page
  }, 2500);
}

function handleAddtoCartClick(e, productId) {
  console.log(e);
  const quantity = document.getElementById("counter-btn-counter");
  e.preventDefault();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("LoginToken");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const raw = JSON.stringify({
    productId: productId,
    quantity:
      quantity?.value == "" ? 1 : quantity?.value == null ? 1 : quantity?.value,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://grocery-q716.onrender.com/cart", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success) {
        showSnackbar(result.message, true);
        location.reload();
      } else {
        showSnackbar(result.message, false);
      }
    })
    .catch((error) => console.error(error));
  return false;
}

function getCartList() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("LoginToken");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://grocery-q716.onrender.com/cart", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.data?.length > 0) {
        const productContainer = document.getElementById("cart-table-body");
        const mobileView = document.getElementById("shoping-cart__mobile");
        const orderSummary = document.getElementById("bill-card__body");
        const checkoutorderSummary = document.getElementById(
          "checkout-card__body"
        );
        const payment = document.getElementById("payment-data");
        let sum = 0;
        // productContainer.innerHTML = ""; // Clear existing content if necessary
        result?.data.forEach((product) => {
          sum += (product?.price || 0) * (product?.quantity || 0);
          sum = parseFloat(sum.toFixed(2)); // Ensure sum has two decimal places as a number

          productContainer?.insertAdjacentHTML(
            "beforeend",
            `
                 <tr>
                    <!-- Product item  -->
                    <td class="cart-table-item align-middle">
                      <a href="product-details.html" class="cart-table__product-item">
                        <div class="cart-table__product-item-img">
                          <img src=${product?.image} alt="product" />
                        </div>
                        <h5 class="font-body--lg-400">${product?.name}</h5>
                      </a>
                    </td>
                    <!-- Price  -->
                    <td class="cart-table-item order-date align-middle">
                      $${product?.price}
                    </td>
                    <!-- quantity -->
                    <td class="cart-table-item order-date align-middle">
                      ${product?.quantity}
                    </td>
                    <!-- Subtotal  -->
                    <td class="cart-table-item order-subtotal align-middle">
                      <div class="
                            d-flex
                            justify-content-between
                            align-items-center
                          ">
                        <p class="font-body--md-500">${Number(
                          product?.price * product?.quantity
                        )}</p>
                        <button class="delete-item" onclick="handleRemoveCartListClick(event,${
                          product?.id
                        })" >
                          <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
                              stroke="#CCCCCC" stroke-miterlimit="10" />
                            <path d="M16 8.5L8 16.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path d="M16 16.5L8 8.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>`
          );

          mobileView?.insertAdjacentHTML(
            "beforeend",
            ` <div class="shoping-card">
            <div class="shoping-card__img-wrapper">
              <img src=${product?.image} alt="product-item" />
            </div>
            <h5 class="shoping-card__product-caption font-body--lg-400">
              ${product?.name}

              <span class="tag tag--in">${product?.inStock}</span>
              <!-- <span class="tag tag--out">Out of Stock</span> -->
            </h5>

            <h6 class="shoping-card__product-price font-body--lg-600">
              $${product?.price} 
            </h6>

            
          </div>`
          );
          checkoutorderSummary?.insertAdjacentHTML(
            "beforeend",
            `<div class="bill-card__product">
                    <div class="bill-card__product-item">
                      <div class="bill-card__product-item-content">
                        <div class="img-wrapper">
                          <img src=${product?.image} alt="product-img" />
                        </div>
                        <h5 class="font-body--md-400">
                          ${product?.name} <span class="quantity"> x${
              product?.quantity
            }</span>
                        </h5>
                      </div>
  
                      <p class="bill-card__product-price font-body--md-500">
                        $${Number(product?.price * product?.quantity).toFixed(
                          2
                        )}
                      </p>
                    </div>
                    
                  </div>
                  <!-- memo  -->
                 `
          );
        });
        mobileView?.insertAdjacentHTML(
          "beforeend",
          `   <div class="cart-table__share-content d-flex align-items-center">
            <span class="font-body--md-400" style="margin-right: 10px; color: #1a1a1a">Share:
            </span>
            <ul class="social-icon">
              <li class="social-icon-link">
                <a href="#">
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.99764 2.98875H9.64089V0.12675C9.35739 0.08775 8.38239 0 7.24689 0C4.87764 0 3.25464 1.49025 3.25464 4.22925V6.75H0.640137V9.9495H3.25464V18H6.46014V9.95025H8.96889L9.36714 6.75075H6.45939V4.5465C6.46014 3.62175 6.70914 2.98875 7.99764 2.98875Z"
                      fill="currentColor"></path>
                  </svg>
                </a>
              </li>
              <li class="social-icon-link">
                <a href="#">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 2.41888C17.3306 2.7125 16.6174 2.90713 15.8737 3.00163C16.6388 2.54488 17.2226 1.82713 17.4971 0.962C16.7839 1.38725 15.9964 1.68763 15.1571 1.85525C14.4799 1.13413 13.5146 0.6875 12.4616 0.6875C10.4186 0.6875 8.77387 2.34575 8.77387 4.37863C8.77387 4.67113 8.79862 4.95238 8.85938 5.22013C5.7915 5.0705 3.07687 3.60013 1.25325 1.36025C0.934875 1.91263 0.748125 2.54488 0.748125 3.2255C0.748125 4.5035 1.40625 5.63638 2.38725 6.29225C1.79437 6.281 1.21275 6.10888 0.72 5.83775C0.72 5.849 0.72 5.86363 0.72 5.87825C0.72 7.6715 1.99912 9.161 3.6765 9.50413C3.37612 9.58625 3.04875 9.62563 2.709 9.62563C2.47275 9.62563 2.23425 9.61213 2.01038 9.56263C2.4885 11.024 3.84525 12.0984 5.4585 12.1333C4.203 13.1154 2.60888 13.7071 0.883125 13.7071C0.5805 13.7071 0.29025 13.6936 0 13.6565C1.63462 14.7106 3.57188 15.3125 5.661 15.3125C12.4515 15.3125 16.164 9.6875 16.164 4.81175C16.164 4.64863 16.1584 4.49113 16.1505 4.33475C16.8829 3.815 17.4982 3.16588 18 2.41888Z"
                      fill="currentColor"></path>
                  </svg>
                </a>
              </li>
              <li class="social-icon-link">
                <a href="#">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.24471 0C3.31136 0 0.687744 3.16139 0.687744 6.60855C0.687744 8.20724 1.58103 10.2008 3.01097 10.8331C3.22811 10.931 3.34624 10.8894 3.39462 10.688C3.43737 10.535 3.62525 9.79807 3.71638 9.45042C3.74451 9.33904 3.72988 9.24229 3.63988 9.13766C3.16511 8.58864 2.78821 7.58847 2.78821 6.65017C2.78821 4.24594 4.69967 1.91146 7.9522 1.91146C10.7648 1.91146 12.7325 3.73854 12.7325 6.35204C12.7325 9.30529 11.1698 11.3484 9.13912 11.3484C8.0152 11.3484 7.17816 10.4663 7.44367 9.37505C7.76431 8.07561 8.39321 6.6783 8.39321 5.74113C8.39321 4.90072 7.91844 4.20544 6.94865 4.20544C5.80447 4.20544 4.87631 5.33837 4.87631 6.85943C4.87631 7.82585 5.21832 8.47838 5.21832 8.47838C5.21832 8.47838 4.08652 13.0506 3.87614 13.9045C3.52062 15.3502 3.92451 17.6914 3.95939 17.8928C3.98077 18.0042 4.10565 18.0391 4.1754 17.9479C4.28678 17.8017 5.65484 15.8497 6.03848 14.4389C6.17799 13.9248 6.75064 11.84 6.75064 11.84C7.12753 12.5207 8.21546 13.0911 9.37426 13.0911C12.8214 13.0911 15.3123 10.0613 15.3123 6.30141C15.2999 2.69675 12.215 0 8.24471 0Z"
                      fill="currentColor"></path>
                  </svg>
                </a>
              </li>
              <li class="social-icon-link">
                <a href="#">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.0027 24.0548C8.72269 24.0548 8.33602 24.0375 7.05602 23.9815C6.05785 23.9487 5.07259 23.7458 4.14269 23.3815C3.34693 23.0718 2.62426 22.6 2.02058 21.9961C1.4169 21.3922 0.945397 20.6694 0.636019 19.8735C0.28576 18.9402 0.0968427 17.9542 0.0773522 16.9575C0.00268554 15.6802 0.00268555 15.2615 0.00268555 12.0068C0.00268555 8.7175 0.0200189 8.3335 0.0773522 7.06017C0.0972691 6.06486 0.28618 5.08018 0.636019 4.14817C0.945042 3.35128 1.41686 2.62761 2.02134 2.02335C2.62583 1.4191 3.34968 0.947556 4.14669 0.638836C5.07821 0.287106 6.06315 0.0976949 7.05869 0.0788358C8.33202 0.0068358 8.75069 0.00683594 12.0027 0.00683594C15.3094 0.00683594 15.6894 0.0241691 16.9494 0.0788358C17.9467 0.0975025 18.936 0.286836 19.8694 0.638836C20.6661 0.947914 21.3898 1.41958 21.9943 2.02379C22.5987 2.628 23.0706 3.35149 23.38 4.14817C23.736 5.09484 23.9267 6.09484 23.9414 7.10417C24.016 8.3815 24.016 8.79883 24.016 12.0522C24.016 15.3055 23.9974 15.7322 23.9414 16.9948C23.9214 17.9924 23.7321 18.9794 23.3814 19.9135C23.0712 20.7099 22.5988 21.4332 21.9942 22.0373C21.3896 22.6414 20.666 23.1133 19.8694 23.4228C18.936 23.7722 17.9507 23.9615 16.9547 23.9815C15.6814 24.0548 15.264 24.0548 12.0027 24.0548ZM11.9574 2.1175C8.69602 2.1175 8.35735 2.1335 7.08402 2.19084C6.32355 2.20078 5.57042 2.34103 4.85735 2.6055C4.33726 2.80486 3.86471 3.11098 3.47017 3.50414C3.07563 3.89731 2.76786 4.36878 2.56669 4.88817C2.30002 5.60817 2.16002 6.3695 2.15202 7.1375C2.08135 8.4295 2.08135 8.76817 2.08135 12.0068C2.08135 15.2068 2.09335 15.5948 2.15202 16.8788C2.16402 17.6388 2.30402 18.3922 2.56669 19.1055C2.97469 20.1548 3.80669 20.9842 4.85869 21.3868C5.57083 21.653 6.32382 21.7933 7.08402 21.8015C8.37469 21.8762 8.71469 21.8762 11.9574 21.8762C15.228 21.8762 15.5667 21.8602 16.8294 21.8015C17.5899 21.7923 18.3432 21.652 19.056 21.3868C19.5733 21.186 20.0432 20.8796 20.4357 20.4873C20.8282 20.095 21.1348 19.6254 21.336 19.1082C21.6027 18.3882 21.7427 17.6255 21.7507 16.8575H21.7654C21.8227 15.5828 21.8227 15.2428 21.8227 11.9855C21.8227 8.72817 21.808 8.3855 21.7507 7.11217C21.7386 6.35278 21.5984 5.60088 21.336 4.88817C21.1353 4.37023 20.8289 3.89977 20.4364 3.50677C20.0438 3.11376 19.5737 2.80682 19.056 2.6055C18.3427 2.33884 17.5894 2.20017 16.8294 2.19084C15.54 2.1175 15.2027 2.1175 11.9574 2.1175ZM12.0027 18.1655C10.7834 18.1663 9.59136 17.8055 8.5772 17.1287C7.56304 16.4519 6.77236 15.4896 6.30517 14.3634C5.83798 13.2373 5.71526 11.9978 5.95254 10.8019C6.18982 9.60598 6.77644 8.50729 7.63819 7.64478C8.49995 6.78228 9.59814 6.19471 10.7939 5.9564C11.9896 5.71808 13.2291 5.83973 14.3557 6.30594C15.4823 6.77216 16.4453 7.56201 17.1229 8.57558C17.8006 9.58916 18.1624 10.7809 18.1627 12.0002C18.1606 13.6337 17.5111 15.1999 16.3565 16.3555C15.2018 17.5111 13.6363 18.162 12.0027 18.1655ZM12.0027 7.9975C11.2116 7.9975 10.4382 8.2321 9.78041 8.67162C9.12261 9.11115 8.60992 9.73586 8.30717 10.4668C8.00442 11.1977 7.9252 12.0019 8.07954 12.7779C8.23388 13.5538 8.61485 14.2665 9.17426 14.8259C9.73367 15.3853 10.4464 15.7663 11.2223 15.9206C11.9982 16.075 12.8025 15.9958 13.5334 15.693C14.2643 15.3903 14.889 14.8776 15.3286 14.2198C15.7681 13.562 16.0027 12.7886 16.0027 11.9975C16.0002 10.9374 15.578 9.92141 14.8284 9.1718C14.0788 8.42219 13.0628 7.99997 12.0027 7.9975ZM18.4027 7.04683C18.2139 7.04613 18.0272 7.00826 17.8531 6.93538C17.6789 6.8625 17.5209 6.75604 17.3879 6.62208C17.1193 6.35153 16.9693 5.98537 16.9707 5.60417C16.9721 5.22296 17.1249 4.85793 17.3954 4.58938C17.666 4.32083 18.0321 4.17075 18.4134 4.17217C18.7946 4.17358 19.1596 4.32637 19.4281 4.59693C19.6967 4.86748 19.8468 5.23363 19.8454 5.61484C19.8439 5.99604 19.6912 6.36107 19.4206 6.62962C19.15 6.89817 18.7839 7.04825 18.4027 7.04683Z"
                      fill="currentColor"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>`
        );
        orderSummary?.insertAdjacentHTML(
          "beforeend",
          `<!-- memo  -->
                <div class="bill-card__memo">
                  <!-- Subtotal  -->
                  <div class="bill-card__memo-item subtotal">
                    <p class="font-body--md-400">Subtotal:</p>
                    <span class="font-body--md-500">$${sum}</span>
                  </div>
                  <!-- Shipping  -->
                  <div class="bill-card__memo-item shipping">
                    <p class="font-body--md-400">Shipping:</p>
                    <span class="font-body--md-500">$10</span>
                  </div>
                  <!-- total  -->
                  <div class="bill-card__memo-item total">
                    <p class="font-body--lg-400">Total:</p>
                    <span class="font-body--xl-500">$${Number(sum + 10).toFixed(
                      2
                    )}</span>
                  </div>
                </div>
                <form action="/checkout.html">
                  <button class="button button--lg w-100" style="margin-top: 20px" type="submit">
                    Place Order
                  </button>
                </form>`
        );
        checkoutorderSummary?.insertAdjacentHTML(
          "beforeend",
          ` <div class="bill-card__memo">
                    <!-- Subtotal  -->
                    <div class="bill-card__memo-item subtotal">
                      <p class="font-body--md-400">Subtotal:</p>
                      <span class="font-body--md-500">$${sum}</span>
                    </div>
                    <!-- Shipping  -->
                    <div class="bill-card__memo-item shipping">
                      <p class="font-body--md-400">Shipping:</p>
                      <span class="font-body--md-500">$10</span>
                    </div>
                    <!-- total  -->
                    <div class="bill-card__memo-item total">
                      <p class="font-body--lg-400">Total:</p>
                      <span class="font-body--xl-500">$${Number(
                        sum + 10
                      ).toFixed(2)}</span>
                    </div>
                  </div>`
        );
        payment?.insertAdjacentHTML(
          "beforeend",
          `
           <div class="bill-card__header">
                <div class="bill-card__header">
                  <h2 class="bill-card__header-title font-body--xxl-500">
                    Payment Method
                  </h2>
                </div>
              </div>
              <div class="bill-card__body">
                <form action="#">
                  <!-- Payment Methods  -->
                  <div class="bill-card__payment-method">
                    <div class="bill-card__payment-method-item">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="payment" id="cash" checked />
                        <label class="form-check-label font-body--400" for="cash">
                          cash on delivery
                        </label>
                      </div>
                    </div>

                    <div class="bill-card__payment-method-item">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="payment" id="paypal" />
                        <label class="form-check-label font-body--400" for="paypal">
                          Paypal
                        </label>
                      </div>
                    </div>
                    <div class="bill-card__payment-method-item">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="payment" id="amazon" />
                        <label class="form-check-label font-body--400" for="amazon">
                          Amazon Pay
                        </label>
                      </div>
                    </div>
                  </div>

                   <button class="button button--lg w-100"  onclick="oderset(event,${
                     sum + 10
                   })">
                    Pay Now
                  </button>
                </form>
              </div>`
        );
      } else {
        showSnackbar("No product is in the cart", false);
      }
    })
    .catch((error) => console.error(error));
}

function handleRemoveCartListClick(e, productId) {
  console.log(e);
  e.preventDefault();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("LoginToken");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const raw = JSON.stringify({
    productId: productId,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://grocery-q716.onrender.com/cart-remove", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success) {
        showSnackbar(result.message, true);
        location.reload();
      } else {
        showSnackbar(result.message, false);
      }
    })
    .catch((error) => console.error(error));
  return false;
}

const originalFetch = window.fetch;

window.fetch = async (...args) => {
  try {
    const preloader = document.querySelector(".loader");

    preloader.style.display = "flex";
    const response = await originalFetch(...args);
    preloader.style.display = "none";

    // Check for 'invalid token' response
    if (response.status === 401) {
      // Clear localStorage and redirect to login page
      localStorage.clear();
      window.location.href = "/sign-in.html"; // Adjust this path if necessary
    }

    return response;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Re-throw the error for further handling if needed
  }
};

async function oderset(e, total) {
  e.preventDefault();
  // Get the values of each input field
  const firstName = document.getElementById("fname1").value;
  const lastName = document.getElementById("lname2").value;
  const address = document.getElementById("address").value;
  const country = document.getElementById("country").value;
  const province = document.getElementById("states").value;
  const postalCode = document.getElementById("zip").value;
  const phone = document.getElementById("phone").value;
  const paymentMethod = document.querySelector(
    'input[name="payment"]:checked'
  ).id;
  console.log(paymentMethod); // Output selected payment method for debugging

  // Check for required fields (adjust which fields are required)
  const requiredFields = [
    { value: firstName, name: "First Name" },
    { value: lastName, name: "Last Name" },
    { value: address, name: "Street Address" },
    { value: country, name: "Country / Region" },
    { value: province, name: "Province" },
    { value: postalCode, name: "Postal Code" },
    { value: phone, name: "Phone Number" },
  ];

  // Validate the required fields
  for (const field of requiredFields) {
    if (!field.value.trim()) {
      showSnackbar(`${field.name} is required`, false);
      return false; // Stop execution and show the alert
    }
  }

  // Prepare data for sending to the backend
  const userData = {
    firstName,
    lastName,
    address,
    country,
    province,
    postalCode,
    phone,
    paymentMethod,
    total,
  };

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("LoginToken");
  myHeaders.append("Authorization", `Bearer ${token}`);
  try {
    const response = await fetch(
      "https://grocery-q716.onrender.com/create-order",
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(userData),
      }
    );

    const result = await response.json();
    if (result.success) {
      showSnackbar("Order placed successfully!", true);
      window.location.href = "/user-dashboard";
    } else {
      showSnackbar("Failed to place the order.", false);
    }
  } catch (error) {
    console.error("Error sending order data:", error);
    showSnackbar("Error placing order. Please try again.", false);
  }

  return true;
}

function userDetails() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("LoginToken");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://grocery-q716.onrender.com/user-dashboard", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const productContainer = document.getElementById("user-profile");
      const recent = document.getElementById("recent-order");

      productContainer.insertAdjacentHTML(
        "beforeend",
        ` <div class="col-lg-7">
                <div class="dashboard__user-profile dashboard-card">
                  <div class="dashboard__user-profile-img">
                    <img src="src/images/user/img-07.png" alt="userImg" />
                  </div>
                  <div class="dashboard__user-profile-info">
                    <h5 class="font-body--xxl-500 name">${
                      data?.userDetails?.firstName +
                        " " +
                        data?.userDetails?.lastName ?? "User"
                    }</h5>
                    <p class="font-body--md-400 designation">Customer</p>
                    
                  </div>
                </div>
              </div>
              <!-- User Billing Address -->
              <div class="col-lg-5">
                <div class="dashboard__user-billing dashboard-card">
                  <h2 class="dashboard__user-billing-title font-body--md-500">
                    Billing Address
                  </h2>
                  <div class="dashboard__user-billing-info">

                    <p class="
                          dashboard__user-billing-location
                          font-body--md-400
                        ">
                   ${
                     data?.userDetails?.address +
                       " " +
                       data?.userDetails?.postalCode ?? "Address"
                   }
                    </p>
                    <p class="dashboard__user-billing-email font-body--lg-400">
                     ${data?.userDetails?.email ?? "user@gmail.com"}
                    </p>
                    <p class="dashboard__user-billing-number font-body--lg-400">
                      ${data?.userDetails?.phone ?? "0000000000"}
                    </p>
                  </div>
                  <!-- <a href="account-setting.html" class="
                        dashboard__user-billing-editaddress
                        font-body--lg-500
                      ">
                    Edit address</a> -->
                </div>
              </div>   
    `
      );
      data?.recentOrders?.forEach((product) => {
        recent.insertAdjacentHTML(
          "beforeend",
          `
          <tr>
                        <!-- Order Id  -->
                        <td class="dashboard__order-history-table-item order-id">
                          ${product?.orderId ?? "0000000000"}
                        </td>
                        <!-- Date  -->
                        <td class="
                              dashboard__order-history-table-item
                              order-date
                            ">
                          ${product?.orderDate ?? "0000000000"}
                        </td>
                        <!-- Total  -->
                        <td class="
                              dashboard__order-history-table-item
                              order-total
                            ">
                          <p class="order-total-price">
                            $${product?.total ?? "0000000000"}
                            <span class="quantity"> (${
                              product?.orderDetails?.items?.length
                            } Products)</span>
                          </p>
                        </td>
                        <!-- Status -->
                        <td class="
                              dashboard__order-history-table-item
                              order-status
                            ">
                          Processing
                        </td>
                        <!-- Details page  -->
                        <td class="
                              dashboard__order-history-table-item
                              order-details
                            ">
                         <a href="order-details.html?id=${
                           product?.orderId
                         }"> View Details</a>
                        </td>
                      </tr>
        `
        );
      });
    });
}
function orderhistoryAll() {
  //
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("LoginToken");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://grocery-q716.onrender.com/order-history", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const productContainer = document.getElementById(
        "order-history-table-body"
      );

      data?.data?.forEach((product) => {
        productContainer.insertAdjacentHTML(
          "beforeend",
          `  <tr>
                        <!-- Order Id  -->
                        <td class="dashboard__order-history-table-item order-id">
                          ${product?.orderId ?? "0000000000"}
                        </td>
                        <!-- Date  -->
                        <td class="
                              dashboard__order-history-table-item
                              order-date
                            ">
                         ${product?.orderDate ?? "0000000000"}
                        </td>
                        <!-- Total  -->
                        <td class="
                              dashboard__order-history-table-item
                              order-total
                            ">
                          <p class="order-total-price">
                            $${product?.total ?? "0000000000"}
                            <span class="quantity"> (${
                              product?.orderDetails?.items?.length
                            } Products)</span>
                          </p>
                        </td>
                        <!-- Status -->
                        <td class="
                              dashboard__order-history-table-item
                              order-status
                            ">
                          Processing
                        </td>
                        <!-- Details page  -->
                        <td class="
                              dashboard__order-history-table-item
                              order-details
                            ">
                          <a href="order-details.html?id=${
                            product?.orderId
                          }"> View Details</a>
                        </td>
                      </tr>`
        );
      });
    });
}

function orderDetails() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("LoginToken");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("id");
  fetch(
    `https://grocery-q716.onrender.com/order-details?orderId=${myParam}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const shipping = document.getElementById("shipping");
      const insidePayment = document.getElementById("inside-payment");
      const productPayment = document.getElementById("inside-paymentProduct");
      shipping.insertAdjacentHTML(
        "beforeend",
        `  <div class="dashboard__details-card-item">
                        <h5 class="dashboard__details-card-title">
                          Shipping Address
                        </h5>
                        <!-- Shipping Address -->
                        <div class="dashboard__details-card-item__inner">
                          <h2 class="font-body--lg-400 name">
                            ${
                              data?.shippingAddress?.firstName +
                              " " +
                              data?.shippingAddress?.lastName
                            }
                          </h2>
                          <p class="font-body--md-400">
                           ${
                             data?.shippingAddress?.address +
                             " " +
                             data?.shippingAddress?.postalCode
                           }
                          </p>
                        </div>
                        <div class="dashboard__details-card-item__inner">
                          <div class="
                                dashboard__details-card-item__inner-contact
                              ">
                            <h5 class="title">Email</h5>
                            <p class="font-body--md-400">
                              ${data?.shippingAddress?.email}
                            </p>
                          </div>
                          <div class="
                                dashboard__details-card-item__inner-contact
                              ">
                            <h5 class="title">Phone</h5>
                            <p class="font-body--md-400">                              ${
                              data?.shippingAddress?.phone
                            }
</p>
                          </div>
                        </div>
                      </div>`
      );
      insidePayment.insertAdjacentHTML(
        "beforeend",
        `<div class="dashboard__totalpayment-card-header">
                        <div class="dashboard__totalpayment-card-header-item">
                          <h5 class="title">Order id:</h5>
                          <p class="details order-id">${myParam}</p>
                        </div>
                        <div class="dashboard__totalpayment-card-header-item">
                          <h5 class="title">Payment Method:</h5>
                          <p class="details order-id">${
                            data?.shippingAddress?.paymentMethod
                          }</p>
                        </div>
                      </div>

                      <div class="dashboard__totalpayment-card-body">
                        <div class="dashboard__totalpayment-card-body-item">
                          <h5 class="font-body--md-400">Subtotal:</h5>
                          <p class="font-body--md-500">$${Number(
                            data?.total - 10
                          ).toFixed(2)}</p>
                        </div>
         
                        <div class="dashboard__totalpayment-card-body-item">
                          <h5 class="font-body--md-400">Shipping:</h5>
                          <p class="font-body--md-500">$10</p>
                        </div>
                        <div class="dashboard__totalpayment-card-body-item total">
                          <h5 class="font-body--xl-400">Total:</h5>
                          <p class="font-body--xl-500">${data?.total}</p>
                        </div>
                      </div>`
      );
      data?.orderDetails?.forEach((product) => {
        productPayment.insertAdjacentHTML(
          "beforeend",
          `   <tr>
                        <!-- Product item  -->
                        <td class="
                              dashboard__order-history-table-item
                              align-middle
                            ">
                          <a href="product-details.html?id=${
                            product?.id
                          }" class="dashboard__product-item">
                            <div class="dashboard__product-item-img">
                              <img src=${product?.image} alt="product" />
                            </div>
                            <h5 class="font-body--md-400">${product?.name}</h5>
                          </a>
                        </td>
                        <!-- Price  -->
                        <td class="
                              dashboard__order-history-table-item
                              order-date
                              align-middle
                            ">
                          $${product?.price}
                        </td>
                        <!-- quantity -->
                        <td class="
                              dashboard__order-history-table-item
                              order-total
                              align-middle
                            ">
                          <p class="order-total-price">x${product?.quantity}</p>
                        </td>
                        <!-- Subtotal  -->
                        <td class="
                              dashboard__order-history-table-item
                              order-status
                              align-middle
                            " style="text-align: left">
                          <p class="font-body--md-500">$${
                            product?.price * product?.quantity
                          }</p>
                        </td>
                      </tr>                 `
        );
      });
    });
}
function updateCartSummary() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("LoginToken");
  myHeaders.append("Authorization", `Bearer ${token}`);
  if (!token) return;
  fetch("https://grocery-q716.onrender.com/cart-summary", {
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Update all elements with the "price" class
        let priceElement = document.querySelector(
          ".header__cart-item-content-info .price"
        );
        priceElement.textContent = "$" + data.totalCost;

        // Update all elements with the "cart-item-count" class
        const countElements = document.querySelectorAll(".item-number");
        countElements.forEach((element) => {
          element.textContent = data.totalItems;
        });
      } else {
        console.error("Error fetching cart summary");
      }
    })
    .catch((error) => {
      console.error("Error fetching cart summary:", error);
    });
}

updateCartSummary();
var products = new Swiper(".popular-products--slider", {
  slidesPerView: "auto",
  autoHeight: true,
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
  },
});
var categories = new Swiper(".popular-categories--slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});
// Todo :

// gst
// exirey date
// color
//  weight
// manufacture by
//

document.addEventListener("DOMContentLoaded", () => {
  // Select the search form
  const searchForm = document
    .querySelector(".header__input-form")
    .closest("form");

  // Add a submit event listener to the form
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the input value
    const searchInput = searchForm
      .querySelector("input[type='text']")
      .value.trim();

    // Check if the input is not empty
    if (!searchInput) {
      alert("Please enter a search term.");
      return; // Exit the function if no value is entered
    }
    window.location.href = `/product.html?search=${encodeURIComponent(
      searchInput
    )}`;

    // Prepare the API endpoint
    console.log();
  });
});
