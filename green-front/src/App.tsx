import Layout from './app/layout/Layout.tsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './features/mainPage/MainPage.tsx';
import NotFound from './components/NotFound.tsx';
import WpPage from './features/wp/wpPage.tsx';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/wp/:id" element={<WpPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
