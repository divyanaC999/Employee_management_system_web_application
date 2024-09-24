package com.ems.employee.repository;

import com.ems.employee.entity.EmployeeDetailsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeDetailsRepository extends JpaRepository<EmployeeDetailsEntity,Long>{
}
