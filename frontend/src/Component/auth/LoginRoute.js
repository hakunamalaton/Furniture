import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Route } from "react-router-dom"
import Spinner from "../auth/Spinner"

const LoginRoute = ({children, ...rest}) => {
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()
    
    useEffect(() => {
        const run =  () => {
            
            if(localStorage.getItem("gmail"))
                history.goBack()
            else
                setIsLoading(false)
        }
        run()
    }, [])
    return isLoading ? (
        <div className="w-min mx-auto my-20">
            <Spinner size="large" color="blue"/>
        </div>
    ) : (
        <Route {...rest} >
            { children }
        </Route>
    )
}

export default LoginRoute