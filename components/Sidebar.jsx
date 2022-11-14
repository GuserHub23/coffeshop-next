import Image from "next/image"
import { useState } from "react"
import useCoffe from "../hooks/useCoffe"
import Categoria from "./Categoria"


const Sidebar = () => {
    
    const { categorias, handleSetMenu, menu } = useCoffe()

    return (
        <>
            <Image 
                width={135} 
                height={135} 
                src='/assets/img/logo.svg' 
                alt='imagen logotipo'
                className='m-auto my-8 md:my-0'
            />
            <div>
            <button 
                className='md:hidden gap-5 p-2 mt-5 ml-10 bg-gray-100 flex text-center text-black border rounded-sm'
                type='button'
                onClick={() => handleSetMenu()}
            >
                {
                    menu ? (
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>

                    ) : (

                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                            />
                        </svg>
                    )
                }
                <p className='texl-xl'>CATEGORÍAS</p>
            </button>
            </div>
            <nav className={`mt-5 ${ menu ? 'flex flex-col' : 'hidden'} md:flex md:flex-col`}>
                {
                    categorias.map(categoria => (
                        <Categoria 
                            key={categoria.id}
                            categoria={categoria}
                        />
                    ))
                }
            </nav>
        </>
    )
}

export default Sidebar
