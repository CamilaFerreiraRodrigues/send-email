const btn = document.getElementById('button');
const dateTime = document.getElementById('datasubs');
const dataAtual = new Date();




document.getElementById("button").onclick = function() { //when the button is clicked
  var radios = document.getElementsByName("radio-button");// get which of the input radio were chosen and store in the variable, and they were stored in an array [0, 1]

  for (var i = 0; i < radios.length; i++) { //loop
      if (radios[i].checked) {
    
      }

      if(radios[i].value === "To be fixed"){// if the value is aqual "to be fixed", then send a email to "cloud@schunk.app". Else, send a email to crm@schunk.app
        document.getElementById("email-area").value = "cloud@schunk.app"
      } else {
        document.getElementById("email-area").value = "crm@schunk.app"
      }
  }
};




document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';
   dateTime.value = dataAtual.toISOString().slice(0,16); 

   const serviceID = 'service_u9tc9ik';
   const templateID = 'template_f8er1sg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


