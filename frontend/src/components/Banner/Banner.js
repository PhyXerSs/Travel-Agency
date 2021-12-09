import React,{useEffect} from 'react'
import './Banner.css'
import ScrollReveal from 'scrollreveal'
function Banner() {
    const slideFromTop = {
        distance: '80px',
        origin: 'top',
        opacity: '0',
        duration: 2000,
        reset:true,
    };
    useEffect(()=>{
        ScrollReveal().reveal('.banner',slideFromTop)
    },[])
    return (
        <>
            <div className="blank-block" id="home"></div>
            <div className="banner" >
                
                <div className="banner-title">
                    <h1>TRAVEL TO EXPLORE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut vulputate leo. Morbi placerat ac arcu ac dignissim. Fusce sed turpis blandit, commodo neque suscipit. </p>
                </div>
                <div className="banner-search">
                    <div className="search-container">
                        <span>Where you want to go</span>
                        <input className="search-container-input" type="text" placeholder="Search Your Location"/>
                    </div>
                    <div className="search-container">
                        <span>Check-in</span>
                        <input className="search-container-input" type="date"/>
                    </div>
                    <div className="search-container">
                        <span>Check-out</span>
                        <input className="search-container-input" type="date"/>
                    </div>
                    <div className="button-explore">
                        <span>EXPLORE NOW</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
