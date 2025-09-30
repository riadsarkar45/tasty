import { useEffect } from "react";
import useAxiosPrivate from "../../hooks/AxiosPrivate";

const Users = () => {
    const axiosPrivate = useAxiosPrivate();
    useEffect(() => {
        axiosPrivate.get('/all-users')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    })
    return (
        <div>
            <h2>All users</h2>
        </div>
    );
};

export default Users;