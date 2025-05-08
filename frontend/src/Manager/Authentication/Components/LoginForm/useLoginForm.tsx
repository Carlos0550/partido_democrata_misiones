import { useState } from 'react'
import { showNotification } from '@mantine/notifications';

import { useAppContext } from '../../../Context/AppContext';
import type { RegisterFormInterface } from '../../../Types/AuthenticationTypes';


function useLoginForm() {

    const {
      
    } = useAppContext()
    const [loginFormValues, setloginFormValues] = useState<Partial<RegisterFormInterface>>({
        manager_email: '',
        manager_password: '',
    })
    const [errores, setErrores] = useState<Partial<RegisterFormInterface>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setloginFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
    }

    const handleCheckboxChange = () => {
        setloginFormValues((prev) => ({
            ...prev,
            register_as_admin: !prev.register_as_admin
        }))
    }


    const handleVerifyFields = (): boolean => {
        const error: Partial<RegisterFormValues> = {};
      
        for (const [key, value] of Object.entries(loginFormValues)) {
            if(key === "register_as_admin") continue
          if (!value) {
            error[key as keyof RegisterFormInterface] = 'Este campo es requeridoo';
          }
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

      const [logginAccount, setlogginAccount] = useState(false)
    const onFinish = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // if(handleVerifyFields()){
        //     setlogginAccount(true)
        //     await loginUser(loginFormValues)
        //     setlogginAccount(false)
        // }
    }

  return {
    loginFormValues,
    handleChange,
    onFinish   ,
    errores,
    handleCheckboxChange,
    logginAccount
  }
}

export default useLoginForm
