const questions = document.querySelector(".questions");
const repon = document.querySelector(".reponces");
const suivant = document.getElementById("suivant");
const precedent = document.getElementById("precedent");
const demarage = document.getElementById("demarer");
const resultat = document.getElementById("resultat");
const sect = document.querySelectorAll(".sect");
const afficheNum = document.getElementById("afficheNum");
const progress = document.getElementById("file");
var i = 0;
var oplalla;
var blan = ["37", "18", "60", "170"];
var val = 1;
window.onload = () => {
  demarage.addEventListener("click", function () {
    sect[0].classList.add("affiche");
    sect[1].classList.remove("affiche");
    precedent.classList.add("affiche");
    questions.innerHTML = Question[0];
    choix = document.querySelector(".questions p").className;
    afficheNum.textContent = "1/" + Question.length;
    progress.setAttribute("value", val);
    choisReponce();
    tcheecked();
  });
  Qsuivante();
  Qprecedente();
};

Qsuivante = () => {
  suivant.addEventListener("click", function (e) {
    reponces = document.querySelectorAll("#form__choice");
    precedent.classList.remove("affiche");
    if (i >= 0 && i < Question.length - 1) {
      i++;
      val++;
    }
    if (i == Question.length - 1) {
      suivant.classList.add("affiche");
      resultat.classList.remove("affiche");
    }
    k = i + 1;
    afficheNum.textContent = k + "/" + Question.length;
    progress.setAttribute("value", val);
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
    suivant.classList.remove("affiche");
    resultat.classList.add("affiche");
    if (i > 0) {
      i--;
      val--;
    }
    if (i == 0) {
      precedent.classList.add("affiche");
    }
    k = i + 1;
    afficheNum.textContent = k + "/" + Question.length;
    progress.setAttribute("value", val);
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

///////////////////////: navbar/////////////////:

let facteurPronostique = [];
let facteurMineur = [];
let facteurMajeur = [];
let tabSymptom = [];
let affichageRes = document.getElementById("affichageResult");
triReponces = () => {
  for (let i = 0; i < info.length; i++) {
    if (i == 1) {
      facteurMineur.push(info[i]);
      facteurMajeur.push(info[i]);
    } else if (i >= 11 && i <= 21) {
      facteurPronostique.push(info[i]);
    } else if (i == 7 || i == 8) {
      facteurMajeur.push(info[i]);
    } else if (i == 6 || i == 9) {
      facteurMineur.push(info[i]);
    }
    if (i >= 0 && i <= 9) {
      tabSymptom.push(info[i]);
    }
  }
};
var resultatPronostique = 0;
var resultatMineur = 0;
var resultatMajeur = 0;
var symptome = 0;
trifacteur = () => {
  for (let i = 0; i < facteurPronostique.length; i++) {
    if (facteurPronostique[i] == "Oui") {
      resultatPronostique++;
    }
  }
  for (let i = 0; i < facteurMineur.length; i++) {
    if (
      facteurMineur[i] >= 39.7 ||
      facteurMineur[i] == "Oui" ||
      facteurMineur[i] == "Fatigué" ||
      facteurMineur[i] == "Très fatigué"
    ) {
      resultatMineur++;
    }
  }
  for (let i = 0; i < facteurMajeur.length; i++) {
    if (facteurMajeur[i] <= 35.4 || facteurMajeur[i] == "Oui") {
      resultatMajeur++;
    }
  }
  for (let i = 0; i < tabSymptom.length; i++) {
    if (tabSymptom[i] == "Oui") {
      symptome++;
    }
  }
};
let wayeh = () => {
  if (info[10] < 15) {
    affichageRes.innerHTML =
      tabresult.ans15 + "<hr>" + tabresult.resultatStandar;
  }
  if (
    info[0] == "Oui" ||
    (info[2] == "Oui" && info[4] == "Oui") ||
    (info[2] == "Oui" && info[3] == "Oui") ||
    (info[0] == "Oui" && info[5] == "Oui")
  ) {
    ///Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
    if (resultatPronostique == 0 && resultatMajeur == 0) {
      ////Tout patient sans facteur pronostique :
      if (resultatMineur == 0 && info[10] < 50) {
        ////Sans facteur de gravité & <50 ans :
        affichageRes.innerHTML =
          tabresult.sans + "<hr>" + tabresult.resultatStandar;
      } else if (
        //////Sans facteur de gravité & 50-69 ans, ou avec au moins un facteur de gravité mineur :
        resultatMineur <= 3 &&
        info[10] >= 50 &&
        info[10] <= 69
      ) {
        affichageRes.innerHTML =
          tabresult.resultat3 + "<hr>" + tabresult.resultatStandar;
      }
    }
    // else {
    //   ////Tout patient avec un facteur pronostique ou plus : -----a regrouper 2-----
    //   if (resultatMineur <= 1 && resultatMajeur == 0) {
    //     ///Aucun facteur de gravité || Un seul facteur de gravité mineur  -----a regrouper 2-----
    //     affichageRes.innerHTML = tabresult.resultat3;
    //   } else if (resultatMineur >= 2 || resultatMajeur == 0) {
    //     ////Au moins deux facteurs de gravité mineurs  (((((((((((a regrouper1)))))))))))
    //     affichageRes.innerHTML = tabresult.resultat4;
    //   }
    // }
  }
  if (
    info[0] == "Oui" ||
    (info[2] == "Oui" && info[4] == "Oui") ||
    (info[2] == "Oui" && info[3] == "Oui") ||
    (info[0] == "Oui" && info[5] == "Oui") ||
    (info[0] == "Oui" && info[2] == "Oui")
  ) {
    ///////Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée (et)avec fievre et toux
    if (resultatPronostique >= 1) {
      if (resultatMajeur == 0 && resultatMineur <= 1) {
        ///Aucun facteur de gravité ||Un seul facteur de gravité mineur  -----a regrouper 2-----
        affichageRes.innerHTML =
          tabresult.resultat3 + "<hr>" + tabresult.resultatStandar;
      } else if (resultatMajeur == 0 && resultatMineur >= 2) {
        ///// Au moins deux facteurs de gravité mineurs (((((((((((a regrouper1)))))))))))
        affichageRes.innerHTML =
          tabresult.resultat4 + "<hr>" + tabresult.resultatStandar;
      }
    } else if (resultatMajeur > 0) {
      ///Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
      ///////Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée (et)avec fievre et toux
      affichageRes.innerHTML =
        tabresult.resultat3 + "<hr>" + tabresult.resultatStandar;
    }
  }
  if (info[0] == "Oui" && info[2] == "Oui") {
    ///// avec fievre et toux
    if (resultatPronostique == 0) {
      ///Tout patient sans facteur pronostique :
      if (resultatMajeur == 0 && resultatMineur >= 1) {
        ///Sans facteur de gravité ou au moins 1 facteur de gravité mineur sans facteur de gravité majeur
        affichageRes.innerHTML =
          tabresult.resultat3 + "<hr>" + tabresult.resultatStandar;
      }
    }
    //else {
    //   ///Tout patient avec un facteur pronostique ou plus :  -----a regrouper 2-----
    //   if (resultatMajeur == 0 && resultatMineur <= 1) {
    //     ///Aucun facteur de gravité ||Un seul facteur de gravité mineur  -----a regrouper 2-----
    //     affichageRes.innerHTML = tabresult.resultat3;
    //   } else if (resultatMajeur == 0 && resultatMineur >= 2) {
    //     ///// Au moins deux facteurs de gravité mineurs (((((((((((a regrouper1)))))))))))
    //     affichageRes.innerHTML = tabresult.resultat4;
    //   }
    // }
  }
  if (
    info[0] == "Oui" ||
    info[2] == "Oui" ||
    info[3] == "Oui" ||
    info[4] == "Oui"
  ) {
    ///Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures :
    if (resultatPronostique == 0) {
      /////Pas de facteur de gravité :
      affichageRes.innerHTML =
        tabresult.resultat5 + "<hr>" + tabresult.resultatStandar;
    } else if (
      resultatPronostique > 0 ||
      resultatMajeur > 0 ||
      resultatMineur > 0
    ) {
      /////Au moins un facteur de gravité ou un facteur pronostique :
      affichageRes.innerHTML = tabresult.resultat5;
      affichageRes.innerHTML =
        tabresult.resultat4 + "<hr>" + tabresult.resultatStandar;
    }
  }
  if (symptome == 0) {
    affichageRes.innerHTML =
      tabresult.resultat6 + "<hr>" + tabresult.resultatStandar;
  }
};
resultat.addEventListener("click", function (e) {
  sect[1].classList.add("affiche");
  sect[2].classList.remove("affiche");
  triReponces();
  trifacteur();
  wayeh();
  e.preventDefault();
  repeter.classList.remove("affiche");
});
let repeter = document.getElementById("repeter");
repeter.addEventListener("click", function () {
  i = 0;
  info = [];
  val = 1;
  blan = ["37", "18", "60", "170"];
  sect[2].classList.add("affiche");
  sect[1].classList.remove("affiche");
  questions.innerHTML = Question[0];
  afficheNum.textContent = "1/" + Question.length;
  progress.setAttribute("value", val);
  resultat.classList.add("affiche");
  precedent.classList.add("affiche");
  suivant.classList.remove("affiche");
  choisReponce();
  tcheecked();
});

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
      '<div class="inputText"><input type="number" id="reponce1" min= "34"> <label>°c</label></div><br><br>',
    age:
      '<div  class="inputText"> <input type="number" id="reponce1"><label>age</label></div><br><br></br>',
    poids:
      ' <div  class="inputText"><input type="number" id="reponce1"><label>kg</label></div><br><br></br>',
    taille:
      '<div  class="inputText"><input type="number" id="reponce1"><label>cm</label size ="10"></div><br><br></br>',
  },
  /////////// oui non ///////////
  '<div> <input type="radio" id="form__choice" name="question"><label for="oui">Oui</label><br></div> <div> <input type="radio" id="form__choice" name="question"><label for="non">Non</label><br><br></br></div>',
  /////// 3reponces ////////////
  ' <div><input type="radio" id="form__choice" name="question" checked> <label for="oui">Oui</label> </div><div> <input type="radio" id="form__choice" name="question"> <label for="non">Non</label> </div><div><input type="radio" id="form__choice" name="question"  ><label for="homme">Homme</label><br><br></br> </div>',
  /////// 4reponces////////////
  '<div><input type="radio" id="form__choice" name="question" checked  ><label for="bien">Bien</label></div><div><input type="radio" id="form__choice" name="question" > <label for="abien">Assez bien</label></div><div>  <input type="radio" id="form__choice" name="question" > <label for="fatigue">Fatigué(e)</label></div><div> <input type="radio" id="form__choice" name="question" > <label for="tfatigue">Très fatigué(e)</label><br><br></br></div>',
];
var tabRe = [
  "undefined",
  ["Oui", "Non"],
  ["Oui", "Non", "Homme"],
  ["Bien", "Assez bien", "Fatigué", "Très fatigué"],
];
var info = [];
const tabresult = {
  ans15:
    "Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. ",
  Moin50_Sansfacteur:
    " : nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.  ",
  sans:
    "  nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes ",
  resultat3:
    " téléconsultation ou médecin généraliste ou visite à domicile <br> “appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.” ",
  resultat4: " appel 141 ",
  resultat5:
    " Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.",
  resultat6:
    " Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.",
  resultatStandar:
    "<span> Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.  </span>",
};
