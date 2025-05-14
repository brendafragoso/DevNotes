
import { AppRouter } from './routes';
import './styles.css';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify'


export const App = () => {
  return (
    <>
      <GlobalStyles/>
      <ToastContainer  autoClose={2000} theme="colored" />
      <AppRouter/>,
    </>
  );
}

