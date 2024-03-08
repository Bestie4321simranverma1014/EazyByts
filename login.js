class user {
  userName;
  password;

  constructor(userName, password) {
    this.userName = userName;
    this.password = password;

  }
}

var users = [
  new user("7070399092", "12345"),
  new user("simran", "12345"),
  new user("Juhi", "12345"),
  new user("Richa", "12345"),
  new user("Harshit", "12345"),
  new user("Priyal", "12345"),
];

var signIn = document.querySelector("#sign-in");
var signInAsVisitor = document.querySelector("#sign-in-as-visitor");

signIn.addEventListener("click", () => {
  const email = document.querySelector("#email-or-phone").value;
  const password = document.querySelector("#password").value;

  localStorage.setItem("email", email);

  if (email && password) {
    if (isValidLogin(email, password)) {
      window.open("/views/mainPage.html", "_self");
    } else {
      alert("email or password incorrect");
    }
  } else {
    alert("Please provide correct email and password");
  }
});

function isValidLogin(email, password) {
  return users.some(
    (user) => user.userName === email && user.password === password
  );
}

signInAsVisitor.addEventListener("click", () => {
});
