import MainMenu from "./MainMenu";

export default function AppHeader(){
    return(
        <>
          <header>
            <div className="logo">
              LOGO
            </div>
            {/* <nav>
              <a href="/">Home</a>
              <a href="/books">Books</a>
              <a href="/about">About</a>
              <a href="/contacts">Contacts</a>
            </nav> */}
            <MainMenu/>
          </header>
        </>
    );
}