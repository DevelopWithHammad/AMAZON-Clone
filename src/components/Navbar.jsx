import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
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

                {/* navbar box-4  */}
                <div id='box-4' className='border'>
                    <img src="./../src/assets/USA_flag.png" alt="USA_flag" height={'20px'} width={'20px'} />
                    <h5>EN</h5>
                </div>

                {/* navbar box-5 */}
                <div id='box-5' className='border'>
                    <p>Hello, sign in</p>
                    <h5>Accounts & Lists</h5>
                </div>

                {/* navbar box-6 */}
                <div id='box-6' className='border'>
                    <p>Returns</p>
                    <h5>& Orders</h5>
                </div>
                
                {/* navbar box-7 */}
                <div id='box-7' className='border'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z" fill="rgba(255,255,255,1)"></path></svg>
                <p>Cart</p>
                </div>


            </div>

    )
}

export default Navbar

