function addUser() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;
    let country = document.getElementById('country').value;
    let birth = document.getElementById('birth').value; 
    const user = {
        "email": email,
        "password": password,
        "name": name,
        "country": country,
        "birth": birth
    };
    if (name.trim() == "" || password.trim() == "" || email.trim() == "") {
      document.getElementById("message").innerHTML = "Please fill in all fields.";
      return;
    }
   
  var existingData = localStorage.getItem(email);
	if (existingData) {
		document.getElementById("message").innerHTML = "Such email already exists.";
		return;
	}
  localStorage.setItem(email, JSON.stringify(user));
  window.location.href = "login.html";
  email= '';
  password= '';
  name= '';
  country= '';
  birth= ''; 

}

function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    var userData = localStorage.getItem(email);
	  if (!userData) {
		document.getElementById("message").innerHTML = "Username does not exist.";
		return;
  	} else{
      window.location.href = "Sprint_task_2.html";
      document.getElementById("email").innerHTML = email;
      localStorage.setItem("currentUser", userData);
    }

	var parsedData = JSON.parse(userData);
	if (parsedData.password != password) {
		document.getElementById("message").innerHTML = "Incorrect password.";
		return;
	}    
    email= '';
    password= '';
  }


