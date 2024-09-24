package com.ems.employee.services;

import com.ems.employee.entity.LeaveEntity;
import com.ems.employee.model.Leave;
import com.ems.employee.repository.LeaveRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class LeaveServiceImpl implements LeaveService{
private LeaveRepository leaveRepository;

public LeaveServiceImpl(LeaveRepository leaveRepository){
    this.leaveRepository=leaveRepository;
}

    @Override
    public Leave createLeave(Leave leave) {
        LeaveEntity leaveEntity =new LeaveEntity();

        BeanUtils.copyProperties(leave,leaveEntity);
        leaveRepository.save(leaveEntity);
        return leave;
    }

    @Override
    public List<Leave> getAllLeaves() {
        List<LeaveEntity> leaveEntities =leaveRepository.findAll();
        List<Leave> leave = leaveEntities.stream()
                .map(l -> new Leave(
                        l.getId(),
                        l.getLeaveType(),
                        l.getDescription(),
                        l.getDuration())).collect(Collectors.toList());
        return leave;
    }

    @Override
    public boolean deleteLeave(Long id) {
       LeaveEntity leave =leaveRepository.findById(id).get();
       leaveRepository.delete(leave);
        return true;
    }

    @Override
    public Leave getLeaveById(Long id) {
        LeaveEntity leaveEntity=leaveRepository.findById(id).get();
    Leave leave = new Leave();
    BeanUtils.copyProperties(leaveEntity,leave);

        return leave;
    }


    @Override
    public Leave updateLeave(Long id, Leave leave) {

    LeaveEntity leaveEntity = leaveRepository.findById(id).get();
    leaveEntity.setLeaveType(leave.getLeaveType());
    leaveEntity.setDescription(leave.getDescription());
    leaveEntity.setDuration(leave.getDuration());
    leaveRepository.save(leaveEntity);
        return leave;
    }
}
