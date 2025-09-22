import FinanceProduct from './ChildComponents.jsx/Page4/FinanceProduct';
import Awsmd from './components/Awsmd';
import BlueChips from './components/BlueChips';
import AllPages from './components/HomeDataTable';
import Page1 from './ChildComponents.jsx/Page1/Page1';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllPages />} />
        <Route path='/page-1' element={<Page1 />} /> // 2:16 min
        <Route path='/blue-chips-page-2' element={<BlueChips />} /> // 2:16 min
        <Route path='/awsmd' element={<Awsmd />} />
        <Route path='/finance-product' element={<FinanceProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
