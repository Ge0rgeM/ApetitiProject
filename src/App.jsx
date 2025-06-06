import MainKa from "@/Pages/ka/Main";
import MainEn from "@/Pages/en/Main";
import ContactKa from "@/Pages/ka/Contact";
import ContactEn from "@/Pages/en/Contact";
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<MainKa />} />
        <Route path='/ka/Main' element={<MainKa />} />
        <Route path='/en/Main' element={<MainEn />} />
        
        <Route path='/ka/Contact' element={<ContactKa />} />
        <Route path='/en/Contact' element={<ContactEn />} />
      </Routes>
    </>
  );
}

export default App
