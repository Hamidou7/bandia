
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Banner from './components/header/Banner';
import TopBar from './components/header/TopBar';
import Services from './pages/Services';

function App() {
  return (
    <>
     <TopBar/>
     <Banner/>
     <Routes>
      <Route path='/services' element={<Services/>}/>
     </Routes>
    </>
  );
}

export default App;
