const questions = document.querySelector(".questions");
const suivant = document.getElementById("suivant");
const precedent = document.getElementById("precedent");
const demarage = document.getElementById("demarer");
const sect = document.querySelectorAll(".sect");
let i = 0;
var oplalla;
var info = [];
//////////////////// passer de l'information au question //////////////////

for (let i = 0; i < sect.length; i++) {
  demarage.addEventListener("click", function () {
    sect[i].classList.toggle("affiche");
    questions.innerHTML = Question[0].question + Question[0].rep;
    recup();
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
  recup();
});
precedent.addEventListener("click", function () {
  if (i > 0) {
    i--;
  }
  if (i == 0) {
    precedent.classList.add("affiche");
  }
  questions.innerHTML = Question[i].question + Question[i].rep;
  recup();
});
////// garder les resultat////
var recup = function () {
  reponces = document.querySelectorAll("#form__choice");
  oplalla = document.getElementById("reponce1");
  if (reponces.length === 0) {
    oplalla.addEventListener("change", function (e) {
      info.splice(i, 1, e.target.value);
    });
  } else if (reponces.length === 2) {
    for (let k = 0; k < reponces.length; k++) {
      reponces[k].addEventListener("click", function () {
        if (reponces[0].checked) {
          info.splice(i, 1, "Oui");
        } else if (reponces[1].checked) {
          info.splice(i, 1, "Non");
        }
      });
    }
  }
};

// var recup = function () {};
