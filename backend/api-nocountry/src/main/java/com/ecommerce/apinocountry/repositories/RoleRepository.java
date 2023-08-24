package com.ecommerce.apinocountry.repositories;

import com.ecommerce.apinocountry.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
