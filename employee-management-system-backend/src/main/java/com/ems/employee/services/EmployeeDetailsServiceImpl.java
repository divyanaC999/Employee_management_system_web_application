package com.ems.employee.services;

import com.ems.employee.entity.EmployeeDetailsEntity;
import com.ems.employee.entity.EmployeeEntity;
import com.ems.employee.model.Employee;
import com.ems.employee.model.EmployeeDetails;
import com.ems.employee.repository.EmployeeDetailsRepository;
import com.ems.employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class EmployeeDetailsServiceImpl implements EmployeeDetailsService{
    private EmployeeDetailsRepository employeeDetailsRepository;
    public EmployeeDetailsServiceImpl(EmployeeDetailsRepository employeeDetailsRepository) {
        this.employeeDetailsRepository = employeeDetailsRepository;
    }
    @Override
    public EmployeeDetails createEmployeeDetails(EmployeeDetails employeeDetails) {
        EmployeeDetailsEntity employeeDetailsEntity =new EmployeeDetailsEntity();
        BeanUtils.copyProperties(employeeDetails,employeeDetailsEntity);
        employeeDetailsRepository.save(employeeDetailsEntity);
        return employeeDetails;
    }
//    List<EmployeeEntity> employeeEntities
//            = employeeRepository.findAll();
//
//    List<Employee> employees = employeeEntities
//            .stream()
//            .map(emp -> new Employee(
//                    emp.getId(),
//                    emp.getFirstName(),
//                    emp.getLastName(),
//                    emp.getEmailId()))
//            .collect(Collectors.toList());
//        return employees;
    @Override
    public List<EmployeeDetails> getAllEmployeeDetails() {
        List<EmployeeDetailsEntity> employeeDetailsEntities=employeeDetailsRepository.findAll();
        List<EmployeeDetails> employeeDetails =employeeDetailsEntities
                .stream()
                .map(ed -> new EmployeeDetails(ed.getId(),
                        ed.getFirstName(),
                        ed.getLastName(),
                        ed.getEmailId(),
                        ed.getPhone(),
                        ed.getProfilePicture(),
                        ed.getDateOfBirth(),
                        ed.getGender(),
                        ed.getAddressLine1(),
                        ed.getAddressLine2(),
                        ed.getCity(),
                        ed.getState(),
                        ed.getPostalCode(),
                        ed.getCountry(),
                        ed.getEmployeeId(),
                        ed.getDepartment(),
                        ed.getPosition(),
                        ed.getDateOfJoining(),
                        ed.getEmploymentStatus(),
                        ed.getSalary(),ed.getManager(),
                        ed.getBankAccountNumber(),
                        ed.getTaxId(),
                        ed.getOtherDeductions(),
                        ed.getEmergencyContactName(),
                        ed.getEmergencyContactPhone(),
                        ed.getMaritalStatus(),
                        ed.getDependents(),
                        ed.getNationality(),
                        ed.getEthnicity(),
                        ed.getLeaveBalance(),
                        ed.getMedicalInsuranceInfo(),ed.getAllergies(),ed.getMedicalConditions(),ed.getTrainingHistory(),ed.getCertificationDetails(),ed.getNotes())).collect(Collectors.toList());
        return employeeDetails;
    }
}
