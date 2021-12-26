import { useAtom } from 'jotai';
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { authAtom } from '../../atom/auth.atom';

const PrivateRoute = ({ children }) => {

    const [isAuth] = useAtom(authAtom);
    const location = useLocation()
    return isAuth
    ? children
    : <Navigate to="/signin" replace  state={{ path: location.pathname }} />;
}

export default PrivateRoute
