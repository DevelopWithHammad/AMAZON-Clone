import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <header>
            <div id='navbar'>
                {/* navbar box-1  */}
                <div id='box-1' className='border'>
                    <div id='logo'></div>
                </div>

                {/* navbar box-2  */}
                <div id='box-2' className='border'>
                    <p className='location-para-1'>Deliver to</p>
                    <div className='location_icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "1em", width: "1em ", fill: "#ffffff" }} viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        <p className='location-para-2'> Pakistan</p>
                    </div>
                </div>

                {/* navbar box-3  */}
                <div id='box-3'>
                    <select className='select_input'>
                        <option>All</option>
                        <option>All Departments</option>
                        <option>Arts & Crafts</option>
                        <option>Automotive</option>
                        <option>Baby</option>
                        <option>Beauty & Personal Care</option>
                        <option>Books</option>
                        <option>Boys' fashion</option>
                        <option>Computers</option>
                        <option>Deals</option>
                        <option>Digital Music</option>
                        <option>Electronics</option>
                        <option>Girls' Fashion</option>
                        <option>Health & Household</option>
                        <option>Home & Kitchen</option>
                        <option>Industrial & Scientific</option>
                        <option>Kindle Store</option>
                        <option>Luggage</option>
                        <option>Mens' Fashion</option>
                        <option>Movies & TV</option>
                        <option>Music, CDs & Vinyl</option>
                        <option>Pet supplies</option>
                        <option>Prime Video</option>
                        <option>Software</option>
                        <option>Sports & Outdoors</option>
                        <option>Tool & Home Improvements</option>
                        <option>Toys & Games</option>
                        <option>Tool & Home Improvements</option>
                        <option>Video Games</option>
                        <option>Women's Fashion</option>
                    </select>
                    <input type="text" placeholder='Search Amazon' className='search_input' />
                    <div className='search_icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "1em", width: "1em", fill: "#333333" }} viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    </div>
                </div>


            </div>

        </header>
    )
}

export default Navbar

