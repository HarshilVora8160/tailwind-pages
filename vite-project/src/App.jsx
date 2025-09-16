import MainTable from './components/MainTable';
import Page1 from './components/Page1';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainTable />} /> // 2:16 min
        <Route path='/page-1' element={<Page1 />} /> // 2:16 min
      </Routes>
    </BrowserRouter>
  )
}

export default App
