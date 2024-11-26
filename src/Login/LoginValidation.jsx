function validation(values){
    let error = {}
    // const email_pattern = /^[^]
    // const password_pattern = /^[^]

    if(values.email === ""){
        error.email = "Le email incorrect"
    }
    // else if(!email_pattern.test(values.email)){
    //     error.email = "Email de passe completer"
    // }
    else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = " Mot de pass incomplete"
    }
    // else if(!password_pattern.test(values.password)){
    //     error.password = "Mot de passe completer"
    // }
    else{
        error.password = ""
    }
    return error;
}
export default validation;