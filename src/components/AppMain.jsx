import { useState, useEffect} from 'react'

// Ampliare l'esercizio precedente aggiungendo, nel form, i campi per immagine, contenuto, categoria (select), 
// tags (lista di checkbox) e uno stato per pubblicare o meno l'articolo. Utilizzare un unico oggetto per gestire tutti i dati del form.
// BONUS:
// Aggiungere uno useEffect che mostri un alert quando l’utente clicca sull’apposita checkbox per pubblicare un articolo.

export default function AppMain(){

  const initialTasks = ['Learn JS','Learn PHP','Learn Laravel','Learn Python','Learn C#','Learn C++','Learn AI'];

  const [tasks, setTasks] = useState(initialTasks);  //tasks is the array, setTasks to edit it, initialTasks initial data
  const [newTask, setNewTask] = useState('');
  const [searchText, setSearchText] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(()=>{
    const filteredTasks = tasks.filter((item,index)=> item.toLowerCase().includes(searchText.toLowerCase()));
    console.log(filteredTasks);
    setFilteredTasks(filteredTasks);
  }, [tasks, searchText]  //with [] useEffect is executed only once when the component is first mounted
  );     //useEffect needs to run every time either tasks or searchText is updated


  function addTask(e){
    e.preventDefault();  //prevent the page refresh
    if(newTask.trim() === '') {  //avoid the insertion of empty tasks.
      return; 
    }
    const newTasks_local= [
      newTask,
      ...tasks,
    ];
    console.log(`added new Task ${newTask}`);
    setTasks(newTasks_local);
    setNewTask('');  //clean input
  }

  function handleTrashTaskClick(e){
    const taskIndexToTrash = Number(e.target.getAttribute('data-index'));
    //console.log(tasks, taskIndexToTrash);
    const newTasks_local = tasks.filter((item,index)=> index !== taskIndexToTrash);
    console.log(newTasks_local);
    setTasks(newTasks_local);
  }

  function handleSearchForm(e){
    e.preventDefault();
    alert('Form sent');
  }

  function addImage(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return(
    <main>
      <div className='container'>

        {/* H1 + Search  */}
        <div className='d-flex align-items-center justify-content-between'>
          <h1>Todolist</h1>
          <form onSubmit={handleSearchForm}>
            <div className='mb-3'>
              <input 
                type="search"
                className='form-control'
                name='searchText'
                id='searchText'
                aria-describedby='searchHelper'
                placeholder='🔍 Search ...' 
                value={searchText}
                onChange={e=> setSearchText(e.target.value)}
              />
            </div>
          </form>
        </div>

        {/* Add New Task  */}
        <form onSubmit={addTask}>  {/* onSubmit event is tied to addTask funct */}
          <div className='mb-3'>
            <label htmlFor="task" className="form-label">Enter a new Task</label>
              {/* Etichetta per il campo di input, htmlFor="task" link this label to input with id="task" */}
            <div className='input-group mb-3'>
              <input type="text" 
                className='form-control'  //bootstrap style
                placeholder="Recipient's username"
                aria-label="Recipient's username"  //useful for screen readers
                aria-describedby='button-addon2'  //for screen readers, link this input to elem with id='button-addon2' (the addTask button)
                value={newTask}
                onChange={e=>setNewTask(e.target.value)}  //dinamic edit setNewTask edita il value
              />
              <button className='btn btn-outline-secondary' type='submit' id='button-addon2'>Add Task</button>
                {/* type='submit' send the form execute addTask */}
            </div>

            <small id='taskHelperId' className='form-text text-muted'>Type your new task</small>  {/* little instruction under form */}
          </div>
        </form>

        {/* All Tasks */}
        <ul className='list-group '>
          {filteredTasks.map((item,index)=>
            <li key={index} className='list-group-item d-flex justify-content-between'>
              {item}
              <button onClick={handleTrashTaskClick} data-index={index} className='btn btn-danger'>
                <i className='bi bi-trash'></i>
              </button>
            </li>
          )}
        </ul>
      </div>
    </main> 
  );
}