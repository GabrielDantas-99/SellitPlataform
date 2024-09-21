package com.gabriel.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabriel.ecommerce.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
