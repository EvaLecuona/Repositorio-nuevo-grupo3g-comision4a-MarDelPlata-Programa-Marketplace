const ref = new Firebase("myapp-eva.firebaseapp.com");


const signupForm = document.getElementById('signupForm');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');


signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signupEmail.value;
  const password = signupPassword.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log('Usuario registrado: ', user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(`Error al registrarse: ${errorCode} - ${errorMessage}`);
      });
});
