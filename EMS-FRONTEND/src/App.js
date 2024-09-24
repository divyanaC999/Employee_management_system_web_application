import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import UpdateEmployee from "./components/UpdateEmployee";
import LeaveCard from "./components/LeaveCard";
import DepartmentHierarchy from "./components/DepartmentHeirarchy";
import DrawerWithNavigation from './components/DrawerWithNavigation';
import EmployeeDetails from "./components/EmployeeDetails";
import IDCard from "./components/IDCard";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import SalarySlip from "./components/SalarySlip";
import Lv from "./components/Lv";
import Payslpi from "./components/Payslpi";
import Lvr from "./components/Lvr";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
          <Route path="/leaves" element={<LeaveCard />} />
          <Route path="/dep" element={<DepartmentHierarchy />} />
          <Route path="/drawer" element={<DrawerWithNavigation />} />
          <Route path="/ed" element={<EmployeeDetails />} />
          <Route path="/idcard" element={<IDCard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/salaryslip" element={<SalarySlip />} />
          <Route path="/leave" element={<Lv />} />
          <Route path="/payslip" element={<Payslpi />} />
          <Route path="/request" element={<Lvr />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
