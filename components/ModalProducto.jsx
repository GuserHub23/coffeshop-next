import Image from "next/image"
import { useEffect, useState } from "react"
import { formatearDinero } from "../helpers"
import useCoffe from "../hooks/useCoffe"

const ModalProducto = () => {
    
    const [ cantidad, setCantidad ] = useState(1)
    const [ edicion, setEdicion ] = useState(false)
    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useCoffe()

    const { nombre, imagen, precio } = producto


    useEffect(() => {
        if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
            const productoEdicion = pedido.find(pedidoState => pedidoState.id === producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }
    }, [producto, pedido])


    return (
        <>
            <div className='flex justify-end'>
                <button
                    onClick={() => handleChangeModal()}
                >
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
                </button>
            </div>

            <div className='md:flex gap-10'>
                <div className='md:w-1/3'>
                    <Image 
                        width={200}
                        height={300}
                        alt={`Imagen producto ${nombre}`}
                        src={`/assets/img/${imagen}.jpg`}
                    />
                </div>
                
                <div className='md:w-2/3'>
                    <h1 className='text-3xl font-bold mt-5'>
                        {nombre}
                    </h1>
                    <p className='mt-5 font-black text-5xl text-amber-500'>
                        {formatearDinero(precio)}
                    </p>

                    <div className='mt-5 flex gap-4'>
                        <button
                            type='button'
                            onClick={() => {
                                if (cantidad <= 1) return
                                setCantidad(cantidad - 1)
                            }}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-7 h-7"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                                />
                            </svg>
                        </button>

                        <p className='text-3xl'>{cantidad}</p>

                        <button
                            type='button'
                            onClick={() => {
                                setCantidad(cantidad + 1 )
                            }}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-7 h-7"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                                />
                            </svg>
                        </button>
                    </div>
                    
                    <button
                        type='button'
                        className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded'
                        onClick={() => handleAgregarPedido({...producto,cantidad})}
                    >
                        {edicion ? 'Guardar Cambios' : 'Añadir Pedido'}
                    </button>
                </div>
            </div>
        </>
    )
}

export default ModalProducto
