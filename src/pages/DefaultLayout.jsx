import { Outlet } from "react-router-dom";
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import AppMain from "../components/AppMain";

export default function DefaultLayout(){
    return(
      <>
        <AppHeader/>
        
            <Outlet/>
        
        <AppFooter/>
      </>
    );
}