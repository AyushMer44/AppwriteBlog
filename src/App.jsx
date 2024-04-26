import './App.css'
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import authService from "./Appwrite/Auth.js";
import {login,logout} from "./Store/authSlice.js";
import {Footer, Header} from "./components/index.js";
import {Outlet} from "react-router-dom";

function App() {
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if(userData){
                    dispatch(login({userData}))
                }
                else{
                    dispatch(logout())
                }
            })
            .finally(() => setLoading(false))
    }, []);

    return !loading ? (
        <div className='min-h-screen flex flex-wrap content-between
        bg-gray-600'>
            <div className='w-full block'>
                <Header/>
                <main>
                    TODO : <Outlet/>
                </main>
                <Footer/>
            </div>
        </div>
    ) : null;
}

export default App
