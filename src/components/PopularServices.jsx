import React from 'react'

const PopularServices = () => {
    const posts = [
    {
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        title:  "5 Easy Tips That Will Make Your Latte Art Flourish",
        description: "Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!"
    },
    {
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        title:  "papead",
        description: "Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!"
    }
    ];

    return(
        
        <div className='mt-10 sm:mt-5 w-full bg-gray-900 rounded-t-3xl sm:rounded-none' >
            <div className='md:mx-52 py-10 flex flex-col justify-center'>
                    {/* Card Grid */}
                    <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* Card Item */}
                    {posts.map(post => {
                    return(
                        <div
                            class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
                            {/* Clickable Area  */}
                            <button onClick={"/login"} class="cursor-pointer">
                                <figure>
                                    {/*  Image */}
                                    <img src= {post.image} class="rounded-t h-72 w-full object-cover" alt = ""/>
                                        <figcaption class="p-4">
                                            { /*  Title */}
                                            <p class="text-lg mb-4 font-bold leading-relaxed text-whie-800 dark:text-gray-300">
                                            {post.title}
                                            </p>
                                            {/* Description */}
                                            <small class="leading-5 text-gray-500 dark:text-gray-400">
                                            {post.description}
                                            </small>
                                        </figcaption>
                                    
                                </figure>
                            </button>
                        </div>
                    )})}

                    </div>
            </div>
        </div>

        
    )
}

export default (PopularServices);