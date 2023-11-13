import React from 'react'
import './hero.css'

const Hero = () => {
    return (
        <>
            <div id='hero_section'>
                <div id='shop'>
                    <div id='section_1'>
                        <div id='box_1' className='box'>
                            <h3>Health and personal care 2</h3>
                            <img src="./../src/assets/box1_image.jpg" alt="box_1" width={'250px'} height={'340px'} />
                            <a href="#">See more</a>
                        </div>
                        <div id='box_2' className='box'>
                            <h3>Beauty picks</h3>
                            <img src="./../src/assets/box2_image.jpg" alt="box_1" width={'250px'} height={'340px'} />
                            <a href="#">See more</a>
                        </div>
                        <div id='box_3' className='box'>
                            <h3>Refresh your space</h3>
                            <img src="./../src/assets/box3_image.jpg" alt="box_1" width={'250px'} height={'340px'} />
                            <a href="#">See more</a>
                        </div>
                        <div id='box_4' className='box'>
                            <h3>Electronics</h3>
                            <img src="./../src/assets/box4_image.jpg" alt="box_1" width={'250px'} height={'340px'} />
                            <a href="#">See more</a>
                        </div>
                    </div>
                    <div id='section_2'>
                        <div id='box_5' className='box'>
                            <h3>Electronics</h3>
                            <img src="./../src/assets/box8_image.jpg" alt="box_1" width={'250px'} height={'340px'} />
                            <a href="#">See more</a>
                        </div>
                        <div id='box_6' className='box'>
                            <h3>Kid's Toys </h3>
                            <img src="./../src/assets/box7_image.jpg" alt="box_1" width={'250px'} height={'340px'} />
                            <a href="#">See more</a>
                        </div>
                        <div id='box_7' className='box'>
                            <h3>Electronics</h3>
                            <img src="./../src/assets/box4_image.jpg" alt="box_1" width={'250px'} height={'340px'} />
                            <a href="#">See more</a>
                        </div>
                        <div id='box_8' className='box'>
                            <h3>Small gifts under $20</h3>
                            <img src="./../src/assets/box9_image.jpg" alt="box_1" width={'250px'} height={'340px'} />
                            <a href="#">See more</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero
