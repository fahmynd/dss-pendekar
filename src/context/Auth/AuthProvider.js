import { useEffect, useState } from "react"
import AuthContext from "./AuthContext"
import { redirect, useNavigate } from "react-router-dom";
import { clearApiToken, getApiToken, setApiToken } from "../../utils/api";

const AuthProvider = (props) => {
    const [isLogged, setLogged] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        initAuth()
    },[])

    const initAuth = () => {
        const token = getToken()
        if (token) {
            setLogged(true);
        }
    }

    const handleLogin = (token) => {
        setApiToken(token)
        setLogged(true)
        navigate("/",{replace: true})
    }

    const getToken = () => {
        const token = getApiToken()
        return token;
    }

    const doLogout = () => {
        clearApiToken()
        setLogged(false)
        navigate("/",{replace: true})
    }

    const value = {
        isLogged: isLogged,
        handleLogin,
        doLogout,
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;