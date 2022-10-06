import { Route, Routes, Navigate} from "react-router-dom"
import Users from "../components/users/Users"
import { useDashbordContext } from "../context/DashbordContext"
import AddUser from '../components/adduser/AddUser'
const Content = () => {
    const {ToggleSidebar} = useDashbordContext()
    return (
        <>
        <div className="content">
            <i className="fas fa-bars toggle" onClick={ToggleSidebar}></i>
            
            <Routes>
                <Route path="/users" element={<Users/>}>
                    <Route path=":id"/>
                </Route>
                <Route path="/adduser" element={<AddUser/>}>
                    <Route path=":userId"/>
                </Route>
                <Route path="/" element={<Navigate to={'/users'} />}/>
            </Routes>

        </div>

        </>
    )
}


export default Content