import '../client/main.html';
import '../both/collections';
import '../imports/ui/pageMenu.js'

//Imports liés au FlowRouter
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './startup/router'
if (Meteor.isDevelopment) {
    window.FlowRouter = FlowRouter;
}
