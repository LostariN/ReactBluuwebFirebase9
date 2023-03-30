import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { erroresFirebase } from "../utils/erroresFirebase"
import { formaValidate } from '../utils/formValidate'


import FormError from '../components/FormError'
import { FormInput } from "../components/FormInput"


const Register = () => {
    const { registerUser } = useContext(UserContext)

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, getValues, setError } = useForm()

    const { required, patternEmail, minLength, maxLength, validateSpaces, validatePassRePass } = formaValidate()

    const onSubmit = async ({ email, password }) => {
        try {
            await registerUser(email, password)
            navigate('/')
        } catch (error) {
            console.log(error.code)
            setError("firebase", {
                message: erroresFirebase(error.code)
            })
        }
    }
    return (
        <>
            <h2>Register</h2>
            <FormError error={errors.firebase} />
            <form onSubmit={handleSubmit(onSubmit)}>

                <FormInput
                    type="email" placeholder="Ingrese su email" {...register("email",
                        {
                            required,
                            pattern: patternEmail
                        })}
                ></FormInput>
                <FormError error={errors.email} />

                <FormInput
                    type="password" placeholder="Ingrese Password" {...register("password", {
                        required,
                        minLength,
                        maxLength,
                        validate: validateSpaces
                    })}
                > </FormInput>

                <FormError error={errors.password} />
                <FormInput
                    type="password" {...register("repassword", {
                        minLength,
                        maxLength,
                        validate: validatePassRePass(getValues)
                    }
                    )} ></FormInput>
                <FormError error={errors.repassword} />

                <button type="submit">Registar</button>
            </form>
        </>
    )
}
// El método trim() en JavaScript devuelve una copia del string original con los espacios en blanco eliminados al principio y al final del string.El operador ! actúa como un operador lógico NOT, que invierte el valor booleano del resultado.

//     Entonces, si v es un string y se llama a !v.trim(), el resultado será un valor booleano true si v está vacío o si sólo contiene espacios en blanco al principio y al final del string, y false en cualquier otro caso.Esto se debe a que trim() devolverá una cadena vacía si el string original sólo contiene espacios en blanco al principio y al final, y una cadena no vacía en cualquier otro caso.Al aplicar el operador lógico NOT a la cadena resultante, se obtiene un valor booleano que indica si el string original estaba vacío o no.

export default Register