import { AuthProvider } from '../contexts/authContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return <AuthProvider>
    <Component {...pageProps} />
    <ToastContainer />
  </AuthProvider>
}

export default MyApp
