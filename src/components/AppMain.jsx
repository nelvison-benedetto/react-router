import { useState } from 'react'

export default function AppMain(){

  const initialTasks = [
    'Learn JS','Learn PHP','Learn Laravel','Learn Python','Learn C#','Learn C++','Learn AI'
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  
  function addTask(e){
    e.preventDefault();  //INFOPreviene il refresh della pagina
    //tasks.push(newTasks);
    if (newTask.trim() === '') {
      return; // Non aggiungere task vuote
    }
    const newTasks_local= [
      newTask,
      ...tasks,
    ];
    //e.target.reset();
    console.log("the new tasks are "+newTasks_local);
    setTasks(newTasks_local);
    setNewTask('');
  }
  function handleTrashTaskClick(e){
    const taskIndexToTrash = Number(e.target.getAttribute('data-index'));
    //console.log(tasks, taskIndexToTrash);
    const newTasks_local = tasks.filter((item,index)=> index !== taskIndexToTrash);
    console.log(newTasks_local);
    setTasks(newTasks_local);
  }

    return(
        <main>
        <h1>Todolist</h1>
        <form onSubmit={addTask}>
        <div className='mb-3'>
            <label htmlFor="task" className='form-control'></label>

            <div className='input-group mb-3'>
            <input type="text" 
                className='form-control'
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby='button-addon2'
                value={newTask}
                onChange={e=>setNewTask(e.target.value)}
            />
            <button className='btn btn-outline-secondary' type='submit' id='button-addon2'>Add Task</button>
            </div>

            <small id='taskHelperId' className='form-text text-muted'>Type your new task</small>
        </div>
        </form>

        <ul className='list-group d-flex justify-content-between'>
        {tasks.map((item,index)=>
            <li key={index} className='list-group-item'>
            {item}
            <button onClick={handleTrashTaskClick} data-index={index} className='btn btn-danger'>
                <i className='bi bi-trash'></i>
            </button>
            </li>
        )}
        </ul>
        </main> 
    );
}