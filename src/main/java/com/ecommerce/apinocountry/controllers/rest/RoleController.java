package com.ecommerce.apinocountry.controllers.rest;

import com.ecommerce.apinocountry.models.entities.Role;
import com.ecommerce.apinocountry.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class RoleController {
    private final RoleService roleService;

    @Autowired
    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }


    @GetMapping("/roles")
    public List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }

    @PostMapping("/insertRole")
    public Role createRole(@RequestBody Role role){
        return roleService.saverRole(role);
    }

}
