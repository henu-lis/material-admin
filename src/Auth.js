import { useContext, createContext, useState } from "react";
import { Navigate, useLocation } from 'react-router-dom';

const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signout(callback) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    }
}

function useProviderAuth() {
    const [user, setUser] = useState(null);

    const signin = (newUser, cb) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            cb();
        })
    };

    const signout = cb => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            cb();
        })
    };

    return {
        user,
        signin,
        signout
    };
}

const authContext = createContext();

function AuthProvider({ children }) {
    const auth = useProviderAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

function useAuth() {
    return useContext(authContext);
}

function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to='/login' state={{ from: location }} />;
    }

    return children;
}

export { fakeAuthProvider, useProviderAuth, AuthProvider, useAuth, RequireAuth };