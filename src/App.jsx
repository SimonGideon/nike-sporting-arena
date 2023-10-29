import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import {  Home, Navbar } from './components';

const App = () => {

  return (
    <div className="flex bg-black">
      <div className="">
        <div className="">
        <div className="">
            <Navbar />
          </div>
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
