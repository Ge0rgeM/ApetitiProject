import MainKa from "@/Pages/ka/Main";
import MainEn from "@/Pages/en/Main";
import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<MainKa />} />
        <Route path='/ka/Main' element={<MainKa />} />
        <Route path='/en/Main' element={<MainEn />} />
      </Routes>
    </>
  );
}

export default App
