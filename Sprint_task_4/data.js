
var currentUserData = localStorage.getItem("currentUser");

if (currentUserData) {
	var currentUser = JSON.parse(currentUserData);
	var fullname = currentUser.name;
	var country = currentUser.country;
    var birth = currentUser.birth;

	document.getElementById("name").innerHTML = fullname;
    document.getElementById("country").innerHTML = country;
    document.getElementById("birth").innerHTML = birth;
} else {
	console.log("No currentUser data found.");
}