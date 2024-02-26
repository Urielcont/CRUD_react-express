import { createContext, useContext, useState } from "react";
import { registerRequest } from '../api/auth';
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

    const signup = async (values) => {
        try {
            const res = await registerRequest(values);
            console.log(res);
            setUser(res.data);
        } catch (error) {
            console.error("Error al registrar usuario:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ signup, user }}>
            {children}
        </AuthContext.Provider>
    );
}


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};