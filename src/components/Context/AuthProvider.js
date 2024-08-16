import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase/config';
import { Spin } from 'antd';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    React.useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged((user) => {
            
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL })
                setIsLoading(false);
                navigate('/', { replace: true });
            } else {
                setIsLoading(false);
                navigate('/login',{ replace: true })
            }
        });
        // clean funtion
        return () => {
            unsubcribed();
        }
    }, [navigate])
    return (
        <AuthContext.Provider value={{user}}>
            {isLoading? <Spin /> :children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;