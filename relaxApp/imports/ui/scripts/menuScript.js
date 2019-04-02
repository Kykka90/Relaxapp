import { Template } from "meteor/templating";

//importer les templates associés
import '../templates/menu.html'
import '../templates/menustyle.css'

// Click sur accueil
Template.menu.events({
    'click .accueil': function(){
        alert("Go accueil")
    }
})

// Click sur statistiques
Template.menu.events({
    'click .stat': function(){
        alert("Go statistiques")
    }
})

// Click sur methodes
Template.menu.events({
    'click .methodes': function(){
        alert("Go méthodes")
    }
})

// Click sur parametres
Template.menu.events({
    'click .para': function(){
        alert("Go paramètres")
    }
})

// Click sur aPropos
Template.menu.events({
    'click .aPropos': function(){
        alert("Go à propos")
    }
})

// Click sur feedback
Template.menu.events({
    'click .feedback': function(){
        alert("Go feedback")
    }
})