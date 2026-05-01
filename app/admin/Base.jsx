'use client'
import "@/public/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './assets/css/header.css'
import './assets/css/admin.css'
import Header from './Header'
import Sidebar from './Sidebar'
import { useAdminContext } from '@/context/AdminContext'
import Login from "./components/Login";

export default function Base(props) {
    const { authentication, loading } = useAdminContext()

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        authentication ? <div className='fixed'>
            <Header />
            <div className="main-body">
                <Sidebar />
                <div className="main-body-container">
                    {props.children}
                </div>
            </div>
        </div> : <Login />
    )
}