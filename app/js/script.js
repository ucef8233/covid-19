const questions = document.querySelector(".questions");
const suivant = document.getElementById("suivant");
const precedent = document.getElementById("precedent");
const demarage = document.getElementById("demarer");
const sect = document.querySelectorAll(".sect");
let i = 0;
//////////////////// passer de l'information au question //////////////////

for (let i = 0; i < sect.length; i++) {
  demarage.addEventListener("click", function () {
    sect[i].classList.toggle("affiche");
    questions.innerHTML = Question[0].question + Question[0].rep;
    precedent.classList.add("affiche");
  });
}

//////// passage de question //////

suivant.addEventListener("click", function () {
  precedent.classList.remove("affiche");
  if (i >= 0 && i < Question.length - 1) {
    i++;
  }
  questions.innerHTML = Question[i].question + Question[i].rep;
});
precedent.addEventListener("click", function () {
  if (i > 0) {
    i--;
  }
  if (i == 0) {
    precedent.classList.add("affiche");
  }
  questions.innerHTML = Question[i].question + Question[i].rep;
});
