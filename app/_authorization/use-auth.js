import { useEffect, useState } from "react";

const useAuth = () => {
    // Authentication state
    const [user, setUser] = useState(null);

    // Simulated API call for login
    const login = (email, password) => {
        // eventually this will check the credentials passed in with the credentials in the db
        
        return (() => new Promise((resolve, reject) => {
            const credentials = [
                {
                    id: 1,
                    userName: "bob",
                    email: "bob@example.com",
                    photoSource: "/images/erica.png",
                    token: "abc123",
                    password: 'password'
                }
            ]

            //check the credentials inputted with the credentials in the "db"
            const credentialsFound = credentials.find(credential =>
                credential.email == email && credential.password === password);
            

            if (credentialsFound) {
                resolve({
                    id: credentialsFound.id,
                    userName: credentialsFound.userName,
                    email: credentialsFound.email,
                    photoSource: credentialsFound.photoSource,
                    token: credentialsFound.token,
                });
            } else {
                reject("No credentials matching input found.");
            }

        }))()
            .then(user => {
                //the credentials don't match anything. return false.
                if (!user) {
                    return false;
                }

                //set the user object
                setUser(user);

                sessionStorage.setItem("user-auth", JSON.stringify(user))

                return user;
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
