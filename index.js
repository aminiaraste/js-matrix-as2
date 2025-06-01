var btn = document.getElementById("btn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("my-form").style.background = "red";
    const body = document.querySelector("body");
    body.classList.add("bg-dark");
    body.style.background = "gray";
    body.style.color = "white";
    document.querySelector(".items").lastElementChild.innerHTML = '<h1>Hello</h1>';
  });