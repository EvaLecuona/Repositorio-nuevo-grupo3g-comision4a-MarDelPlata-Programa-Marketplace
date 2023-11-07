const ref = new Firebase("myapp-eva.firebaseapp.com");

const user = {
    email: "evalecuona58@gmail.com",
    password: "1234"
};

ref.createUser(user, function(error){
    if(error){
      console.log(error.code);
    }else{
      console.log("Tu usuario se ha registrado");
    }
});

