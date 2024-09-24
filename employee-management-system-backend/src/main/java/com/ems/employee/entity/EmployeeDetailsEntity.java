package com.ems.employee.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "master_data")
public class EmployeeDetailsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String phone;
    private String profilePicture;
    private String dateOfBirth;
    private String gender;

    // Address Information
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String state;
    private String postalCode;
    private String country;

    // Employment Information
    private String employeeId;
    private String department;
    private String position;
    private String dateOfJoining;
    private String employmentStatus;
    private double salary;
    private String manager;

    // Financial Information
    private String bankAccountNumber;
    private String taxId;
    private double otherDeductions;

    // Personal Information
    private String emergencyContactName;
    private String emergencyContactPhone;
    private String maritalStatus;
    private int dependents;
    private String nationality;
    private String ethnicity;

    // Leave and Attendance
    private double leaveBalance;

    // Health Information
    private String medicalInsuranceInfo;
    private String allergies;
    private String medicalConditions;

    // Training and Certification
    private String trainingHistory;
    private String certificationDetails;

    // Other Information
    private String notes;


}
