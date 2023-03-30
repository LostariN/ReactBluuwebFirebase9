import { forwardRef } from 'react'

const FormInput = forwardRef(({ type, name, onChange, onBlur, placeholder }, ref) => {
    return <input type={type} name={name} onChange={onChange} onBlur={onBlur} placeholder={placeholder} ref={ref}></input>
})

export {
    FormInput,

}