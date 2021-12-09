import React from 'react'
import './Service.css'
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
function Service() {
    const data = [
        {
          icon: service1,
          title: "Get Best Prices",
          subTitle:
            "Pay through our application and save thousands and get amazing rewards.",
        },
        {
          icon: service2,
          title: "Covid Safe",
          subTitle:
            "We have all the curated hotels that have all the precaution for a covid safe environment.",
        },
        {
          icon: service3,
          title: "Flexible Payment",
          subTitle:
            " Enjoy the flexible payment through our app and get rewards on every payment.",
        },
        {
          icon: service4,
          title: "Find The Best Near You",
          subTitle:
            "Find the best hotels and places to visit near you in a single click.",
        },
      ];
    return (
        <div className="service" id="service">
            {data.map((service , key) =>(
                <div className={`service-type ${key===0 ? 'first-ele' : ''}`}>
                    <img src={service.icon} alt=""/>
                    <b>{service.title}</b>
                    <p>{service.subTitle}</p>
                </div>
            ))}
            
        </div>
    )
}

export default Service
