import { createContext, useState, useMemo } from "react";

export const LoginModeContext = createContext({
    toggleLoginMode : () => {}
})

export const useLoginMode = () =>{
    const [login, setLogin] = useState(false)


    // useMemo(() =>{
       
    // },[login])
    const loginMode = useMemo(
        () => ({
            toggleLoginMode: () => {
                setLogin(true)
                window.localStorage.setItem('login', 'true')
            }
        }),
        []
    )

    return [login, loginMode]
}