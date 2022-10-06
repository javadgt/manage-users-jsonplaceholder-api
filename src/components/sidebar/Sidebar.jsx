import './sidebar.scss'
import userProfile from '../../image/user.png'
import { useDashbordContext } from "../../context/DashbordContext";
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const {sidebarIsOpen, ToggleSidebar} = useDashbordContext()
    
    return (
        <>
        <div className={`sidebar ${sidebarIsOpen === true ? 'active' : ''}`}>

            <div className="user-profile">
                <img src={userProfile} alt="user profile" />
            </div>
            <ul>
                 
                <li><NavLink to={'/users'} className={`link ${({isActive}) => isActive === true ? 'active' : ''}`} onClick={ToggleSidebar}>کاربران</NavLink></li>
                <li><NavLink to={'/adduser'} className={`link ${({isActive}) => isActive === true ? 'active' : ''}`} onClick={ToggleSidebar}>افزودن کاربر جدید</NavLink></li>
                
            </ul>

        </div>
        
        <div className={`sidebar-overlay ${sidebarIsOpen === true ? 'active' : ''}`}
        onClick={ToggleSidebar}
        ></div>
        
        </>
    )
}

export default Sidebar