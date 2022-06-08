import React from 'react';
import { AuthContext } from '../context/auth';

function useAuth() {
    const value = React.useContext(AuthContext);
    if (!value) {
        throw new Error("AuthContext's value is undefined.");
    }

    return value;
}

export { useAuth };
