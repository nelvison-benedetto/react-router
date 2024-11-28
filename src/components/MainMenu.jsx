import {Link, NavLink} from 'react-router-dom';

export default function MainMenu(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>  {/* navlink x tools di navigazione principali, Link x standart links */}
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </nav>
    );
}
