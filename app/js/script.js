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
  $(".questions div input").change(() => {
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
  val = 1;
  $(".questions").html(Question[conter]);
  $("#resultat").css("display", "none");
  $("#precedent").css("display", "none");
  $("#suivant").css("display", "block");
  bar(0);
  recupValue();
});

// `<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p>
//   <div class="answer-inputs">
//     <div>
//         <input type="radio" name="Q1" id="Oui" value="Oui">
//         <label for="Oui"><span>Oui</span> </label>
//     </div>
//     <div>
//         <input type="radio" name="Q1" id="Non" value="Non">
//         <label for="Non"><span>Non</span> </label>
//     </div>
//   </div>`;
