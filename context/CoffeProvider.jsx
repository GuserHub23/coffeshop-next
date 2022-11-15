import { useState, useEffect, createContext } from 'react'

import axios from 'axios'

import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const CoffeContext = createContext()

const CoffeProvider = ({children}) => {
    const [ categorias, setCategorias ] = useState([])
    const [ categoriaActual, setCategoriaActual ] = useState(categorias[0])
    
    const [ producto, setProducto ] = useState({})
    const [ pedido, setPedido ] = useState([])
    const [ modal, setModal ] = useState(false)    
    
    const [ menu, setMenu ] = useState(false)

    const [ nombre, setNombre ] = useState('')
    const [ total, setTotal ] = useState(0)
    
    const router = useRouter()

    const obtenerCategorias = async () => {
        try {
            const {data} = await axios('/api/categorias')
            setCategorias(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0 )
        setTotal(nuevoTotal)
        
    }, [pedido])
    
    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, ...producto}) => {
        if (pedido.some(productoState => productoState.id === producto.id)) {
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado Correctamente', {
                theme: 'dark'
            })
        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido',{
                theme: 'dark'
            })
        }
        setModal(false)
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter( producto => producto.id !== id)
        setPedido(pedidoActualizado)
    }

    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter( producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
    }
    
    const colocarOrden = async (e) => {
        e.preventDefault()

        try {
            await axios.post('/api/ordenes', { pedido, nombre, total, fecha: Date.now().toString() })
            
            setCategoriaActual(categorias[0])
            setPedido([])        
            setNombre('')
            setTotal(0)

            toast.success('Pedido Realizado Correctamente', {
                theme: 'dark'
            })

        } catch (error) {
            console.log(error)
        } finally {            
            setTimeout(() => {
                router.push('/')
            }, 1500)
        }
    }

    const handleSetMenu = () => {
        setMenu(!menu)
    }
    return (
        <CoffeContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                handleSetProducto,
                handleChangeModal,
                modal,
                producto,
                handleAgregarPedido,
                pedido,
                handleEditarCantidades,
                menu,
                handleSetMenu,
                handleEliminarProducto,
                nombre,
                setNombre,
                colocarOrden,
                total,
            }}
        >
            {children}
        </CoffeContext.Provider>
    )
}

export {
    CoffeProvider
}


export default CoffeContext

