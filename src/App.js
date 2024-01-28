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

export default function App() { 
    const value = 4;
    const [test, test2] = [4,5];

  return (
    <>
    
    <NavBar />
    <Budgets />
     {/* <div className="clipping-container">
      
      <p><Portal /></p>
      </div>
    <div>WWW--  {test} , {test2}, {value}, ({value+test2}), ({test2-test})
    <p>test32342423</p>
    <h>test</h>
    <p id="hi">t8658658658566583423432432</p>
    <Test />
    <Test />
    <Test />
    <Test />
    <Test />
  </div> */}
    </> 
  );
}
