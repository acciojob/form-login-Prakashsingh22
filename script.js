function getFormvalue() {
    //Write your code here
	let firstName = document.getElementById("fname").value.trim();
    let lastName = document.getElementById("lname").value.trim();
	if (!firstName && !lastName) {
        alert("Please enter your first and last name.");
		return false;
    }else if(!firstName) {
		alert("Please enter your first name.");
        return false;
    }else if (!lastName){
		alert("Please enter your last name.");
        return false;
    }
	const fullName = `${firstName}${" "}${lastName}`;
	if(fullName){
		alert(fullName);
	}else{
		alert("Enter the full Name")
	}
	return false;
}
