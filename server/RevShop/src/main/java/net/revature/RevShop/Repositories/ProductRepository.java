package net.revature.RevShop.Repositories;

import net.revature.RevShop.Models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "SELECT * FROM products",nativeQuery = true)
    List<Product> getAllProducts();

    @Query(value = "SELECT * FROM products JOIN users ON Users.userId = Products.userId WHERE username = ?1 AND user_type = seller",nativeQuery = true)
    List<Product> getAllProductsBySellerName(String sellerName);

    @Query(value = "SELECT * FROM products WHERE name = ?1",nativeQuery = true)
    List<Product> getAllProductsByItemName(String productName);

    @Query(value = "UPDATE products SET stock = ?2 WHERE product_id = ?1", nativeQuery = true)
    void updateProductQuantity(Integer productId, Integer stock);
}
