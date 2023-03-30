const erroresFirebase = (code) => {

    switch (code) {
        case "auth/email-already-in-use":
            return "Usuario ya registrado"
        case "auth/invalid-email":
            return "Formato del Email no valido"
        case "auth/wrong-password":
            return "Password incorrecta"
        case "auth/user-not-found":
            return "Usuario no esta registrado"
        default:
            return "Ocurrio un error en el server"
    }
}

export {
    erroresFirebase
}