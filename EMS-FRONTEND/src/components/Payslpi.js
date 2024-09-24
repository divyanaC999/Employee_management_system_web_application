import React from 'react'
import { Link } from 'react-router-dom';
const Payslpi = () => {
  return (
    <>
    &nbsp;
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\ntable{\nwidth: 100%;\nborder-collapse:collapse;\nborder: 1px solid black;\n}\ntable td{line-height:25px;padding-left:15px;}\ntable th{background-color:#fbc403; color:#363636;}\n"
      }}
    />
    <table border={1}>
      <tbody>
        <tr
          height="100px"
          style={{
            backgroundColor: "#363636",
            color: "#ffffff",
            textAlign: "center",
            fontSize: 24,
            fontWeight: 600
          }}
        >
          <td colSpan={4}>Payslip EMS </td>
        </tr>
        <tr>
          <th>Personel NO:</th>
          <td>+91 985665235566</td>
          <th>Name</th>
          <td>Divya Chourasiya</td>
        </tr>
        {/*---2 row-*/}
        <tr>
          <th>Bank</th>
          <td>HDFC BANK Private Limited</td>
          <th>Bank A/c No.</th>
          <td>156648963589</td>
        </tr>
        {/*----3 row--*/}
        <tr>
          <th>DOB</th>
          <td>03/04/1999</td>
          <th>Lop Days</th>
          <td>0</td>
        </tr>
        {/*----4 row--*/}
        <tr>
          <th>PF No.</th>
          <td>26123458556</td>
          <th>STD days</th>
          <td>30</td>
        </tr>
        {/*----5 row--*/}
        <tr>
          <th>Location</th>
          <td>India</td>
          <th>Working Days</th>
          <td>30</td>
        </tr>
        {/*----6 row--*/}
        <tr>
          <th>Department</th>
          <td>IT</td>
          <th>Designation</th>
          <td>Software Engineer</td>
        </tr>
      </tbody>
    </table>
    <br />
    <table border={1}>
      <tbody>
        <tr>
          <th>Earnings</th>
          <th>Amount</th>
          <th>Deductions</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>Basic</td>
          <td>29000</td>
          <td>provident fund</td>
          <td>1900</td>
        </tr>
        <tr>
          <td>House Rent Allowance</td>
          <td>2000</td>
          <td>professional tax</td>
          <td>600</td>
        </tr>
        <tr>
          <td>special Allowance</td>
          <td>400</td>
          <td>Income tax</td>
          <td>500</td>
        </tr>
        <tr>
          <td>conveyance</td>
          <td>3000</td>
        </tr>
        <tr>
          <td>ADD Special allowance</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>shift Allowance</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>bonus</td>
          <td>500</td>
        </tr>
        <tr>
          <td>medical Allowance</td>
          <td>600</td>
        </tr>
        <tr>
          <th>Gross Earnings</th>
          <td>Rs.38500</td>
          <th>Gross Deductions</th>
          <td>Rs.3000</td>
        </tr>
        <tr>
          <td />
          <td>
            <strong>NET PAY</strong>
          </td>
          <td>Rs.35500</td>
          <td />
        </tr>
      </tbody>
    </table>
    <Link to="/salaryslip">
        <button>VIEW ALL</button>
      </Link>
  </>
  
  )
}

export default Payslpi