package com.ems.employee.services;

import com.ems.employee.model.Employee;
import com.ems.employee.model.EmployeeDetails;

import java.util.List;

public interface EmployeeDetailsService {


    EmployeeDetails createEmployeeDetails(EmployeeDetails employeeDetails);

    List<EmployeeDetails> getAllEmployeeDetails();
}
