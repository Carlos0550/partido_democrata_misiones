import { useState } from 'react'
import { showNotification } from '@mantine/notifications';
import { useAppContext } from '../../../Context/AppContext';
import type { CandidateFormValues } from '../../../Types/CandidatesTypes';
import type { RegisterFormInterface } from '../../../Types/AuthenticationTypes';


function useRegisterForm(setShowLogin: React.Dispatch<React.SetStateAction<boolean>>) {
    const { 
      
     } = useAppContext()
    const [registerFormValues, setRegisterFormValues] = useState<RegisterFormInterface>({
        manager_name: '',
        manager_email: '',
        manager_password: '',
        manager_password_confirmation: '',
        register_as_admin: false
    })
    const [errores, setErrores] = useState<Partial<CandidateFormValues>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
    }

    const handleCheckboxChange = () => {
        setRegisterFormValues((prev) => ({
            ...prev,
            register_as_admin: !prev.register_as_admin
        }))
    }


    const handleVerifyFields = (): boolean => {
        const { manager_password, manager_password_confirmation } = registerFormValues;
        const error: Partial<RegisterFormInterface> = {};
      
        for (const [key, value] of Object.entries(registerFormValues)) {
            if(key === "register_as_admin") continue
          if (!value) {
            error[key as keyof RegisterFormInterface] = 'Este campo es requeridoo';
          }
        }
      
        if (manager_password !== manager_password_confirmation) {
          error.manager_password = 'Las contraseñas no coinciden';
        }
      
        if (Object.keys(error).length > 0) {
          setErrores(error); 
          showNotification({
            color: 'red',
            title: 'Error',
            message: 'Por favor, corrija los campos marcados.',
            autoClose: 5000,
            position: 'top-right',
          });
          return false;
        }
      
        setErrores({});
        return true;
      };

      const [creatingAccount, setCreatingAccount] = useState(false)
    const onFinish = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(handleVerifyFields()){
            setCreatingAccount(true)
            // const result = await createUserAccount(registerFormValues)
            // setTimeout(()=> setCreatingAccount(false), 1000)

            // if(result){
            //     setShowLogin(true)
            //     setRegisterFormValues({
            //         user_name: '',
            //         user_email: '',
            //         user_password: '',
            //         user_password_confirmation: '',
            //         register_as_admin: false
            //     })
            // }
        }
    }

  return {
    registerFormValues,
    handleChange,
    onFinish   ,
    errores,
    handleCheckboxChange,
    creatingAccount
  }
}

export default useRegisterForm
