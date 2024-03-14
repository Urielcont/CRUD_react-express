import { createContext, useContext, useState } from "react";
import { registerRequest, login } from '../api/auth';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
    } 
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated]= useState(false);

    const signup = async (values) => {
        try {
            const res = await registerRequest(values);
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Error al registrar usuario:", error);
        }
    };

    const sigin = async (user) => {
        try{
            const res= await login(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        }catch(err){
            console.error(err);
        }
    };
    return (
        <AuthContext.Provider value={{ signup,sigin, user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


