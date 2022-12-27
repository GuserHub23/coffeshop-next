import axios from "axios";
import useSWR from "swr";
import Orden from "../components/Orden";
import AdminLayout from "../layout/AdminLayout";


export default function ordenes_completadas() {

    const fetcher = () => axios('/api/completadas').then(datos => datos.data)

    const { data, error, isLoading } = useSWR('/api/completadas', fetcher, {
        refreshInterval: 100
    })

    return (
        <AdminLayout>
            <h1 className='text-4xl font-black'>Panel de administación</h1>
            <p className='text-2xl my-10'>Ordenes Completadas</p>

            {
                data && data.length ?
                data.map(orden => (
                    <Orden
                        key={orden.id}
                        orden={orden}
                    />
                )) : <p>No hay ordenes completadas</p>
            }
        </AdminLayout>
    )
}
