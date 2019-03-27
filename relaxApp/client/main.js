
import './main.html';
import './main.css';
import '../imports/ui/activerCommencer.js'

Template.startButton.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    document.getElementById('startButton').style.cssText = 'background-color:pink;';
  },
});
