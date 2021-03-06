import {Template} from 'meteor/templating';

//Importer le template associé et le CSS
import '../templates/slider.html';
import '../templates/slider.css';

Template.slider.events({

    //Code pour définir ce qu'il se passe quand le bouton 'suivant' est cliqué
    'click #sliderNextButton'(event, instance) {
      //Insérer la valeur du slider + date dans la collection humeurDebut
      humeurDebut.insert({
        value: document.getElementById("rangeSlider").value,
        createdAt: new Date()
      })
      //Simple console log de la valeur du slider pour voir que ça marche
      console.log(document.getElementById("rangeSlider").value);
    },

    //Défini ce qu'il se passe quand le slider change de valeur
    'change #rangeSlider'(event, instance) {
      // Défini le innerHTML du span pour afficher la valeur choisie
      document.getElementById("sliderValueField").innerHTML= event.target.value;
      // Change la classe des 2 bouttons pour les afficher
      document.getElementById("sliderNextButton").setAttribute('class', 'montrer');
      document.getElementById("graphique").setAttribute('class', 'montrer');
    }
  })