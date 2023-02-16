import React from 'react'
/*title, description,rate,imageUrl*/
const PopularServices = () => {
    
    return(
        
        <div>
        <div class="md:col-span-1">
        <div class="px-4 sm:px-5">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Creacion de Servicios</h3>
            <p class="mt-1 text-sm text-gray-600">
            Ten en cuenta que toda la informacion publicada aqui es de caracter publico
            </p>
        
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                    <label  class="block text-sm font-medium text-gray-700">
                    Titulo
                    </label>
                    <div class="">
                    <input type="text" name="title" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"/>
                    </div>
                </div>
                </div>

                <div>
                <label for="about" class="block text-sm font-medium text-gray-700">
                    Descripcion
                </label>
                <div class="mt-1">
                    <textarea id="description" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" ></textarea>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                    Una breve descripcion de tu servicio
                </p>
                </div>

                <div>
                <label class="block text-sm font-medium text-gray-700">
                    Imagen del servicio
                </label>
                
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-white-50 ">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">haz clic </span> o arrastra y suelta</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div> 
                </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Guardar
                </button>
            </div>
            </div>
        </form>
        </div>
    </div>
    </div>

        
    )
}

export default (PopularServices);