document.getElementById("licForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;

  if (mobile.length !== 10) {
    alert("Mobile number must be 10 digits");
    return;
  }

  alert(
    "Application Submitted Successfully!\n\n" +
    "Name: " + name + "\n" +
    "Mobile: " + mobile
  );

  this.reset();
});
