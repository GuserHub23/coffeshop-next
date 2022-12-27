import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {

  const router = useRouter()
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quosco Cafetería" />
        <link rel="shortcut icon" href="/assets/img/logo.svg"></link>
      </Head>

      <div className="md:flex flex-col md:flex-row justify-start md:justify-center">
          <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
              <Image
                  width={200}
                  height={50}
                  src="/assets/img/logo.svg"
                  alt="imagen logotipo"
                  className='m-auto my-8 md:my-0'

              />
              <nav className={`mt-5 flex flex-col md:flex md:flex-col`}>
                {/*  */}
                <div className={`${router.pathname === '/admin' ? 'bg-amber-300' : 'bg-white'} flex items-center gap-4 w-full border p-2 hover:bg-amber-400`}>
                  <button
                      type='button'
                      className='text-2xl font-bold hover:cursor-pointer'
                      onClick={() => router.replace('/admin')}
                  >
                    Administar ordenes
                  </button>
                </div>
                <div className={`${router.pathname === '/ordenes_completadas' ? 'bg-amber-300' : 'bg-white'} flex items-center gap-4 w-full border p-2 hover:bg-amber-400`}>
                  <button
                      type='button'
                      className='text-2xl font-bold hover:cursor-pointer'
                      onClick={() => router.replace('/ordenes_completadas')}
                  >
                    Ordenes completadas
                  </button>
                </div>
                {/*  */}
              </nav>
          </aside>

          <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen md:overflow-y-scroll">
              <div className="p-10">
                  {children}
              </div>
          </main>
      </div>
      
      <ToastContainer />
    </>
  );
}