
 import './main.html';
// import './main.css';
// import '../imports/ui/activerCommencer.js'

// //Importer les collections depuis le dossier both
 import '../both/collections';

import '../imports/ui/pageMenu.js'



Template.startButton.events({
  'click button'(event, instance) {
    document.getElementById('startButton').style.cssText = 'background-color:pink;';
  },
});

