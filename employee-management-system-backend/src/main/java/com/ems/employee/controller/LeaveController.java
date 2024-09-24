package com.ems.employee.controller;

import com.ems.employee.entity.LeaveEntity;
import com.ems.employee.model.Leave;
import com.ems.employee.services.LeaveService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/leave/")
public class LeaveController {
    private final LeaveService leaveService;


    public LeaveController(LeaveService leaveService) {
        this.leaveService = leaveService;
    }
    @PostMapping("/add")
    public Leave createLeave(@RequestBody Leave leave){
        return leaveService.createLeave(leave);
    }

    @GetMapping("/leaves")
    public List<Leave> getAllLeaves(){
        return leaveService.getAllLeaves();
    }
//    @PutMapping("/update/{id}")
//    private LeaveEntity<Leave> updateLeave(@PathVariable Long id, @RequestBody Leave leave){
//        leave=leaveService.updateLeave(id, leave);
//        return LeaveEntity.ok(leave);
//    }
}
