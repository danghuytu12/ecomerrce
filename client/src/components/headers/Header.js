import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import "./header.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () => {
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')

        window.location.href = "/";
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        // <header>
        //     <div className="menu" onClick={() => setMenu(!menu)}>
        //         <img src={Menu} alt="" width="30" />
        //     </div>

        //     <div className="logo">
        //         <h1>
        //             <Link to="/">{isAdmin ? 'Admin' : 'HTu Shop'}</Link>
        //         </h1>
        //     </div>

        // <ul style={styleMenu}>
        //     <li><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li>

        //     {isAdmin && adminRouter()}

        //     {
        //         isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
        //     }

        //     <li onClick={() => setMenu(!menu)}>
        //         <img src={Close} alt="" width="30" className="menu" />
        //     </li>

        // </ul>

        // {
        //     isAdmin ? '' 
        //     :<div className="cart-icon">
        //         <span>{cart.length}</span>
        //         <Link to="/cart">
        //             <img src={Cart} alt="" width="30" />
        //         </Link>
        //     </div>
        // }

        // </header>
        <Grid xs={12} container style={{ padding: "20px", display: 'flex', alignItems: 'center' }}>
            <Grid xs={9} style={{display:"flex"}}>
                <div style={{display:"flex"}}>
                    <Link to="/">
                        {
                            isAdmin ? (
                                <h1>Admin</h1>
                            ) : (
                                <div>
                                    <img src="https://canifa.com/assets/images/logo.svg" />
                                </div>
                            )
                        }
                    </Link>
                    <ul style={styleMenu} style={{display:'flex',alignItems:'center'}}>
                        <li><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li>

                        {isAdmin && adminRouter()}

                        {
                            isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
                        }

                        <li onClick={() => setMenu(!menu)}>
                            <img src={Close} alt="" width="30" className="menu" />
                        </li>

                    </ul>
                </div>
            </Grid >
            <Grid xs={3} style={{ display: "flex" }}>
                <div
                    style={{
                        width: '250px', height: "40px", backgroundColor: "#f6f6f6", borderRadius: 20, display: 'flex',
                        alignItems: "center"
                    }}>
                    <SearchOutlinedIcon style={{ marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', marginLeft: "20px", alignItems: "center" }}>
                    <StorefrontOutlinedIcon style={{ width: "30px", height: "30px" }} />
                    <FavoriteBorderOutlinedIcon style={{ width: "30px", height: "30px", marginLeft: "10px" }} />
                    <AccountCircleOutlinedIcon style={{ width: "30px", height: "30px", marginLeft: "10px" }} />
                    {
                        isAdmin ? ''
                            : <div className="cart-icon" style={{ marginLeft: "10px" }}>
                                <span>{cart.length}</span>
                                <Link to="/cart">
                                    <img src={Cart} alt="" width="30" />
                                </Link>
                            </div>
                    }
                </div>
            </Grid>
        </Grid>
    )
}

export default Header
