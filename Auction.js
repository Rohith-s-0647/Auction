const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav-contents");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
let counter1 = parseFloat(document.querySelector(".calculate1").innerText);

function add1() {
  counter1 += 0.1;
  document.querySelector(".calculate1").innerText =
    Math.round(counter1 * 10) / 10;
  console.log(counter1);
  if (counter1 <= 17.2) {
    alert("goosebumps");
  }
}

function sub1() {
  counter1 -= 0.1;
  document.querySelector(".calculate1").innerText =
    Math.round(counter1 * 10) / 10;
  console.log(counter1);
  if (counter1 <= 17.2) {
    alert("goosebumps");
  }
}

function auction1() {
  let a = document.querySelector(".calculate1").innerText;

  let heading = "user1";
  let randomValue = Math.floor(Math.random() * 30) + 1;
  let input = prompt(`${heading}: ${randomValue}`);
  let c = `Existing User ${heading}: ${randomValue}`;
  let heading1 = "user2";
  let input1 = prompt(`${heading1}: ${a}`);
  let d = `Your Auction ${heading1} is ${a}`;

  document.querySelector(".display1").innerText = c;
  document.querySelector(".display2").innerText = d;

  buy1();
}

function buy1() {
  let user1Value = document.querySelector(".display1").innerText.split(": ")[1];
  let user2Value = document
    .querySelector(".display2")
    .innerText.split(" is ")[1];

  console.log("User1 Value:", user1Value);
  console.log("User2 Value:", user2Value);
  if (user1Value > user2Value) {
    alert("You are Not Eligible");
  } else {
    alert("You are Eligible");
    location.href="sell1.html"
  }
}

let counter2 = parseFloat(document.querySelector(".calculate2").innerText);

function add2() {
  counter2 += 0.1;
  document.querySelector(".calculate2").innerText =
    Math.round(counter2 * 10) / 10;
  console.log(counter2);
  if (counter2 <= 17.2) {
    alert("goosebumps");
  }
}

function sub2() {
  counter2 -= 0.1;
  document.querySelector(".calculate2").innerText =
    Math.round(counter2 * 10) / 10;
  console.log(counter2);
  if (counter2 <= 17.2) {
    alert("goosebumps");
  }
}

function auction2() {
  let a = document.querySelector(".calculate2").innerText;

  let heading = "user1";
  let randomValue = Math.floor(Math.random() * 30) + 1;
  let input = prompt(`${heading}: ${randomValue}`);
  let c = `Existing User ${heading}: ${randomValue}`;
  let heading1 = "user2";
  let input1 = prompt(`${heading1}: ${a}`);
  let d = `Your Auction ${heading1} is ${a}`;

  document.querySelector(".display3").innerText = c;
  document.querySelector(".display4").innerText = d;

  buy2();
}

function buy2() {
  let user1Value = document.querySelector(".display3").innerText.split(": ")[1];
  let user2Value = document
    .querySelector(".display4")
    .innerText.split(" is ")[1];

  console.log("User1 Value:", user1Value);
  console.log("User2 Value:", user2Value);
  if (user1Value > user2Value) {
    alert("You are Not Eligible");
  } else {
    alert("You are Eligible");
    location.href="sell2.html"
  }
}
let counter3 = parseFloat(document.querySelector(".calculate3").innerText);

function add3() {
  counter3 += 0.1;
  document.querySelector(".calculate3").innerText =
    Math.round(counter3 * 10) / 10;
  if (counter3 <= 17.2) {
    alert("goosebumps");
  }
}

function sub3() {
  counter3 -= 0.1;
  document.querySelector(".calculate3").innerText =
    Math.round(counter3 * 10) / 10;
  if (counter3 <= 17.2) {
    alert("goosebumps");
  }
}

function auction3() {
  let a = document.querySelector(".calculate3").innerText;

  let heading = "user1";
  let randomValue = Math.floor(Math.random() * 30) + 1;
  let input = prompt(`${heading}: ${randomValue}`);
  let c = `Existing User ${heading}: ${randomValue}`;
  let heading1 = "user2";
  let input1 = prompt(`${heading1}: ${a}`);
  let d = `Your Auction ${heading1} is ${a}`;

  document.querySelector(".display5").innerText = c;
  document.querySelector(".display6").innerText = d;

  buy3();
}

function buy3() {
  let user1Value = document.querySelector(".display5").innerText.split(": ")[1];
  let user2Value = document
    .querySelector(".display6")
    .innerText.split(" is ")[1];

  console.log("User1 Value:", user1Value);
  console.log("User2 Value:", user2Value);
  if (user1Value > user2Value) {
    alert("You are Not Eligible");
  } else {
    alert("You are Eligible");
    location.href="sell3.html"
  }
}
