const questions = document.querySelector(".questions");
const repon = document.querySelector(".reponces");
const suivant = document.getElementById("suivant");
const precedent = document.getElementById("precedent");
const demarage = document.getElementById("demarer");
const sect = document.querySelectorAll(".sect");

var oplalla;
//////////////////// passer de l'information au question //////////////////
var passage = function () {
  for (let i = 0; i < sect.length; i++) {
    demarage.addEventListener("click", function () {
      sect[i].classList.toggle("affiche");
      questions.innerHTML = Question[0];
      repon.innerHTML = rep[1];
      precedent.classList.add("affiche");
      blan(1);
    });
  }
  Qsuivante();
  Qprecedente();
};

//////// passage de question //////
let i = 0;
var Qsuivante = function () {
  suivant.addEventListener("click", function () {
    reponces = document.querySelectorAll("#form__choice");
    precedent.classList.remove("affiche");
    if (i >= 0 && i < Question.length - 1) {
      i++;
    }
    questions.innerHTML = Question[i];
    choix = document.querySelector(".questions p").className;
    choisReponce();
  });
};
var Qprecedente = function () {
  precedent.addEventListener("click", function () {
    if (i > 0) {
      i--;
    }
    if (i == 0) {
      precedent.classList.add("affiche");
    }
    questions.innerHTML = Question[i];
    choix = document.querySelector(".questions p").className;
    choisReponce();
  });
};

//// garder les resultat////

////// metre les resultats dans un tableau qui contien '4 tableau a fin de recuperer la position cheked (i) et la position du tableau reponces.lenght
var choisReponce = function () {
  switch (choix) {
    case "form__question--c":
      repon.innerHTML = rep[0].c;
      case0();
      break;
    case "form__question--age":
      repon.innerHTML = rep[0].age;
      case0();
      break;
    case "form__question--poids":
      repon.innerHTML = rep[0].poids;
      case0();
      break;
    case "form__question--taille":
      repon.innerHTML = rep[0].taille;
      case0();
      break;
    case "form__question":
      repon.innerHTML = rep[1];
      blan(1);
      break;
    case "form__question--trois":
      repon.innerHTML = rep[2];
      blan(2);
      break;
    case "form__question--quatre":
      repon.innerHTML = rep[3];
      blan(3);
      break;
  }
};
var garderReponce = function () {};
var blan = function (e) {
  reponces = document.querySelectorAll("#form__choice");
  info.splice(i, 1, tabRe[e][0]);
  for (let k = 0; k < reponces.length; k++) {
    reponces[k].addEventListener("click", function () {
      if (reponces[k].checked) {
        info.splice(i, 1, tabRe[e][k]);
      }
    });
  }
};
var case0 = function () {
  oplalla = document.getElementById("reponce1");
  if (oplalla.value == "") {
    info.splice(i, 1, tabRe[0]);
  }
  oplalla.addEventListener("change", function (e) {
    info.splice(i, 1, e.target.value);
  });
};
passage();
