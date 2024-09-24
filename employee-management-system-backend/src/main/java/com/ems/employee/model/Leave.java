package com.ems.employee.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Leave {


    private Long id;
    private String leaveType;
    private String description;
    private int duration;



}
