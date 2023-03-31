import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { formaValidate } from "../utils/formValidate"
import { erroresFirebase } from "../utils/erroresFirebase"

import FormError from "../components/FormError"
import FormInput from "../components/FormInput"
import FormTitle from "../components/FormTitle"
import FormButton from "../components/FormButton"

const Login = () => {
    const { loginUser } = useContext(UserContext)

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, setError } = useForm()

    const { required, patternEmail, minLength, maxLength, validateSpaces, validatePassRePass } = formaValidate()

    const onSubmit = async ({ email, password }) => {
        try {
            await loginUser(email, password)
            navigate('/')
        } catch (error) {
            console.log(error.code)
            const { code, message } = erroresFirebase(error.code)
            setError(code, { message })
        }
    }
    return (
        <div>

            <FormTitle text="Login" />
            <form onSubmit={handleSubmit(onSubmit)}>

                <FormInput
                    type="email" placeholder="Ingrese su email" {...register("email",
                        {
                            required,
                            pattern: patternEmail
                        })}
                    label="Ingresa tu Email"
                ></FormInput>
                <FormError error={errors.email} />

                <FormInput
                    type="password" placeholder="Ingrese Password" {...register("password", {
                        required,
                        minLength,
                        maxLength,
                        validate: validateSpaces
                    })}
                    label="Ingresa tu Password"
                > </FormInput>

                <FormError error={errors.password} />


                <FormButton text="Acceder" />
            </form>
        </div>
    )
}

export default Login