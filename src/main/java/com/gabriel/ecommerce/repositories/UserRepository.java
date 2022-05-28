package com.gabriel.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabriel.ecommerce.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
