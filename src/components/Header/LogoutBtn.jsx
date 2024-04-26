import {useDispatch} from "react-redux";
import authService from "../../Appwrite/Auth.js";
import {logout} from "../../Store/authSlice.js";

function LogoutBtn(){
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button className='inline-block px-6 py-2 duration-200
        hover:bg-blue-200'
        onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn