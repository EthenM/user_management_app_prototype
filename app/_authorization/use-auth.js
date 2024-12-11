import Axios from "axios";
import { useEffect, useState } from "react";

const useAuth = () => {
    // Authentication state
    const [user, setUser] = useState(null);
    const [signedIn, setSignedIn] = useState(false);

    const axios = Axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        withCredentials: true,
        withXSRFToken: true,
    })

    // Simulated API call for login
    const login = (email, password) => {
        // eventually this will check the credentials passed in with the credentials in the db

        //send the email and password off to the backend to be authenticated

        return axios.get("sanctum/csrf-cookie")
            .then(r => {
                console.log("cors stuff: ", r)

                return axios.post("api/login", {email: email, password: password})
                    .then(data => {
                        // console.log("The data: ", data)

                        //stuff be working. should be good to request the user object, push it to
                        //the session storage, and redirect the user to the dashboard.
                        axios.get('/api/user')
                            .then(response => {
                                sessionStorage.setItem('user-auth', JSON.stringify(response.data))
                                setUser(response.data)
                                setSignedIn(true)
                            })
                            .catch(err => {
                                const msg = "ERROR: fetching user: " + err;
                        
                                console.error(msg);
        
                                throw new Error(msg);
                            })
                    })
                    .catch(err => {
                        const msg = "ERROR: returning from validating credentials: " + err;
                        
                        console.error(msg);
        
                        throw new Error(msg);
        
                    })
            })
            .catch(err => {
                console.error("ERROR: " + err)
                throw err
            })
    };

    // Logout function
    const logout = () => {
        setUser(null);
        setSignedIn(false);
        sessionStorage.removeItem("user-auth")

        //send the request to logout of the system.
        axios.post('api/logout')
            .catch(err => {
                console.error("ERROR: logout: " + err)
                throw err
            })

        //bring the user back to the login page.
        location.pathname = "/login"
    };


    //check if the user object has been persisted
    useEffect(() => {
        const user = sessionStorage.getItem("user-auth");

        console.log('checking signedin status', signedIn, user)

        if (user && user != "{}") {
            setUser(JSON.parse(user))
            setSignedIn(true)

            if (location.pathname == '/login') {
                location.pathname = '/'
            }
        } else if (location.pathname != '/login') {
            //the user is not authenticated, send them back to the authentication page.
            location.pathname = "/login"
        }

    }, [signedIn])

    return {
        user,
        login,
        logout,
    };
};

export default useAuth;
