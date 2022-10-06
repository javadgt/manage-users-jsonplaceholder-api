import axios from "axios";
import { useNavigate } from "react-router-dom"
import swal from "sweetalert";
// import  from 'font-awesome'

const Users = ({ id, name, username, email, mainUsers, setUsers}) => {
    const navigate = useNavigate()


    const handleDeleteUser = async (id) => {
        const willDelete = await swal({
            title: "حذف کاربر",
            text: " آیا از حذف کاربر اطمینان دارید ",
            icon: "warning",
            buttons : ['بله' , 'خیر'],
            dangerMode: true,
        })
        
        if (!willDelete) {
            axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
                console.log(res);
                const newUsers = mainUsers.filter(user => user.id !== id)
                setUsers(newUsers)
                swal('حذف با موفقیت انجام شد' ,{
                    icon : 'success',
                    buttons : 'متوجه شدم'
                })
            }) 
            
        }

    }
    
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                    <i className="fas fa-edit"
                    onClick={() => navigate(`/adduser/${id}`)}
                    ></i>
                    <i className="fas fa-trash"
                    onClick={() => handleDeleteUser(id)}
                    ></i>
                </td>
            </tr>
        </>
    )

}


export default Users