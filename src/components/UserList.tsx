import React, {FC, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/action-creators/user';
import { useActions } from '../hooks/useActions';




const UserList: React.FC = () => {
   
    const {users, error, loading} = useTypedSelector(state=> state.user)
    // const dispatch : any = useDispatch()
    const {fetchUsers} = useActions()

    useEffect(()=>{
        fetchUsers()
    }, [])

    if(loading) {
        return <h1>Идет загрузка..</h1>
    } 
    if(error) {
        return <div>{error}</div>
    }

    return (
       <div>
         {users.map(user => 
            <div id= {user.id}>{user.id}) {user.name}</div>
         )}
       </div>
    );
};

export default UserList;