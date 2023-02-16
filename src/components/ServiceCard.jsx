import React from "react";

const ServiceCard = ({service}) =>{
    return(
        <div className="">
            <div>
                <p>{service.title} </p>
            </div>
            <div>
                <img src={service.imageUrl !== null ? service.imageUrl : 'https://via.placeholder.com/400'} alt={service.title}/>
            </div>
            <div>
                <span>
                    {service.description}
                </span>
                <h3>
                    {service.rate}
                </h3>
            </div>
        </div>
    )
}

export default ServiceCard;