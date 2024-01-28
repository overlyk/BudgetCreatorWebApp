import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Portal from './Portal';
import BasicModal from './BasicModal';
import NavBar from './ResponsiveAppBar.tsx'
import BasicTable from './BasicTable.jsx';
import BasicGrid from './BasicGrid.jsx';
import AddEditBudget from './AddEditBudget.jsx';
import Budgets from './Budgets.jsx';
import BudgetDetails from './BudgetDetails.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
export default function App({}) { 
    const value = 4;
    const [test, test2] = [4,5];

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/budget-details" element={<BudgetDetails />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </> 
  );
}
