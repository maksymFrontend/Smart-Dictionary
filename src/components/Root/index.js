import {Router, Route, Link, Redirect, Switch, Routes, NavLink} from 'react-router-dom'
import { CRegistration } from '../../pages/registration'
import { CAuthorization } from '../../pages/authorization'
import { CAccount } from '../../pages/account'


export const Root = () => {
    return (
        <>  
            <Routes>
                <Route path="/authorization" element={<CAuthorization />} />
                <Route path="/registration" element={<CRegistration />} />
                <Route path="/account/*" element={<CAccount />} />
                <Route path="/" element={<CRegistration />} />
                <Route path="*" element={<div />} />
            </Routes>
        </>
    )
  }