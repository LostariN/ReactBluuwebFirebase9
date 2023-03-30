import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebaseconfig"



const UserContext = createContext()

const UserProvider = (props) => {
    const [user, setUser] = useState(false)

    useEffect(() => {
        const unsusbribe = onAuthStateChanged(auth, user => {
            console.log(user);
            if (user) {
                const { email, photoURL, displayname, uid } = user
                setUser({ email, photoURL, displayname, uid })

            } else {
                setUser(null)
            }
        })

        return () => {
            unsusbribe()
        }
    }, [])

    const registerUser = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
    const loginUser = (email, pass) => signInWithEmailAndPassword(auth, email, pass)
    const signOutUser = () => signOut(auth)


    return (
        <UserContext.Provider value={{ user, setUser, registerUser, loginUser, signOutUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {
    UserProvider,
    UserContext
}