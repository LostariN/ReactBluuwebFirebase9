import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { formaValidate } from "../utils/formValidate"
import { erroresFirebase } from "../utils/erroresFirebase"

import FormError from "../components/FormError"
import { FormInput } from "../components/FormInput"

const Login = () => {
    const { loginUser } = useContext(UserContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        defaultValues: {
            email: "lostarin2@test.com",
            password: 123456
        }
    })

    const { required, patternEmail, minLength, maxLength, validateSpaces } = formaValidate()
    const onSubmit = async ({ email, password }) => {
        try {
            await loginUser(email, password)
            navigate('/')
        } catch (error) {
            console.log(error.code)
            setError("firebase", {
                message: erroresFirebase(error.code)
            })
        }
    }

    return (
        <div>
            <h1>loginaaa</h1>
            <FormError error={errors.firebase} />
            <form onSubmit={handleSubmit(onSubmit)}>.
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

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login