

//service_kf8wh9k
//template_5pdx9bc


function sendMail(){
  var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
  }
  const serviceID = "service_kf8wh9k";
  const templateID = "template_5pdx9bc";
  emailjs.send(serviceID , templateID , params).then(
      res =>{
          name: document.getElementById("name").value="";
          email: document.getElementById("email").value="";
          subject: document.getElementById("subject").value="";
          message: document.getElementById("message").value="";
          console.log(res);
          alert("Thanks For Your Feedback");
      })
      .catch((err) => alert(err));
}
