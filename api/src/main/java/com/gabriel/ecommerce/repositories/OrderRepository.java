package com.gabriel.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabriel.ecommerce.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
