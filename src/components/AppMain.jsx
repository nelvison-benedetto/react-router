import { useState, useEffect} from 'react'

export default function AppMain(){

  const initialTasks = ['Learn JS','Learn PHP','Learn Laravel','Learn Python','Learn C#','Learn C++','Learn AI'];

  const [tasks, setTasks] = useState(initialTasks);  //tasks is the array, setTasks to edit it, initialTasks initial data
  const [newTask, setNewTask] = useState('');
  const [searchText, setSearchText] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [fileUpload, setFileUpload] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

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

  function handleFileUpload(e){
    console.log(e.target.files);
    setFileUpload(URL.createObjectURL(e.target.files[0]));
  }

  function handleCategoryChange(e){
    setSelectedCategory(e.target.value);
  }




  return(
    <main id=''>
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
              < input type = "file" onChange={fileUpload}/>
              <button className='btn btn-outline-secondary' type='submit' id='button-addon2'>Add Task</button>
                {/* type='submit' send the form execute addTask */}
            </div>

            <small id='taskHelperId' className='form-text text-muted'>Type your new task</small>  {/* little instruction under form */}
          </div>
        </form>


        <form className='my-3'>
          <div className='row'>
            <div className='form-group col-md-6 '>
              <div className='form-group mb-3'>
                <label className='' htmlFor="inputTitleBlog">Title</label>
                <input className='form-control' type="text" id="inputTitleBlog" name="inputTitleBlog" placeholder='Title'/>
              </div>

              <div className='row mb-3'>
                <div className='form-group col-md-6 '>
                  <label htmlFor="fileBlog" className='form-label'>Insert the cover image</label>
                  <label className="btn btn-primary" htmlFor="fileBlog">Choose File</label> 
                  <input className="form-control d-none" type="file" id="fileBlog" onChange={handleFileUpload}/>
                  {fileUpload && <img src={fileUpload} alt='cover image' className='img-fluid rounded'/>}
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor="categorySelect">Select category</label>
                  <select className='form-select ' id='categorySelect' name='categorySelect' value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Category</option>
                    <option value="Shonen">Shonen</option>
                    <option value="Shojo">Shojo</option>
                    <option value="Seinen">Seinen</option>
                    <option value="Josei">Josei</option>
                    <option value="Kodomo">Kodomo</option>
                  </select>
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-md-6 ps-4'>
                  <div className='row'>
                    <div className='form-check col-md-6'>
                      <input className="form-check-input" type="checkbox" value="" id='checkBtnIsekai' name='checkBtnIsekai'/>
                      <label className='form-check-label' htmlFor="checkBtnIsekai">Isekai</label>
                    </div>
                    <div className='form-check col-md-6'>
                      <input className="form-check-input" type="checkbox" value="" id='checkBtnMecha' name='checkBtnMecha'/>
                      <label className='form-check-label' htmlFor="checkBtnMecha">Mecha</label>
                    </div>
                    <div className='form-check col-md-6'>
                      <input className="form-check-input" type="checkbox" value="" id='checkBtnSliceofLife' name='checkBtnSliceofLife'/>
                      <label className='form-check-label' htmlFor="checkBtnSliceofLife">Slice of Life</label>
                    </div>
                    <div className='form-check col-md-6'>
                      <input className="form-check-input" type="checkbox" value="" id='checkBtnRomanticComedy' name='checkBtnRomanticComedy'/>
                      <label className='form-check-label' htmlFor="checkBtnRomanticComedy">Romantic Comedy</label>
                    </div>
                    <div className='form-check col-md-6'>
                      <input className="form-check-input" type="checkbox" value="" id='checkBtnFantasy' name='checkBtnFantasy'/>
                      <label className='form-check-label' htmlFor="checkBtnFantasy">Fantasy</label>
                    </div>
                  </div>
                </div>
                <div className='form-group col-md-6 d-flex justify-content-center gap-4'>
                  <div>
                    <input className='btn-checks me-1' type="radio" id='radioBtnPost' name='radioPostOrArchive' value="" autoComplete='off'/>
                    <label className='btn btn-outline-primary' htmlFor="radioBtnPost">Post</label>
                  </div>
                  <div>
                    <input className='btn-checks me-1' type="radio" id='radioBtnArchive' name='radioPostOrArchive' value="" autoComplete='off'/>
                    <label className='btn btn-outline-primary' htmlFor="radioBtnArchive">Archive</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="inputContentBlog">Content</label>
              <textarea className='form-control' type="text" rows='7' id='inputContentBlog' name='inputContentBlog' placeholder='Content'/>
            </div>
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

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis impedit, illo pariatur error itaque dolorem quas delectus adipisci laborum laudantium quisquam debitis facilis id officiis quo illum consequuntur, voluptate nam distinctio ad iure omnis. Sapiente cupiditate quo id modi nihil mollitia cumque ab eos rerum nulla iusto, molestias quas similique officia vel expedita quisquam eveniet veritatis. Minus sequi aspernatur vel similique consectetur consequuntur quidem adipisci aperiam, optio labore est! Mollitia sunt culpa inventore omnis maiores corporis. Velit, id tenetur!