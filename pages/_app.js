import { CoffeProvider } from '../context/CoffeProvider'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }){
  return (
    <CoffeProvider>
      <Component {...pageProps} />
    </CoffeProvider>
  )
}
