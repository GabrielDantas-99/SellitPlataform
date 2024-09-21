package com.gabriel.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabriel.ecommerce.entities.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
