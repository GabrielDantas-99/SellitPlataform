package com.gabriel.ecommerce.config;

import java.time.Instant;
import java.util.Arrays;

import com.gabriel.ecommerce.auth.AuthenticationService;
import com.gabriel.ecommerce.auth.RegisterRequest;
import com.gabriel.ecommerce.entities.*;
import com.gabriel.ecommerce.entities.enums.OrderStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.gabriel.ecommerce.repositories.CategoryRepository;
import com.gabriel.ecommerce.repositories.OrderItemRepository;
import com.gabriel.ecommerce.repositories.OrderRepository;
import com.gabriel.ecommerce.repositories.ProductRepository;
import com.gabriel.ecommerce.repositories.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;

import static com.gabriel.ecommerce.entities.enums.Role.ADMIN;
import static com.gabriel.ecommerce.entities.enums.Role.MANAGER;

@Configuration
@Profile("test")
@RequiredArgsConstructor
public class TestConfig implements CommandLineRunner {

    private final UserRepository userRepository;
    private final OrderRepository orderRepository;
    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final OrderItemRepository orderItemRepository;
    private final AuthenticationService authenticationService;
    private final PasswordEncoder encoder;

    @Override
    public void run(String... args) throws Exception {

        // Instanciando novas categorias
        Category cat1 = new Category(null, "Electronics");
        Category cat2 = new Category(null, "Books");
        Category cat3 = new Category(null, "Computers");

        // Instanciando novos produtos
        Product p1 = new Product(null, "The Lord of the Rings", "Lorem ipsum dolor sit amet, consectetur.", 90.5, "");
        Product p2 = new Product(null, "Smart TV", "Nulla eu imperdiet purus. Maecenas ante.", 2190.0, "");
        Product p3 = new Product(null, "Macbook Pro", "Nam eleifend maximus tortor, at mollis.", 1250.0, "");
        Product p4 = new Product(null, "PC Gamer", "Donec aliquet odio ac rhoncus cursus.", 1200.0, "");
        Product p5 = new Product(null, "Rails for Dummies", "Cras fringilla convallis sem vel faucibus.", 100.99, "");

        // Salvando
        categoryRepository.saveAll(Arrays.asList(cat1, cat2, cat3));
        productRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5));

        // Adicionando os produtos cadastrados às categorias
        p1.getCategories().add(cat2);
        p2.getCategories().add(cat1);
        p2.getCategories().add(cat3);
        p3.getCategories().add(cat3);
        p4.getCategories().add(cat3);
        p5.getCategories().add(cat2);

        // Salvando os produtos categorizados no banco
        productRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5));

//		 Instanciando novos usuários
        var admin = RegisterRequest.builder()
                .name("admin")
                .email("admin@gmail.com")
                .password("admin123")
                .phone("84988202020")
                .role(ADMIN)
                .build();
        System.out.println("Admin token: " + authenticationService.register(admin).getAccessToken());

        var manager = RegisterRequest.builder()
                .name("manager")
                .email("manager@gmail.com")
                .password("manager")
                .phone("84988202020")
                .role(MANAGER)
                .build();
        System.out.println("Manager token: " + authenticationService.register(manager).getAccessToken());

        User u1 = new User(null, "Maria Brown", "maria@gmail.com", "988888888", encoder.encode("123456"));
        User u2 = new User(null, "Alex Green", "alex@gmail.com", "977777777", encoder.encode("654321"));

//		 Instanciando novos pedidos
        Order o1 = new Order(null, Instant.parse("2019-06-20T19:53:07Z"), OrderStatus.PAID, u1);
        Order o2 = new Order(null, Instant.parse("2019-07-21T03:42:10Z"), OrderStatus.WAITING_PAYMENT, u2);
        Order o3 = new Order(null, Instant.parse("2019-07-22T15:21:22Z"), OrderStatus.WAITING_PAYMENT, u1);

//        Salvando usuarios e pedidos no banco
        userRepository.saveAll(Arrays.asList(u1, u2));
        orderRepository.saveAll(Arrays.asList(o1, o2, o3));

        // Instanciando items de pedidos
        OrderItem oi1 = new OrderItem(o1, p1, 2, p1.getPrice());
        OrderItem oi2 = new OrderItem(o1, p3, 1, p3.getPrice());
        OrderItem oi3 = new OrderItem(o2, p3, 2, p3.getPrice());
        OrderItem oi4 = new OrderItem(o3, p5, 2, p5.getPrice());

//        Salvando items de pedidos no banco
        orderItemRepository.saveAll(Arrays.asList(oi1, oi2, oi3, oi4));

        Payment pay1 = new Payment(null, Instant.parse("2019-06-20T21:53:07Z"), o1);
        o1.setPayment(pay1);

        orderRepository.save(o1);

    }

}
