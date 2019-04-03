//Import du template html correspondant (grahpique.html)
import '../templates/graphique.html';

//Importation des fichiers nécessaire à la création du graphique avec chart.js
import '../node_modules/chart.js/dist/Chart.bundle.js';
import '../node_modules/chart.js/dist/Chart.bundle.min.js';

//Création d'un évenement pour déclencher le graphique
Template.chart.events({
  'click #leBouton': function(){
    // $('#myChart') = document.getElementById('myChart') mais pour une raison que j'ignore cette 2eme formulation donne des erreurs
var ctx = $('#myChart');
console.log(ctx);
//Création du graphique random (pas avec les infos de humeurDebut pour l'instant)
var myChart = new Chart(ctx, {
    //Type: peut aussi etre pie, bar, etc...
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
  }
});