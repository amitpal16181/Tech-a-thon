function preventFormSubmit(){
    var forms = document.querySelectorAll('form');
    for (var i=0;i<forms.length;i++){
      forms[i].addEventListener('submit', function(event){
        event.preventDefault();
      });
    }
  }
window.addEventListener('load',preventFormSubmit);

function handleFormSubmit(formObject){
  // Processing form data
  google.script.run.processForm(formObject);
  alert('Your record has been submitted. Thank You!');
  document.getElementById("valoRegistrationForm").reset();
}