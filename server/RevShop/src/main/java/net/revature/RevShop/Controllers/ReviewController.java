package net.revature.RevShop.Controllers;


import net.revature.RevShop.Models.*;
import net.revature.RevShop.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/reviews")
@CrossOrigin
public class ReviewController{
    private final ReviewService reviewService;
    private final UserService userService;
    private final ProductService productService;

    @Autowired
    public ReviewController(ReviewService reviewService, UserService userService, ProductService productService) {
        this.reviewService = reviewService;
        this.userService = userService;
        this.productService = productService;
    }

    @GetMapping("/{productId}")
    public List<Review> getReviewsByProduct(@PathVariable Integer productId){
        return reviewService.getAllProductReviews(productId);
    }

    @GetMapping("/{userId}")
    public List<Review> getReviewsByUser(@PathVariable Integer userId){
        return reviewService.getAllUserReviews(userId);
    }

    @GetMapping("/{reviewId}")
    public Review getReviewById(@PathVariable Integer reviewId){
        return reviewService.getReviewById(reviewId);
    }

    @PostMapping("/review/{userId}/{productId}")
    @ResponseStatus(HttpStatus.CREATED)
    public Review createReview(@PathVariable Integer userId, @PathVariable Integer productId, @RequestBody Review review){
        return reviewService.addReview(userId, productId, review);
    }

    @PutMapping("/review/{reviewId}")
    @ResponseStatus(HttpStatus.OK)
    public void updateReview(@PathVariable Integer reviewId, @RequestBody Review review){
        reviewService.updateReview(review.getComment(), reviewId);
    }

    @DeleteMapping("/{reviewId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteReviewById(@PathVariable Integer reviewId){
        reviewService.deleteReview(reviewId);
    }
}
