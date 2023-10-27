import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import {  Home, Navbar } from './components';

const App = () => {

  return (
    <div className="relative flex">
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <div className=" relative top-0 w-fit ">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
