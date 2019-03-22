import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.startButton.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    document.getElementById('startButton').style.cssText = 'background-color:pink;';
  },
});
