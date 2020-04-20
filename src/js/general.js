const questions = document.querySelector(".questions");
const repon = document.querySelector(".reponces");
const suivant = document.getElementById("suivant");
const precedent = document.getElementById("precedent");
const demarage = document.getElementById("demarer");
const sect = document.querySelectorAll(".sect");
let i = 0;
var oplalla;
var blan = [34, 18, 50, 140];

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
  });
};

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
    tcheecked();
    tcheeckedtext();
  });
};
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
  });
  if (oplalla.value == "") {
    switch (choix) {
      case "form__question--c":
        info.splice(i, 1, blan[0]);
        break;
      case "form__question--age":
        info.splice(i, 1, blan[1]);
        break;
      case "form__question--poids":
        info.splice(i, 1, blan[2]);
        break;
      case "form__question--taille":
        info.splice(i, 1, blan[3]);
        break;
    }
  }
  // }
};

const Question = [
  '<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p>',
  '<p class="form__question--c">Quelle est votre température corporelle ?</p>',
  '<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p>',
  '<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ? </p>',
  '<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ? </p>',
  '<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles. </p>',
  '<p class="form__question">Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ? </p>',
  '<p class="form__question">Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? </p>',
  '<p class="form__question"> Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ? </p>',
  '<p class="form__question--quatre">Actuellement, comment vous vous sentez ? </p>',
  '<p class="form__question--age">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p>',
  '<p class="form__question--poids">Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p>',
  '<p class="form__question--taille">Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p>',
  '<p class="form__question"> Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? </p>',
  '<p class="form__question">Êtes-vous diabétique ?</p>',
  '<p class="form__question">Avez-vous ou avez-vous eu un cancer ?</p>',
  '<p class="form__question">Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?</p>',
  '<p class="form__question">Avez-vous une insuffisance rénale chronique dialysée ?</p>',
  '<p class="form__question">Avez-vous une maladie chronique du foie ?</p>',
  ' <p class="form__question--trois">Êtes-vous enceinte ?</p>',
  '<p class="form__question">Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?</p>',
  ' <p class="form__question">Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).</p>',
];
const rep = [
  ///// 1 reponce /////
  {
    c:
      '<input type="number" id="reponce1" min= "34"> <label>°c</label><br><br>',
    age: '<input type="number" id="reponce1"><label>age</label><br><br></br>',
    poids: ' <input type="number" id="reponce1"><label>kg</label><br><br></br>',
    taille:
      '<input type="number" id="reponce1"><label>cm</label size ="10"><br><br></br>',
  },
  /////////// oui non ///////////
  ' <input type="radio" id="form__choice" name="question"><label for="oui">Oui</label> <br> <input type="radio" id="form__choice" name="question"><label for="non">Non</label><br><br></br>',
  /////// 3reponces ////////////
  ' <input type="radio" id="form__choice" name="question" checked> <label for="oui">Oui</label> <input type="radio" id="form__choice" name="question"> <label for="non">Non</label><input type="radio" id="form__choice" name="question"  ><label for="homme">Homme</label><br><br></br>',
  /////// 4reponces////////////
  '<input type="radio" id="form__choice" name="question" checked  ><label for="bien">Bien</label><input type="radio" id="form__choice" name="question" > <label for="abien">Assez bien</label>  <input type="radio" id="form__choice" name="question" > <label for="fatigue">Fatigué(e)</label> <input type="radio" id="form__choice" name="question" > <label for="tfatigue">Très fatigué(e)</label><br><br></br>',
];
var tabRe = [
  "undefined",
  ["Oui", "Non"],
  ["Oui", "Non", "Homme"],
  ["Bien", "Assez bien", "Fatigué", "Très fatigué"],
];
var info = [];
const resultat = [];
