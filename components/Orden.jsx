import Image from "next/image"

import { formatearDinero } from "../helpers"

import axios from "axios"

import { toast } from 'react-toastify'
import { useRouter } from "next/router"


const Orden = ({orden}) => {

    const router = useRouter()
    const { id, nombre, total, pedido } = orden

    const completarOrden = async () => {
        try {
            await axios.post(`/api/ordenes/${id}`)
            toast.success('Orden Lista')
        } catch (error) {
            toast.error('Hubo un error')
        }
    }

    const eliminarOrden = async () => {
        try {
            await axios.delete(`/api/todas_las_ordenes/${id}`)
            toast.success('Orden Eliminada', {
                theme: 'dark'
            })
        } catch (error) {
            toast.error('Hubo un error', {
                theme: 'dark'
            })
        }
    }
    return (
        <div className='border p-10 space-y-5'>
            <h3 className='text-2xl font-bold'>Orden: {id}</h3>
            <p className='text-lg my-10 font-bold'>Cliente: {nombre}</p>
            
            <div>
                {
                    pedido.map(plato => (
                        <div 
                            key={plato.id}
                            className='py-3 border-b last-of-type:border-0 flex flex-col md:flex-row justify-center md:justify-start items-center'
                        >
                            <div className='w-32'>
                                <Image
                                    width={400}
                                    height={500}
                                    src={`/assets/img/${plato.imagen}.jpg`}
                                    alt={`Imagen plato ${plato.nombre}`}
                                />
                            </div>
                            
                            <div className='p-5 space-y-2'>
                                <h4 className='text-xl font-bold text-amber-500'>{plato.nombre}</h4>
                                <p className='text-lg font-bold'>Cantidad: {plato.cantidad}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='md:flex md:items-center md:justify-between my-10'>
                <p className='mt-5 font-black text-4xl text-amber-500'>{`${router.pathname === '/admin' ? 'Total a pagar' : 'Pagado'}: ${formatearDinero(total)}`}</p>
                
                <div className='flex flex-col gap-5'>
                    {
                        router.pathname === '/admin' && 
                            <button 
                                className='bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-sm'
                                type='button'
                                onClick={completarOrden}
                            >
                                Completar orden
                            </button>
                    }
                    
                    <button 
                        className='bg-red-600 hover:bg-red-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-sm'
                        type='button'
                        onClick={eliminarOrden}
                    >
                        Eliminar orden
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Orden
