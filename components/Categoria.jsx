import Image from "next/image"
import { useRouter } from "next/router"

import useCoffe from "../hooks/useCoffe"

const Categoria = ({categoria}) => {
    
    const { categoriaActual, handleClickCategoria, handleSetMenu } = useCoffe()
    
    const { nombre, icono, id } = categoria
    
    const router = useRouter()
    
    return (
        <div className={`${categoriaActual?.id === id && 'bg-amber-300'} flex items-center gap-4 w-full border p-2 hover:bg-amber-400`}>
            <Image
                src={`/assets/img/icono_${icono}.svg`} 
                alt={`Imagen icono ${nombre}`}
                width={70}
                height={70}
            />
            <button
                type='button'
                className='text-2xl font-bold hover:cursor-pointer'
                onClick={() => {
                    handleClickCategoria(id)
                    if (router.pathname !== '/') router.replace('/')
                    handleSetMenu()
                }}
            >
                {nombre}
            </button>
        </div>
    )
}

export default Categoria
