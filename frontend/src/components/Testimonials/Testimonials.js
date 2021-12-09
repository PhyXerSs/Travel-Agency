import React, { useEffect } from 'react'
import './Testimonials.css'
import profile1 from '../../assets/profile1.jpg'
import ScrollReveal from 'scrollreveal'
function Testimonials() {
    const data = [
        {
            avatar_image: profile1,
            name: "Tom Tommy",
            comment:"Consectetur adipiscing elit. Vivamus varius erat in gravida bibendum. Vestibulum eu dictum eros.",
            position:"Front-End Developer"
        },
        {
            avatar_image: profile1,
            name: "Tom Tommy",
            comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu dictum eros.",
            position:"Front-End Developer"
        },
        {
            avatar_image: profile1,
            name: "Tom Tommy",
            comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius erat in gravida.",
            position:"Front-End Developer"
        },
    ]
    const slideFromLeft = {
        
        distance: '150%',
        origin: 'left',
        duration: 2000,
        opacity: '0',
        opacity: null
    };

    useEffect(()=>{
        ScrollReveal().reveal('.testimonials',slideFromLeft)
    },[])
    return (
        <div className="testimonials" id="testimonials">
            <h2>Comments</h2>
            <div className="comments-container">
                {
                    data.map((item,key)=>(
                        <div className="comment">
                            <p>{item.comment}</p>
                            <div className="profile">
                                <img src={item.avatar_image}/>
                                <div className="name-position">
                                    <b>{item.name}</b>
                                    <p>{item.position}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials
