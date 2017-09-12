var AjaxRequest = require('./services/ajax_request');
var AnimalsView = require('./views/animals_view.js');

function app(){
  var animalsData = new AjaxRequest('http://localhost:3000/api/animals');
  var animalsView = new AnimalsView(animalsData);
  animalsData.get(animalsView.render);

  var form = document.getElementById('animal-input');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("Test");
  })
}

window.addEventListener('load', app);