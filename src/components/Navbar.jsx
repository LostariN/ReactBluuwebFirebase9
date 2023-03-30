import { async } from '@firebase/util'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const NavBar = () => {
    const { user, signOutUser } = useContext(UserContext)

    const handleSingOut = async () => {
        try {
            await signOutUser()
            console.log('ccerrando sesion');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            {
                user ?
                    <>
                        <Link to="/">Inicio</Link>
                        <button onClick={() => handleSingOut()}>LogOut</button>
                    </>
                    :
                    <>
                        <Link to="/login"> Login</Link>
                        <NavLink to='/register'> Registrar</NavLink>
                    </>
            }

        </div>
    )
}

export default NavBar