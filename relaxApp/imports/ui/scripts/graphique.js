//Import du template html correspondant (grahpique.html)
import '../templates/graphique.html';

//Création d'un helper qui va retourner le tableau créer pour sauvegarder les humeurs du début
Template.graphique.helpers ({
    graph(){
    return humeurDebut.find().fetch();
    }
  })