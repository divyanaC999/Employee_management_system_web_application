package com.ems.employee.services;

import com.ems.employee.model.Leave;
import org.springframework.stereotype.Service;

import java.util.List;

public interface LeaveService {

    Leave createLeave(Leave leave);

    List<Leave> getAllLeaves();

    boolean deleteLeave(Long id);

    Leave getLeaveById(Long id);




    Leave updateLeave(Long id, Leave leave);


}
