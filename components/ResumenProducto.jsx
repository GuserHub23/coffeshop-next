import Image from 'next/image'
import { formatearDinero } from '../helpers'
import useCoffe from '../hooks/useCoffe'

const ResumenProducto = ({producto}) => {

    const { handleEditarCantidades, handleEliminarProducto } = useCoffe()
    const { id, nombre, precio, cantidad, imagen } = producto
    return (
        <div className='flex shadow flex-col md:flex-row p-5 mb-3 gap-10 items-center'>
            <div className='md:w-2/6'>
                <Image 
                    src={`/assets/img/${imagen}.jpg`}
                    alt={`Imagen producto ${nombre}`}
                    width={300}
                    height={400}
                />
            </div>

            <div className='md:w-4/6 md:mt-5'>
                <p className='text-3xl font-bold'>{nombre}</p>
                <p className='text-xl font-bold'>Cantidad: {cantidad}</p>
                <p className='text-xl font-bold text-amber-500'>Precio: {formatearDinero(precio)}</p>
                <p className='text-xl text-gray-700'>Subtotal: {formatearDinero(precio * cantidad)}</p>
            </div>

            <div>
                <button
                    type='button'
                    className='bg-sky-600 hover:bg-sky-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full'
                    onClick={() => handleEditarCantidades(id)}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-6 h-6my-auto"
                    >
                        <path 
                            d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" 
                        />
                    </svg>

                    Editar
                </button>
                <button
                    type='button'
                    className='bg-red-600 hover:bg-red-700 px-5 py-2 flex gap-2 text-white rounded-md font-bold uppercase shadow-md w-full mt-4'
                    onClick={() => handleEliminarProducto(id)}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-6 h-6 my-auto"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" 
                        />
                    </svg>

                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default ResumenProducto
