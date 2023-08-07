import React, {useEffect} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const ToDoList :React.FC = () => {

    const {error, limit, loading, page, todos} = useTypedSelector(state => state.todo)

    const {fetchToDo, setToDoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(()=>{
        fetchToDo(page, limit)
    },[page])



    if(loading) {
        return <h1>Идет загрузка..</h1>
    } 
    if(error) {
        return <div>{error}</div>
    }



    return (
        <div>
          {todos.map(todo => 
            <div id= {todo.id}> {todo.id}) {todo.title}</div>
         )}   
         <div
         style={{display:'flex'}}
         >
            {pages.map(p =>
                <div
                onClick={()=>setToDoPage(p)}
                    style={{ border: p===page? '2px solid green':'1px solid grey',
                    padding: 10,
                    marginTop:10
                }}
                    >
                    {p}
                </div>
            )}
         </div>
        </div>
    );
};

export default ToDoList;