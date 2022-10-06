import axios from "axios";

import swal from "sweetalert";

// addUser
export const addUser = async (data) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users' , data)
    if (res) {
        swal(`${res.data.name} با موفقیت ایجاد شد`, {
            icon: "success",
            buttons: "متوجه شدم",            
        });
    }
}

// editUser
export const editUser = async (data, userId) => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}` , data)
    if (res) {
        console.log(res);
        swal(`${res.data.name} با موفقیت ویرایش شد`, {
            icon: "success",
            buttons: "متوجه شدم",            
        });

    }
}