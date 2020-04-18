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
      '<input type="number" id="reponce1" placeholder="34 - 42" min="34" max="42"> <label>°c</label><br><br>',
    age:
      '<input type="number" id="reponce1" name="question11" placeholder="15 - 110" min="15" max="110"><label>age</label><br><br></br>',
    poids:
      ' <input type="number" id="reponce1" name="question12" placeholder="20 - 250" min="20" max="250"><label>kg</label><br><br></br>',
    taille:
      '<input type="number" id="reponce1" placeholder="80 - 250" min="80" max="250"> <label>cm</label><br><br></br>',
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
