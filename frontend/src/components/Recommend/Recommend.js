import { Tab, Tabs } from '@material-ui/core';
import React, { useState , useEffect } from 'react'
import Destination1 from '../../assets/Destination1.png'
import Destination2 from '../../assets/Destination2.png'
import Destination3 from '../../assets/Destination3.png'
import Destination4 from '../../assets/Destination4.png'
import Destination5 from '../../assets/Destination5.png'
import Destination6 from '../../assets/Destination6.png'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import './Recommend.css'
import ScrollReveal from 'scrollreveal'


function Recommend() {
    
    const data = [
        {
          image: Destination1,
          title: "Singapore",
          subTitle: "Singapore, officialy thr Republic of Singapore, is a",
          cost: "38,800",
          duration: "Approx 2 night trip",
        },
        {
          image: Destination2,
          title: "Thailand",
          subTitle: "Thailand is a Southeast Asia country. It's known for",
          cost: "54,200",
          duration: "Approx 2 night trip",
        },
        {
          image: Destination3,
          title: "Paris",
          subTitle: "Paris, France's capital, is a major European city and a",
          cost: "45,500",
          duration: "Approx 2 night trip",
        },
        {
          image: Destination4,
          title: "New Zealand",
          subTitle: "New Zealand is an island country in the",
          cost: "24,100",
          duration: "Approx 1 night trip",
        },
        {
          image: Destination5,
          title: "Bora Bora",
          subTitle: "Bora Bora is a small South Pacific island northwest of",
          cost: "95,400",
          duration: "Approx 2 night 2 day trip",
        },
        {
          image: Destination6,
          title: "London",
          subTitle: "London, the capital of England and the United",
          cost: "38,800",
          duration: "Approx 3 night 2 day trip",
        },
      ];
    const packages = [
        "The Weekend Break",
        "The Package Holiday",
        "The Group Tour",
        "Long Term Slow Travel",
      ];
    const slideFromBottom = {
        distance: '200px',
        origin: 'bottom',
        opacity: '0',
        duration: 2000,
        reset:true,
    };

    useEffect(()=>{
        ScrollReveal().reveal('.recommend h2',slideFromBottom );
        ScrollReveal().reveal('.packages',slideFromBottom );
        ScrollReveal().reveal('.place-container',slideFromBottom );
    },[])

    const [active, setActive] = useState(1);
    return (
        <div className="recommend" id="recommend">
            
                <h2>Recommended Destinations</h2>
            
            <div className="packages">
                <Tabs
                        className="packages-tabs"
                        value={active}
                        
                        TabIndicatorProps={{
                            style: {
                                    backgroundColor:'transparent',
                                    border:'2px solid rgb(23, 165, 246)'
                                }
                            }}
                        style={{ paddingBottom: 5 }}
                        // aria-label="disabled tabs example"
                        onChange={(event, newValue) => {
                            setActive(newValue);
                        }}
                        >
                        {packages.map((pkg,index)=>(
                            <Tab style={{ width: "25%" }}  label={pkg} />
                        ))}
                        
                </Tabs>
            </div>
            <div className="place-container">
                {data.map((place,key)=>(
                    <div className="place">
                        <img className="place-image" src={place.image} alt={place.title}/>
                        <b>{place.title}</b>
                        <p>{place.subTitle}</p>
                        
                        <div className="info">
                            <div className="info-image">
                                <AirplanemodeActiveIcon/>
                                <LocationCityIcon/>
                                <LocalDiningIcon/>
                            </div>
                            <h4>{place.cost}</h4>
                        </div>
                        <div className="distance">
                            <span>1000 Kms</span>
                            <span>{place.duration}</span>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recommend
