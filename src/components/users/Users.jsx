import { useEffect, useState } from "react"
import './users.scss'
import User from './User'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Users = () => {
    const [a, setA] = useState([])

    const [users, setUsers] = useState([])
    const [mainUsers, setMainUsers] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        console.log('without any dependensi');
    })
    useEffect(() => {
        console.log('change state');
    }, [a])

    useEffect( () => {
        const fetchData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data);
            setUsers(res.data)
            setMainUsers(res.data)
        }
        fetchData()

    }, [])

    const handleSearchUser = (e) => {
        const inputValue = e.target.value.trim()
        const newUsers = mainUsers.filter(user => user.name.includes(inputValue))
        console.log(mainUsers);
        setUsers(newUsers)
    }

    return (
        <>
        <h1> مدیریت کاربران</h1> 
        <div className="users-header">
            <input type="text" className="search-user" placeholder="جستجو بر اساس نام"
            onChange={handleSearchUser}
            />
            <i className="add-user fas fa-plus text-light" onClick={() => navigate(`/adduser`)}></i>
        </div>
        <div className="table">
        {
            mainUsers.length ? (
        
                <table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>نام</th>
                            <th>نام کاربری</th>
                            <th>ایمیل</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        {users.map(user => {
                            return <User key={user.id}
                            {...user}
                            mainUsers = {mainUsers}
                            setUsers = {setUsers}
                            /> 
                        })}
                    </tbody>
                
                </table>
                
                ) : (
                    <h2>لطفا صبر کنید... </h2>
                    )
                }
                </div>
    </>
    )

}


export default Users