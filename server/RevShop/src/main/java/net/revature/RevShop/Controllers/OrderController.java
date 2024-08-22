package net.revature.RevShop.Controllers;


import net.revature.RevShop.DTOs.OrderDto;
import net.revature.RevShop.Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }



    @PostMapping("/place/{userId}")
    public ResponseEntity<OrderDto> placeOrder(@PathVariable Integer userId) {
        OrderDto placedOrder = orderService.placeOrder(userId);
        return ResponseEntity.ok(placedOrder);
    }
}