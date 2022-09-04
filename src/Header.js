
import React from 'react';
import "./Header.css";
import MicNoneIcon from '@mui/icons-material/MicNone';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';



const Header = () => {
    return (
        <div className='header__NavBar'>

            <img
                className='header__Logo'
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG27.png"

            />

            <div className='header__search'>

                <SearchIcon className=" searchIcon " />
                <input className=" searchbar " type="text" placeholder='search here' />
                <MicNoneIcon className=" voice " />






            </div>
            <div className='header__nav'>
                <div className='header__OptionOne'>
                    <span className='header__optionLineOne'>Hello </span>
                    <span className='header__optionLineTwo'>Guest</span>

                </div>

                <div className='header__OptionTwo'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>

                <div className='header__OptionThree'>
                    <span className='header__optionLineOne'>Special</span>
                    <span className='header__optionLineTwo'>offers</span>
                </div>


                <div className='profile_Option'>
                    < AccountCircleRoundedIcon className='profile__Option' />

                </div>



            </div>


        </div >
    )
}

export default Header 