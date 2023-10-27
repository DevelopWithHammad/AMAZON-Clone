import React from 'react'
import './panel.css'

const Panel = () => {
    return (
        <div id='panel'>

            {/* panel box 1 */}
            <div id='panel_box_1' className='border'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="rgba(255,255,255,1)"></path></svg>
                <p>All</p>
            </div>

            {/* panel box 2 */}
            <div id='panel_box_2'>
               <a href="#" className='border' id='anchor_1'>Today's Deals</a>
               <a href="#" className='border' id='anchor_2'>Customer Service</a>
               <a href="#" className='border' id='anchor_3'>Registry</a>
               <a href="#" className='border' id='anchor_4'>Gift Cards</a>
               <a href="#" className='border' id='anchor_5'>Sell</a>
            </div>

        </div>
    )
}

export default Panel
