import { formatearDinero } from '../helpers'

import Image from 'next/image'
import useCoffe from '../hooks/useCoffe'

const Producto = ({producto}) => {
    const { nombre, precio, imagen } = producto
    const { handleSetProducto, handleChangeModal } = useCoffe()

    return (
        <div className='border p-3 flex justify-center flex-col'>
            <div className='mx-auto'>
                <Image 
                    src={`/assets/img/${imagen}.jpg`} 
                    alt={`imagen producto ${nombre}`}
                    width={200} 
                    height={300}
                />
            </div>
            <div className='p-5'>
                <h3 className='text-2xl font-bold'>{nombre}</h3>
                <p className='mt-5 font-black text-4xl text-amber-500'>
                    { formatearDinero(precio) }
                </p>
                <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 text-white text-2xl text-bold uppercase w-full p-3 mt-5'
                    onClick={() => {
                        handleSetProducto(producto)
                        handleChangeModal()
                    }}
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default Producto
