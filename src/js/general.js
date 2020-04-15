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

var Question = [
  //1/////
  {
    question:
      '<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p>',
    /// oui . non /////
    rep:
      ' <input type="radio" id="form__choice" name="question" value="Oui"><label for="oui">Oui</label> <br> <input type="radio" id="form__choice" name="question" value="Non"><label for="non">Non</label><br><br></br>',
  },

  /////2 /////
  {
    question:
      '<p class="form__question">Quelle est votre température corporelle ?</p>',
    rep:
      ///// 1 reponce /////
      '<input type="number" id="reponce1" placeholder="34 - 42" min="34" max="42"> <label>°c</label><br><br>',
  },
  //////3/////
  {
    question:
      '<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p>',
    /// oui . non /////
    rep:
      ' <input type="radio" id="form__choice" name="question"><label for="oui">Oui</label> <br> <input type="radio" id="form__choice" name="question"><label for="non">Non</label><br><br></br>',
  },

  /////4/////
  {
    question:
      '<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ? </p>',
    /// oui . non /////
    rep:
      ' <input type="radio" id="form__choice" name="question"><label for="oui">Oui</label> <br> <input type="radio" id="form__choice" name="question"><label for="non">Non</label><br><br></br>',
  },
  //// 5 ./////
  {
    question:
      '<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ? </p>',
    /// oui . non /////
    rep:
      ' <input type="radio" id="form__choice" name="question"><label for="oui">Oui</label> <br> <input type="radio" id="form__choice" name="question"><label for="non">Non</label><br><br></br>',
  },
  //////6/////
  {
    question:
      '<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles. </p>',
    /// oui . non /////
    rep:
      ' <input type="radio" id="form__choice" name="question"><label for="oui">Oui</label> <br> <input type="radio" id="form__choice" name="question"><label for="non">Non</label><br><br></br>',
  },
  /////7//////
  {
    question:
      '<p class="form__question">Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ? </p>',
    /// oui . non /////
    rep:
      ' <input type="radio" id="form__choice" name="question"><label for="oui">Oui</label> <br> <input type="radio" id="form__choice" name="question"><label for="non">Non</label><br><br></br>',
  },
  //////8/////
  {
    question:
      '<p class="form__question">Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? </p>',
    /// oui . non /////
    rep:
      ' <input type="radio" id="form__choice" name="question"><label for="oui">Oui</label> <br> <input type="radio" id="form__choice" name="question"><label for="non">Non</label><br><br></br>',
  },
  //////9/////
  {
    question:
      '<p class="form__question"> Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ? </p>',
    /// oui . non /////
    rep:
      ' <input type="radio" id="form__choice" name="question"><label for="oui">Oui</label> <br> <input type="radio" id="form__choice" name="question"><label for="non">Non</label><br><br></br>',
  },
  ///////10////
  {
    question:
      '<p class="form__question">Actuellement, comment vous vous sentez ? </p>',
    rep:
      //// 4reponce////
      ' <input type="radio" id="form__choice" name="question"><label for="oui">Bien</label><input type="radio" id="form__choice" name="question"><label for="non"> Assez bien</label><input type="radio" id="form__choice" name="question"><label for="oui">Fatigué(e) </label><input type="radio" id="form__choice" name="question"><label for="non"> Très fatigué(e)</label><br><br></br>',
  },

  // {
  //   question:
  //     '<p class="form__question">Actuellement, comment vous vous sentez ? </p>',
  //   rep:
  //     //// 4reponce////
  //     ' <input type="radio" id="form__choice" name="question"><label for="oui">test</label><input type="radio" id="form__choice" name="question"><label for="non">test</label><input type="radio" id="form__choice" name="question"><label for="oui">test</label><input type="radio" id="form__choice" name="question"><label for="non">test</label><br><br></br>',
  // },
  // {
  //   question:
  //     '<p class="form__question">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p>',
  //   rep:
  //     ///// 1 reponce /////
  //     '<input type="number" name="question2" placeholder="34 - 42" min="34" max="42"> <label>°c</label><br><br>',
  // },
];
