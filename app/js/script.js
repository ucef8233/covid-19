const questions = document.querySelector(".questions");
const repon = document.querySelector(".reponces");
const suivant = document.getElementById("suivant");
const precedent = document.getElementById("precedent");
const demarage = document.getElementById("demarer");
const sect = document.querySelectorAll(".sect");
let i = 0;
var oplalla;
var blan = [];

//////////////////// passer de l'information au question //////////////////
window.onload = () => {
  for (let i = 0; i < sect.length; i++) {
    demarage.addEventListener("click", function () {
      sect[i].classList.toggle("affiche");
      precedent.classList.add("affiche");
      questions.innerHTML = Question[0];
      choix = document.querySelector(".questions p").className;
      choisReponce();
      tcheecked();
    });
  }
  Qsuivante();
  Qprecedente();
};

//////// passage de question //////

Qsuivante = () => {
  suivant.addEventListener("click", function (e) {
    reponces = document.querySelectorAll("#form__choice");
    precedent.classList.remove("affiche");
    if (i >= 0 && i < Question.length - 1) {
      i++;
    }
    questions.innerHTML = Question[i];
    choix = document.querySelector(".questions p").className;
    e.preventDefault();
    choisReponce();
    tcheecked();
    tcheeckedtext();
    // inputText();
    // if (reponces.length == 0) {
    //   blan.splice(i, 1, info[i]);
    // }
  });
};
// recupinput = () => {
//   for (let i = 0; i < 2; i++) {
//     if (reponces.length == 0) {
//     }
//   }
// };

Qprecedente = () => {
  precedent.addEventListener("click", function (e) {
    if (i > 0) {
      i--;
    }
    if (i == 0) {
      precedent.classList.add("affiche");
    }
    questions.innerHTML = Question[i];
    choix = document.querySelector(".questions p").className;
    e.preventDefault();
    choisReponce();
    oplalla = document.getElementById(".reponce1");
    tcheecked();
    tcheeckedtext();
  });
};

//// garder les resultat////

////// metre les resultats dans un tableau qui contien '4 tableau a fin de recuperer la position cheked (i) et la position du tableau reponces.lenght
choisReponce = () => {
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
      spliceReponce(1);
      break;
    case "form__question--trois":
      repon.innerHTML = rep[2];
      spliceReponce(2);
      break;
    case "form__question--quatre":
      repon.innerHTML = rep[3];
      spliceReponce(3);
      break;
  }
};
tcheeckedtext = () => {
  oplalla = document.getElementById("reponce1");
  if (reponces.length == 0) {
    switch (choix) {
      case "form__question--c":
        oplalla.value = blan[0];
        break;
      case "form__question--age":
        oplalla.value = blan[1];
        break;
      case "form__question--poids":
        oplalla.value = blan[2];
        break;
      case "form__question--taille":
        oplalla.value = blan[3];
        break;
    }
  }
};
spliceReponce = (e) => {
  reponces = document.querySelectorAll("#form__choice");
  if (info[i] == undefined) {
    info.splice(i, 1, tabRe[e][0]);
  } else {
    info.splice(i, 1, info[i]);
  }
  // if (info[i] !== undefined)
  for (let k = 0; k < reponces.length; k++) {
    reponces[k].addEventListener("click", function () {
      if (reponces[k].checked) {
        info.splice(i, 1, tabRe[e][k]);
      }
    });
  }
};
tcheecked = () => {
  if (info[i] == "Oui" || info[i] == "Bien") {
    reponces[0].setAttribute("checked", "checked");
  } else if (info[i] == "Non" || info[i] == "Assez bien") {
    reponces[1].setAttribute("checked", "checked");
  } else if (info[i] == "Homme" || info[i] == "Fatigué") {
    reponces[2].setAttribute("checked", "checked");
  } else if (info[i] == "Très fatigué") {
    reponces[3].setAttribute("checked", "checked");
  }
};
// var r = 0;
// hahowa = [];
// inputText = () => {
//   oplalla = document.querySelector(".reponce1");
//   if (reponces.length == 0) {
//     oplalla.addEventListener("change", function (e) {
//       blan.splice(r, 1, e.target.value);
//       r++;
//     });
//   }
//   hahowa.push(blan[blan.length - 1]);
// };
case0 = () => {
  reponces = document.querySelectorAll("#form__choice");
  oplalla = document.getElementById("reponce1");
  // for (let k = 0; k < 4; k++) {
  oplalla.addEventListener("change", function (e) {
    info.splice(i, 1, e.target.value);
    switch (choix) {
      case "form__question--c":
        blan.splice(0, 1, e.target.value);
        break;
      case "form__question--age":
        blan.splice(1, 1, e.target.value);
        break;
      case "form__question--poids":
        blan.splice(2, 1, e.target.value);
        break;
      case "form__question--taille":
        blan.splice(3, 1, e.target.value);
        break;
    }
    if (oplalla.value == "") {
      switch (choix) {
        case "form__question--c":
          info.splice(i, 1, e.target.value);

        case "form__question--age":
          info.splice(i, 1, e.target.value);

        case "form__question--poids":
          info.splice(i, 1, e.target.value);

        case "form__question--taille":
          info.splice(i, 1, e.target.value);
      }
    }
  });
  // }
};

////////////////broblaime de champ input doit pas etre vid soit valeur par defaut soit abliger utilisateur a entrer un nombre //////
