import {Routes, Route, Navigate} from "react-router-dom"

import {Signin} from '../pages/Signin'
import {SignUp} from '../pages/SignUp'


export function AuthRoutes(){

    const user = localStorage.getItem("@notes:user");

    return(

        <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path="/register" element={<SignUp/>}/> 
            {!user && <Route path="*" element={<Navigate to="/"/>}/>}
        </Routes>
    )
}

