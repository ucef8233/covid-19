var conter = 0;
var reponces = [];
var val = 1;
window.onload = () => {
  $("#demarer").click(() => {
    $(".main__inform").css("display", "none");
    $("#precedent").css("display", "none");
    $(".main__questionnaire").css("display", "block");
    $(".questions").html(Question[conter]);
    // $("#suivant").attr("disabled", "disabled");
    bar(0);
    recupValue();
  });
  qSuivante();
  qPrecedente();
};

bar = (e) => {
  $("#afficheNum").text(e + 1 + "/" + Question.length);
  $("#file").attr("value", conter + 1);
};
qSuivante = () => {
  $("#suivant").click((e) => {
    // $("#suivant").attr("disabled", "disabled");
    if (conter >= 0 && conter < Question.length - 1) {
      conter++;
    }
    if (conter == Question.length - 1) {
      $("#suivant").css("display", "none");
      $("#resultat").css("display", "block");
    }
    $("#precedent").css("display", "block");
    $(".questions").html(Question[conter]);
    recupValue();
    bar(conter);
    e.preventDefault();
  });
};
qPrecedente = () => {
  $("#precedent").click((e) => {
    if (conter > 0) {
      conter--;
    }
    if (conter == 0) {
      $("#precedent").css("display", "none");
    }
    $(".questions").html(Question[conter]);
    recupValue();
    bar(conter);
    e.preventDefault();
  });
};
recupValue = () => {
  $(".questions div input").click(() => {
    $("#suivant").removeAttr("disabled");
    if ($(".questions div input").length === 1) {
      reponces.splice(conter, 1, $(".questions div input").val());
    } else {
      for (key in $(".questions div input")) {
        if ($(".questions div input")[key].checked == true) {
          reponces.splice(conter, 1, $(".questions div input")[key].value);
        }
      }
    }
  });
};
$("#resultat").click((e) => {
  e.preventDefault();
  $(".main__questionnaire").css("display", "none");
  $(".main__Resultat").css("display", "block");
  triReponces();
  trifacteur();
  wayeh();
  $("#repeter").css("display", "block");
});
$("#repeter").click(() => {
  $(".main__questionnaire").css("display", "block");
  $(".main__Resultat").css("display", "none");
  facteurs = {
    facteurPronostique: [],
    facteurMineur: [],
    facteurMajeur: [],
    tabSymptom: [],
  };
  resultats = {
    resultatPronostique: 0,
    resultatMineur: 0,
    resultatMajeur: 0,
    symptome: 0,
  };
  conter = 0;
  reponces = [];
  val = 1;
  $(".questions").html(Question[conter]);
  $("#resultat").css("display", "none");
  $("#precedent").css("display", "none");
  $("#suivant").css("display", "block");
  bar(0);
  recupValue();
});

let facteurs = {
  facteurPronostique: [],
  facteurMineur: [],
  facteurMajeur: [],
  tabSymptom: [],
};
let resultats = {
  resultatPronostique: 0,
  resultatMineur: 0,
  resultatMajeur: 0,
  symptome: 0,
};
$("#affichageResult");

triReponces = () => {
  for (reponce in reponces) {
    if (reponce == 1) {
      facteurs.facteurMineur.push(reponces[reponce]);
      facteurs.facteurMajeur.push(reponces[reponce]);
    } else if (reponce >= 11 && reponce <= 21) {
      facteurs.facteurPronostique.push(reponces[reponce]);
    } else if (reponce == 7 || reponce == 8) {
      facteurs.facteurMajeur.push(reponces[reponce]);
    } else if (reponce == 6 || reponce == 9) {
      facteurs.facteurMineur.push(reponces[reponce]);
    }
    if (reponce >= 0 && reponce <= 9) {
      facteurs.tabSymptom.push(reponces[reponce]);
    }
  }
};
trifacteur = () => {
  for (facteur in facteurs.facteurPronostique) {
    if (facteurs.facteurPronostique[facteur] == "Oui") {
      resultats.resultatPronostique++;
    }
  }
  for (facteur in facteurs.facteurMineur) {
    if (
      facteurs.facteurMineur[facteur] >= 39.7 ||
      facteurs.facteurMineur[facteur] == "Oui" ||
      facteurs.facteurMineur[facteur] == "Fatigué" ||
      facteurs.facteurMineur[facteur] == "Très fatigué"
    ) {
      resultats.resultatMineur++;
    }
  }
  for (facteur in facteurs.facteurMajeur) {
    if (
      facteurs.facteurMajeur[facteur] <= 35.4 ||
      facteurs.facteurMajeur[facteur] == "Oui"
    ) {
      resultats.resultatMajeur++;
    }
  }
  for (facteur in facteurs.tabSymptom) {
    if (facteurs.tabSymptom[facteur] == "Oui") {
      resultats.symptome++;
    }
  }
};
let wayeh = () => {
  if (
    reponces[0] == "Oui" ||
    (reponces[2] == "Oui" && reponces[4] == "Oui") ||
    (reponces[2] == "Oui" && reponces[3] == "Oui") ||
    (reponces[0] == "Oui" && reponces[5] == "Oui")
  ) {
    ///Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
    if (resultats.resultatPronostique == 0 && resultats.resultatMajeur == 0) {
      ////Tout patient sans facteur pronostique :
      if (resultats.resultatMineur == 0 && reponces[10] < 50) {
        ////Sans facteur de gravité & <50 ans :
        $("#affichageResult").html(tabresult.sans);
      } else if (
        //////Sans facteur de gravité & 50-69 ans, ou avec au moins un facteur de gravité mineur :
        resultats.resultatMineur >= 1 &&
        reponces[10] >= 50 &&
        reponces[10] <= 69
      ) {
        $("#affichageResult").html(tabresult.resultat3);
      }
    }
  }
  if (
    reponces[0] == "Oui" ||
    (reponces[2] == "Oui" && reponces[4] == "Oui") ||
    (reponces[2] == "Oui" && reponces[3] == "Oui") ||
    (reponces[0] == "Oui" && reponces[5] == "Oui") ||
    (reponces[0] == "Oui" && reponces[2] == "Oui")
  ) {
    ///////Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée (et)avec fievre et toux
    if (resultats.resultatPronostique >= 1) {
      if (resultats.resultatMajeur == 0 && resultats.resultatMineur == 1) {
        ///Aucun facteur de gravité ||Un seul facteur de gravité mineur  -----a regrouper 2-----
        $("#affichageResult").html(tabresult.resultat3);
      } else if (
        resultats.resultatMajeur == 0 &&
        resultats.resultatMineur >= 2
      ) {
        ///// Au moins deux facteurs de gravité mineurs (((((((((((a regrouper1)))))))))))
        $("#affichageResult").html(tabresult.resultat4);
      }
    } else if (
      resultats.resultatPronostique <= 0 &&
      resultats.resultatMajeur > 0
    ) {
      ///Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
      $("#affichageResult").html(tabresult.resultat3);
    }
  }
  if (reponces[0] == "Oui" && reponces[2] == "Oui") {
    ///// avec fievre et toux
    if (resultats.resultatPronostique == 0) {
      ///Tout patient sans facteur pronostique :
      if (resultats.resultatMajeur == 0 && resultats.resultatMineur >= 1) {
        ///Sans facteur de gravité ou au moins 1 facteur de gravité mineur sans facteur de gravité majeur
        $("#affichageResult").html(tabresult.resultat3);
      }
    }
  }
  if (
    reponces[0] == "Oui" ||
    reponces[2] == "Oui" ||
    reponces[3] == "Oui" ||
    reponces[4] == "Oui"
  ) {
    ///Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures :
    if (resultats.resultatPronostique == 0) {
      /////Pas de facteur de gravité :
      $("#affichageResult").html(tabresult.resultat5);
    } else if (
      resultats.resultatPronostique > 0 ||
      resultats.resultatMajeur > 0 ||
      resultats.resultatMineur > 0
    ) {
      /////Au moins un facteur de gravité ou un facteur pronostique :
      $("#affichageResult").html(tabresult.resultat5);
    }
  } else if (resultats.symptome == 0) {
    //////Tout patient avec aucun symptôme :
    $("#affichageResult").html(tabresult.resultat6);
  }
  if (reponces[10] < 15) {
    ///// STOP si < 15 ans :
    $("#affichageResult").html(tabresult.ans15);
  }
};

const Question = [
  '<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question--c">Quelle est votre température corporelle ?</p> <div class="answer-inputs"><input type="number" name="Q2" id="degrés" min="34" max="42" placeholder="34 - 42"><span class="input-span">degrés</span></div>',
  '<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles. </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question"> Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question--quatre">Actuellement, comment vous vous sentez ? </p><div class="answer-inputs"><div> <input type="radio" name="Q10" id="Bien"><label for="Bien"><span>Bien</span> </label> </div><div><input type="radio" name="Q10" id="Assez bien"><label for="Assez bien"><span>Assez bien</span> </label> </div> <div> <input type="radio" name="Q10" id="Fatigué(e)">  <label for="Fatigué(e)">  <span>Fatigué(e)</span> </label>    </div>    <div>        <input type="radio" name="Q10" id="Très fatigué">      <label for="Très fatigué">      <span>Très fatigué</span> </label>  </div></div>',
  '<p class="form__question--age">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p><div  class="answer-inputs""> <input type="number" id="reponce1" placeholder="17 - 120" min="17" max="120"><span class="input-span">Age</span></div><br><br></br>',
  '<p class="form__question--poids">Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p><div  class="answer-inputs""><input type="number" id="reponce1"  min="30" max= "200" placeholder="30 - 200"><span class="input-span">Kg</span></div><br><br></br>',
  '<p class="form__question--taille">Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p> <div  class="answer-inputs""><input type="number" id="reponce1" min="100" max="260" placeholder="100 - 260"><span class="input-span">Cm</span></div><br><br></br>',
  '<p class="form__question"> Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Êtes-vous diabétique ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Avez-vous ou avez-vous eu un cancer ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Avez-vous une insuffisance rénale chronique dialysée ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Avez-vous une maladie chronique du foie ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  ' <p class="form__question--trois">Êtes-vous enceinte ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div><div><input type="radio" name="Q1" id="Homme" value ="Homme"><label for="Homme"><span>Homme</span> </label></div></div>',
  '<p class="form__question">Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  ' <p class="form__question">Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
];
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
