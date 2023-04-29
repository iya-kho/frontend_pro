import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Main, Albums, Photos } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="/albums" element={<Albums />}></Route>
        <Route path="/photos" element={<Photos />}></Route>
        <Route path="*" element={<div className="bg-neutral-100 p-6">404 Not Found</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
