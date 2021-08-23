import '../styles/globals.css'
import { AuthUserProvider } from '../src/context/AuthUserContext';

function MyApp({ Component, pageProps }) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
}

export default MyApp
