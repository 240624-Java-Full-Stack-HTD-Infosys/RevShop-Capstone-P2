package net.revature.RevShop.Repositories;

import net.revature.RevShop.Models.Product;
import net.revature.RevShop.Models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {

    List<Review> findByProductId(Integer productId);

    Review findByReviewId(Integer reviewId);

    List<Review> findByUserId(Integer userId);

    @Modifying
    @Query(value = "UPDATE reviews SET content = ?1 WHERE review_id = ?2", nativeQuery = true)
    void update(String content, Integer reviewId);

}