package com.gabriel.ecommerce.entities.dtos;

import com.gabriel.ecommerce.entities.Product;

import java.util.Set;

public record ProductDTO(
        String name,
        String description,
        Double price,
        String imgUrl,
        Set<Long> categoriesIds
) { }
