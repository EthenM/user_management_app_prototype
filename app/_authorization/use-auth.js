import { useEffect, useState } from "react";

const useAuth = () => {
    // Authentication state
    const [user, setUser] = useState(null);

    // Simulated API call for login
    const login = (userName, password) => {
        // eventually this will check the credentials passed in with the credentials in the db
        
        return (() => new Promise((resolve, reject) => {
            const credentials = [
                {
                    userName: 'bob',
                    password: 'password'
                }
            ]

            //check the credentials inputted with the credentials in the "db"
            const credentialsFound = credentials.some(credential =>
                credential.userName == userName && credential.password == password);
            

            if (credentialsFound) {
                resolve(credentialsFound);
            } else {
                reject("No credentials matching input found.");
            }

        }))()
            .then(credentialsFound => {
                //the credentials don't match anything. return false.
                if (!credentialsFound) {
                    return credentialsFound;
                }

                //is the token needed? i'm assuming so, but we'll have to see how the backend works with authentication.
                const user = { id: 1, userName, token: "abc123" };

                //set the user object
                setUser(user);

                sessionStorage.setItem("user-auth", JSON.stringify(user))

                return credentialsFound;
            })
            .catch(err => {
                const msg = "ERROR: returning from validating credentials: " + err;
                
                console.error(msg);

                throw new Error(msg);

            })
    };

    // Logout function
    const logout = () => {
        setUser(null);
        sessionStorage.removeItem("user-auth")
        //bring the user back to the login page.
        location.pathname = "/"
    };


    //check if the user object has been persisted
    useEffect(() => {
        const user = sessionStorage.getItem("user-auth");

        if (user) {
            setUser(JSON.parse(user))
        } else if (location.pathname != '/') {
            //the user is not authenticated, send them back to the authentication page.
            location.pathname = "/"
        }

    }, [])

    return {
        user,
        login,
        logout,
    };
};

export default useAuth;
