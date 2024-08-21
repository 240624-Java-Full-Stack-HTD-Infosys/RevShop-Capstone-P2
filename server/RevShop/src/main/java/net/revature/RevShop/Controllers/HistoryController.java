package net.revature.RevShop.Controllers;

import net.revature.RevShop.Models.Order;
import net.revature.RevShop.Models.User;
import net.revature.RevShop.Security.JwtUtil;
import net.revature.RevShop.Services.OrderService;
import net.revature.RevShop.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/history")
@CrossOrigin
public class HistoryController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/")
    public ResponseEntity<?> getUserHistory(@CookieValue("Authentication") String token) {
        //Get ID from token
        Integer id = jwtUtil.extractId(token);

        if (id == null) {
            return ResponseEntity.status(400).body("Bad auth cookie");
        }

        Optional<User> u = userService.getUserById(id);

        if (u.isEmpty()) {
            return ResponseEntity.status(400).body("Auth cookie is for expired user");
        }


        //Test data
        List<Order> dummyData = new ArrayList<>();

        for (int i = 0; i < 20; i++) {
            Order o = new Order(i, u.get(), 1000.12, Order.OrderStatus.SHIPPED);
            LocalDateTime n = LocalDateTime.now();
            o.setCreatedAt(n);
            dummyData.add(o);
        }
        return ResponseEntity.ok(dummyData);

        //return ResponseEntity.ok(orderService.findByUser(u.get()));

    }

}
