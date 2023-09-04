package com.ecommerce.apinocountry.services;

import com.ecommerce.apinocountry.models.entities.Role;
import com.ecommerce.apinocountry.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RoleService {
    private final RoleRepository roleRepository;

    @Autowired
    public RoleService(RoleRepository roleRepository){
        this.roleRepository = roleRepository;
    }

    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    public Role saverRole(Role role) {
        return roleRepository.save(role);
    }

}
