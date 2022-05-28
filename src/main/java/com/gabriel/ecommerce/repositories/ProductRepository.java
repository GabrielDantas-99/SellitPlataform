package com.gabriel.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabriel.ecommerce.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}

