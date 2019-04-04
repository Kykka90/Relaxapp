import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import '../../imports/ui/templates/graphique.html';
import '../../imports/ui/templates/menu.html';
import { Template } from 'meteor/templating'

//Création de la route pour la page du graphique
FlowRouter.route('/graphique', {
    action() {
        BlazeLayout.render('chart');
    }
});

//Création de la route pour la page d'accueil
FlowRouter.route('/', {
    action() {
        BlazeLayout.render('menu');
    }
});

//Création de la route pour la première page de la méthode
FlowRouter.route('/methode1', {
    name: 'pageMethode1',
    action() {
        BlazeLayout.render('pageMethode1');
    }
});

