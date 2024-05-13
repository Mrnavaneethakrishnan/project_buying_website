const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Home Automation",
    price: 60,
    colors: [
      {
        code: "black",
        img: "./img/home automation.jpg",
      },
      {
        code: "darkblue",
        img: "./img/home automation.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Smart traffic light System",
    price: 80,
    colors: [
      {
        code: "lightgray",
        img: "./img/smart traffic light system.jpg",
      },
      {
        code: "green",
        img: "./img/smart traffic light system.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Responsive Website",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "img/coffee.png",
      },
      {
        code: "green",
        img: "img/coffee.png",
      },
    ],
  },
  {
    id: 4,
    title: "Smart Monitoring",
    price: 129,
    colors: [
      {
        code: "black",
        img: "img/Embedded project.png",
      },
      {
        code: "lightgray",
        img: "img/Embedded project.png",
      },
    ],
  },
  {
    id: 5,
    title: "Robotic Car",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "img/car.jpg",
      },
      {
        code: "black",
        img: "img/car.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
