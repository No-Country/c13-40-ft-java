package com.ecommerce.apinocountry.controllers;

import com.ecommerce.apinocountry.models.Role;
import com.ecommerce.apinocountry.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/role")
public class RoleController {
    private final RoleService roleService;

    @Autowired
    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }


    @GetMapping()
    public List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }

    @PostMapping()
    public Role createRole(@RequestBody Role role){
        return roleService.saverRole(role);
    }

}
