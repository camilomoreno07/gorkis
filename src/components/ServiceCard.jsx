import React from "react";

const ServiceCard = ({service}) =>{
    return(
      
        <div class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
         {/* Clickable Area  */}
         <button onClick={"/login"} class="cursor-pointer">
             <figure>
                 {/*  Image */}
                 <img src= {service.image !== null ? service.imageUrl : 'https://via.placeholder.com/400'} class="rounded-t h-72 w-full object-cover" alt = ""/>
                     <figcaption class="p-4">
                         { /*  Title */}
                         <p class="text-lg mb-4 font-bold leading-relaxed text-whie-800 dark:text-gray-300">
                         {service.title}
                         </p>
                         {/* Description */}
                         <small class="leading-5 text-gray-500 dark:text-gray-400">
                         {service.description}
                         </small>
                     </figcaption>
                 
             </figure>
            </button>
        </div>
    )
}

export default ServiceCard;