import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue, useAuth } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const { user } = useAuth();
    const [{ basket }, dispatch] = useStateValue();
    console.log('The user is >>> ', user);
    console.log('The basket is >>> ', basket);
    const handleAuthentication = () => {
        if (auth) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/' >
                <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />

            </Link>
            <div className='header__search'>
                <input className='search__input' type='text' />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className='header__nav'>
                <Link to={!user && '/login'}>
                    <div className='header__option' onClick={handleAuthentication}>
                        <span className='header__optionLineOne'>Hello Guest</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    {/* <span className='header__optionLineTwo'>&Orders</span> */}
                    <Link to='/orders'>
                        <span className='header__optionLineTwo'>&Orders</span>
                    </Link>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </div>
            <Link to='/checkout'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default Header
