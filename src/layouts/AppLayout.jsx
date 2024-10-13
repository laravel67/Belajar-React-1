import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function AppLayout(){
    return (
        <>
            <NavLink style={{ 
                marginRight:"20px", marginLeft:"20px"
             }} className={({isActive, isPending}) => isActive ? "active": isPending ? "pending":"" } to="/">Home</NavLink>|
            <NavLink style={{ 
                marginRight:"20px", marginLeft:"20px"
             }} className={({isActive, isPending}) => isActive ? "active": isPending ? "pending":"" } to="/about">About</NavLink>|
            <NavLink style={{ 
                marginRight:"20px", marginLeft:"20px"
             }} className={({isActive, isPending}) => isActive ? "active": isPending ? "pending":"" } to="/posts">Blog</NavLink>
            <br/>
            <Outlet/>
            {/* <Link to="/about">Home</Link> */}
        </>
    )
}

export default AppLayout;