const acc = document.getElementsByClassName("acc-container");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
