import MainKa from "@/Pages/ka/Main";
import MainEn from "@/Pages/en/Main";
import ContactKa from "@/Pages/ka/Contact";
import ContactEn from "@/Pages/en/Contact";
import DeliveryKa from "@/Pages/ka/Delivery";
import DeliveryEn from "@/Pages/en/Delivery";
import AboutUsKa from "@/Pages/ka/AboutUs";
import AboutUsEn from "@/Pages/en/AboutUs";
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

        <Route path='/ka/Delivery' element={<DeliveryKa />} />
        {/* <Route path='/en/Delivery' element={<DeliveryEn />} /> */}

        <Route path='/ka/AboutUs' element={<AboutUsKa />} />
        {/* <Route path='/en/AboutUs' element={<AboutUsEn />} /> */}
      </Routes>
    </>
  );
}

export default App
