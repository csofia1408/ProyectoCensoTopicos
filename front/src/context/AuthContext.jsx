    // AuthContext.jsx
    import { createContext, useContext, useState } from 'react';
    import PropTypes from 'prop-types';

    const AuthContext = createContext();

    const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);

    const login = (token) => {
        setAccessToken(token);
    };

    const logout = () => {
        setAccessToken(null);
    };

    return (
        <AuthContext.Provider value={{ accessToken, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
    };

    AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
    };

    const useAuth = () => {
    return useContext(AuthContext);
    };

    export { AuthProvider, useAuth };
