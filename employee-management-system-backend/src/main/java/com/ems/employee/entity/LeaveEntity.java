package com.ems.employee.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "leaves")
public class LeaveEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String leaveType;
    private String description;
    private int duration;



}
