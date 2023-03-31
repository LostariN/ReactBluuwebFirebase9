const erroresFirebase = (code) => {

    switch (code) {
        case "auth/email-already-in-use":
            return {
                code: "email",
                message: "Usuario ya registrado"
            }
        case "auth/invalid-email":
            return {
                code: "email",
                message: "Formato del Email no valido"
            }
        case "auth/wrong-password":
            return {
                code: "password",
                message: "Password incorrecta"
            }
        case "auth/user-not-found":
            return {
                code: "password",
                message: "Usuario no esta registrado"
            }
        default:
            return {
                code: "email",
                message: "Ocurrio un error inesperado en el server"
            }
    }
}
export {
    erroresFirebase
}