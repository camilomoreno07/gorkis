import React from "react";

const ServiceCard = ({ service }) => {
    return (
        <div>
            <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src={service.imageUrl} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{service.title}</div>
                    <p class="text-gray-700 text-base">
                        {service.description}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{service.author}</span>
                </div>
            </div>
        </div>

    )
}

export default ServiceCard;