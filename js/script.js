// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.screen);
// console.log(window.location.href);

// window.location.replace("https://www.w3schools.com/js/js_window_location.asp");

// console.log(document.getElementsByTagName("h2"));
// console.log(document.getElementById("P2"));
// console.log(document.getElementsByClassName("P1")[0]);
// console.log(document.getElementsByName("email")[0].value);
// console.log(document.querySelector("h2").innerHTML);
// console.log(document.querySelector("h2").innerText);

// document.querySelector("h2").innerText = "<p>Hello world!</p>"
// document.querySelector("h2").innerHTML = "<p>Hello world!</p>"
// console.log(document.querySelector("p").attributes);
// console.log(document.querySelector("p").title = "Changed");
// document.querySelector("p").classList.add("test");
// console.log(document.querySelector("p").classList.contains("P1"));

// console.log(document.querySelector("p").hasAttribute("title"));

// document.querySelector("p").style.color = "red";
// document.querySelector("p").style.fontSize = "50px";
// document.querySelector("h2").setAttribute("style", "font-size: 60px; color:green;");

// let h1 = document.createElement("h1");
// h1.title = "Heading 1";
// h1.innerText = "Lorem ipsum qazax!";
// h1.id = "Nagarersan";

// let item = document.getElementsByClassName("item")[0];
// item.appendChild(h1);

// let input = document.getElementsByName("email")[0];
// let childOfItem = document.getElementsByClassName("item")[0].children;
// for (let i = 0; i < childOfItem.length; i++) {
//     console.log(childOfItem[i]);
// }

// let a = document.querySelector("#btn");

// a.addEventListener("click", function (e) {
//     e.preventDefault();

//     let h1 = document.createElement("h1");
//     h1.title = "Heading 1";
//     h1.innerText = "Lorem ipsum qazax!";
//     h1.id = "Nagarersan";

//     let item = document.getElementsByClassName("item")[0];
//     item.appendChild(h1);
// });

// let show = (e) => {
//     e.preventDefault();
//     alert("Showen");
// }

let input = document.getElementsByName("email")[0];

input.addEventListener("keyup", function () {
    // e.preventDefault();

    console.log(this.value);
})