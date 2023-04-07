import { Input } from '../../components/Inputs'
import { DefaultButtonFull } from '../../components/Buttons'
import { memo } from "react";
import { useForm } from "react-hook-form";

export const RegistrationForm = memo(({onSubmit}) => {
    const { register, handleSubmit, watch, control, formState: { errors }, reset } = useForm({mode:"onChange"});
    const formSubmission = data => {
        onSubmit(data)
        reset()
    }
    return(
        <form onSubmit={handleSubmit(formSubmission)}>
            <Input 
                type='email' 
                nameInput='Email' 
                className='whiteInput' 
                name="email" 
                dataInput={{...register("email", { required: {value:true, message:'This is a required field'}, pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message:"Please check that your email is entered correctly"}, minLength:{value:12, message:'Length must be at least 12 characters' } })}}
                errors={errors}
            />

            <Input 
                type='password' 
                nameInput='Password' 
                className='whiteInput'
                name="password" 
                dataInput={{...register("password", { required: {value:true, message:'This is a required field'}, minLength:{value:12, message:'Length must be at least 8 characters' }  })}}
                errors={errors}
                recoveryPassword={true} 
            />
            <DefaultButtonFull text="Sign in" className='whiteButton'/>
        </form>
    )
})