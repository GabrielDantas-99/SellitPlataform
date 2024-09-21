package com.gabriel.ecommerce.services;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import com.gabriel.ecommerce.entities.Category;
import com.gabriel.ecommerce.entities.dtos.ProductDTO;
import com.gabriel.ecommerce.services.exceptions.DataIntegrityViolationException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.gabriel.ecommerce.entities.Product;
import com.gabriel.ecommerce.repositories.ProductRepository;

@Service
@RequiredArgsConstructor
public class ProductService {

	private final ProductRepository repository;
	private final CategoryService categoryService;
	private final ProductRepository productRepository;

	public List<Product> findAll() {
		return repository.findAll();
	}
	
	public Product findById(Long id) {
		Optional<Product> obj = repository.findById(id);
		return obj.get();
	}

    public Product createProduct(ProductDTO obj) {
		return repository.save(newProduct(obj, null));
    }

	public Product updateProduct(Long id, ProductDTO objDTO) {
		Product oldObj = findById(id);
		oldObj = newProduct(objDTO, id);
		return repository.save(oldObj);
	}

	public void deleteProduct(Long id) {
		Product obj = findById(id);
		if (!obj.getOrders().isEmpty()) {
			throw new DataIntegrityViolationException("The product with id: " + id + "has orders tied to it and cannot be deleted at the moment!");
		}
		repository.deleteById(id);
	}

	private Product newProduct(ProductDTO obj, Long id) {
		Set<Category> categories = obj
				.categoriesIds()
				.stream()
				.map(categoryService::findById)
				.collect(Collectors.toSet());
		Product product = new Product(
                id,
				obj.name(),
				obj.description(),
				obj.price(),
				obj.imgUrl()
		);
		product.getCategories().addAll(categories);
		return product;
	}

}
