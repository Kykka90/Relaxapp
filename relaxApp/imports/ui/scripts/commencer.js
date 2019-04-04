import { Template } from "meteor/templating";

//importer les templates associés
import '../templates/commencer.html'
import '../templates/commencer.css'

Template.commencer.events({
    'click .commencer': function(){
       // FlowRouter.go('pageMethode1')
       alert("Bonjour")
       
    }
})

