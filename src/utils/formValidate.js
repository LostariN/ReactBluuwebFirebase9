const formaValidate = () => {
    return {
        required: {
            value: true,
            message: "field required"
        },
        patternEmail: {
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: "Email is incorrect"
        },
        minLength: {
            value: 6,
            message: "Passwword is a field required with 6 characters"
        },
        maxLength: {
            value: 6,
            message: "Max characters(6)"
        },
        validateSpaces: {
            whiteSpaces: v => {
                if (/\s+/.test(v))
                    return "Espacios en blanco"
                return true
            }
        },
        validatePassRePass(value) {
            return v => v === value || "Passwords doesnt equals"
        }
    }
}

export {
    formaValidate
}