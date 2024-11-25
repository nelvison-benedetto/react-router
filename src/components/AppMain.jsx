//AppMain.jsx
import { useState, useEffect} from 'react'
import ManhuaCard from './ManhuaCard/ManhuaCard'

export default function AppMain(){

  // const initialTasks = ['Learn JS','Learn PHP','Learn Laravel','Learn Python','Learn C#','Learn C++','Learn AI'];
  // const [tasks, setTasks] = useState(initialTasks);  //tasks is the array, setTasks to edit it, initialTasks initial data
  // const [newTask, setNewTask] = useState('');
  // const [filteredTasks, setFilteredTasks] = useState(tasks);

  const availableTags = ['Isekai', 'Mecha', 'Slice of Life', 'Romantic Comedy', 'Fantasy'];

  const initialFormData = {  //the key names (i.e. "title") must be exactly the same in the html (i.e. <...name="title">) to link!
    title: '',
    content: '',
    price: 0,
    file: null,
    category: '',
    tags: [],
    visibility: ''
  }

  const [formData, setFormData] = useState(initialFormData)
  // const [selectedTitle, setSelectedTitle] = useState('');
  // const [selectedContent, setSelectedContent] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedTags, setSelectedTags] = useState([]);
  // const [selectedVisibility, setSelectedVisibility] = useState('');
  const [mangas, setMangas] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredMangas, setFilteredMangas] = useState(mangas);


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

  useEffect(()=>{
    const filteredMangas = mangas.filter((item,index)=> item.title.toLowerCase().trim().includes(searchText.toLowerCase().trim()));
    console.log(filteredMangas);
    setFilteredMangas(filteredMangas);
  }, [mangas, searchText]  //with [] useEffect is executed only once when the component is first mounted, now each time mangas/searchText change
  );

  function handleSearchForm(e){
    e.preventDefault();
    alert('Form sent');
  }

  function handleFormField(e){
    const {name, type, value, checked} = e.target;  //top properties of an input
    if (name === "file" && e.target.files.length > 0) {
      const fileSelect = e.target.files[0];  // Get the file object
      const fileSelectedURL = URL.createObjectURL(fileSelect);  // Create an object URL for the file
      setFormData((prev) => ({
        ...prev,
        file: fileSelect,  //at submit with form convert obl->fakepath
      }));
      setSelectedFile(fileSelectedURL);
    }
    if(name==='tags'){
      const updatedTags = checked ? [...formData.tags, value] :  formData.tags.filter(item=>item!==value);
      setFormData(prev =>({
        ...prev,
        tags: updatedTags
      }));
    }
    else if(type ==='checkbox' || type==='radio'){
      setFormData(prev =>({
        ...prev,
        [name]: checked ? value : ''
      }));
    }
    else{
      setFormData(prev=>({
        ...prev,
        [name]: value
      }))
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    const newManga = {  
      id: Date.now(),
      ...formData,
      fileObl: selectedFile  //PASS FILE OBL TO SEE IMG ON BROWSER!!submit convert automaticaaly obl->fakepath :( 
    }
    setMangas([
      newManga,
      ...mangas
    ]);
    setFormData(initialFormData)  //reset
    setSelectedFile(null);
  }

  // function handleChangeTitle(e){
  //   setSelectedTitle(e.target.value);
  // }
  // function handleChangeContent(e){
  //   setSelectedContent(e.target.value);
  // }
  // function handleChangeFile(e){
  //   console.log(e.target.files);
  //   setSelectedFile(URL.createObjectURL(e.target.files[0]));
  //   console.log(selectedFile);
  // }
  // function handleChangeCategory(e){
  //   setSelectedCategory(e.target.value);
  // }
  // function handleChangeTag(e){
  //   const tag = e.target.value;
  //   const isChecked = e.target.checked;
  //   if(isChecked){
  //     setSelectedTags((prevTags)=>[...prevTags,tag]);
  //   }
  //   else{
  //     setSelectedTags((prevTags)=>prevTags.filter((item)=> item !== tag));
  //   }
  // }
  // function handleChangeVisibility(e){
  //   setSelectedVisibility(e.target.value);
  // }
  // function createManga(e){
  //   e.preventDefault();
  //   if(selectedTitle.trim()==='' || selectedContent.trim()===''){return;}
  //   const newManga = {
  //     title: selectedTitle,
  //     content : selectedContent,
  //     file : selectedFile,
  //     category : selectedCategory,
  //     tags : selectedTags,
  //     visibility : selectedVisibility
  //   };
  //   setMangas((prevMangas) =>[...prevMangas, newManga]);
  //   setSelectedTitle('');
  //   setSelectedContent('');
  //   setSelectedFile(null);
  //   setSelectedCategory('');
  //   setSelectedTags([]);
  //   setSelectedVisibility('');
  // }

  function showMangas(){
    console.log(formData.price);
  }


  return(
    <main id='debug'>
      <div className='container py-3'>

        {/* H1 + Search  */}
        <div className='d-flex justify-content-end'>
          <form onSubmit={handleSearchForm} className=''>
              <input 
                type="search"
                className='form-control'
                name='searchText'
                id='searchText'
                aria-describedby='searchHelper'
                placeholder='🍜 Search ...' 
                value={searchText}
                onChange={e=> setSearchText(e.target.value)}
              />
          </form>
        </div>

        <form className='my-3 rounded p-4' onSubmit={handleFormSubmit}>
          <div className='row'>
            <div className='form-group col-md-6 '>
              <div className='form-group mb-3'>
                <label className='' htmlFor="inputTitleBlog">Manhua Title</label>
                <input className='form-control' type="text" id="inputTitleBlog" name="title" placeholder='Title' aria-label='Title' required value={formData.title} onChange={handleFormField}/>
              </div>
              <div className='row mb-3'>
                <div className='form-group col-md-6 '>
                  <label htmlFor="fileBlog" className='form-label'>Add photo: </label><br />
                  <label className="btn btn-DarkRose" htmlFor="fileBlog">Choose File</label> 
                  <input className="form-control d-none" type="file" id="fileBlog" name="file" required accept="image/*" onChange={handleFormField}/>  {/* accept="image/*" ACCEPT ONLY IMG! */}
                  {selectedFile && <img src={selectedFile} alt='cover image' className='img-fluid rounded'/>}
                  
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor="categorySelect">Select category</label>
                  <select className='form-select ' id='categorySelect' name='category' value={formData.category} onChange={handleFormField}>
                    <option value="None">None</option>
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
                    <label htmlFor="tags" className='form-label'>Tags: </label>
                    {availableTags.map((tag, index) => (
                      <div key={index} className='form-check col-md-6'>
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          value={tag} 
                          id={`checkBtn${tag.replace(/\s+/g,'')}`} 
                          name='tags' 
                          onChange={handleFormField} 
                          checked={formData.tags.includes(tag)}
                        />
                        <label className='form-check-label' htmlFor={`checkBtn${tag.replace(/\s+/g,'')}`}>
                          {tag}
                        </label>
                      </div>
                    ))}
                  </div>
                  
                </div>
                <div className='form-group col-md-6 '>
                  <div className='d-flex justify-content-center gap-4'>
                    <div>
                      <input className='btn-check me-1' type="radio" id='radioBtnPost' name='visibility' value="post" autoComplete='off' onChange={handleFormField} checked={formData.visibility==='post'}/>
                      <label className='btn btn-outline-DarkRose' htmlFor="radioBtnPost">Post</label>
                    </div>
                    <div>
                      <input className='btn-check me-1' type="radio" id='radioBtnArchive' name='visibility' value="archive" autoComplete='off' onChange={handleFormField} checked={formData.visibility==='archive'}/>
                      <label className='btn btn-outline-DarkRose' htmlFor="radioBtnArchive">Archive</label>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor="price" className='form-label'>Price</label>
                    <div className='input-group'>
                      <span className="input-group-text">$</span>
                      <input className='form-control' type="number" min="0" step={0.1} id='price' name='price' placeholder='100.00' aria-describedby="pricehelper" value={formData.price} onChange={handleFormField}/>
                    </div>
                    <small id="pricehelper" className="form-text text-white">Type the price of your manhua</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='form-group col-md-6'>
              <div className='form-group'>
                <label htmlFor="inputContentBlog">Content</label>
                <textarea className='form-control' type="text" rows='7' id='inputContentBlog' name='content' placeholder='Content' aria-label='Content' required value={formData.content} onChange={handleFormField}/>
              </div>
              <div className='form-group col-md-8 mt-4 mx-auto'>
                <button className='btn btn-DarkRose w-100' type='submit' id='btn_sumbit' name='submit'>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <span>SAVE</span> 
                    <i className="bi bi-cloud-arrow-up"/>
                  </span>
                </button>
                <button type="button" onClick={showMangas}>show mangas</button>
              </div>
            </div>
          </div>
        </form>

        <section className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 mb-3'>
          {mangas.map((item,index)=><ManhuaCard key={item.id} data={item}/>)}
        </section>

      </div>
    </main> 
  );
}

