package com.ems.employee.controller;

import com.ems.employee.model.EmployeeDetails;
import com.ems.employee.services.EmployeeDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ed/")
public class EmployeeDetailsController {

    private final EmployeeDetailsService employeeDetailsService;

    public EmployeeDetailsController(EmployeeDetailsService employeeDetailsService) {
        this.employeeDetailsService = employeeDetailsService;
    }
    @PostMapping("/addDetails")
    public EmployeeDetails createEmployeeDetails(@RequestBody EmployeeDetails employeeDetails){
        return employeeDetailsService.createEmployeeDetails(employeeDetails);
    }
    @GetMapping("/viewDetails")
    public List<EmployeeDetails> getAllDetails(){
        return employeeDetailsService.getAllEmployeeDetails();
    }
}

