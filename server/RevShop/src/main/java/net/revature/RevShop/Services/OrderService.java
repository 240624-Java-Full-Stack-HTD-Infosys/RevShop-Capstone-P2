package net.revature.RevShop.Services;

import net.revature.RevShop.DTOs.DtoConverter;
import net.revature.RevShop.DTOs.OrderDto;
import net.revature.RevShop.Models.*;
import net.revature.RevShop.Repositories.CartRepository;
import net.revature.RevShop.Repositories.OrderRepository;
import net.revature.RevShop.Repositories.ProductRepository;
import net.revature.RevShop.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final CartRepository cartItemRepository;
//    private final NotificationService notificationService;
    private final UserRepository userRepository;
    private final ProductRepository productRepository; // Ensure you have access to products


    @Autowired
    public OrderService(OrderRepository orderRepository,
                        CartRepository cartItemRepository,
                        UserRepository userRepository,
                        ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.cartItemRepository = cartItemRepository;

        this.userRepository = userRepository;
        this.productRepository = productRepository;

    }


    //get
    public List<Order> findByUser(User u) {

        return orderRepository.findByBuyer(u);
    }
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    //set

    public OrderDto placeOrder(int userId) {
        // Fetch the user who is placing the order
        User buyer = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Retrieve the user's cart items
        List<CartItem> cartItems = cartItemRepository.findByBuyer_userId(buyer.getUserId());
        if (cartItems.isEmpty()) {
            throw new RuntimeException("Cart is empty. Add items to the cart before placing an order.");
        }

        // Create Order entity
        Order order = new Order();
        order.setBuyer(buyer);
        order.setOrderStatus(Order.OrderStatus.PLACED);
        order.setCreatedAt(LocalDateTime.now());

        // Convert CartItems to OrderItems
        Set<OrderItem> orderItems = cartItems.stream()
                .map(cartItem -> {
                    Product product = productRepository.findById(cartItem.getProduct().getProductId())
                            .orElseThrow(() -> new RuntimeException("Product not found"));

                    OrderItem orderItem = new OrderItem();
                    orderItem.setOrder(order);
                    orderItem.setProduct(product);
                    orderItem.setQuantity(cartItem.getQuantity());
                    orderItem.setUnitPrice(product.getPrice());
                    return orderItem;
                })
                .collect(Collectors.toSet());

        order.setOrderItems(orderItems);

        // Save the order along with order items
        Order savedOrder = orderRepository.save(order);

        // Clear the user's cart
        cartItemRepository.deleteByBuyer_userId(buyer.getUserId());

        // Notify the buyer
//        String buyerMessage = "Your order #" + savedOrder.getOrderId() + " has been placed successfully.";
//        notificationService.createNotification(buyer, Notification.NotificationType.ORDER_PLACED, buyerMessage);

        // Notify the sellers
//        for (OrderItem item : orderItems) {
//            User seller = item.getProduct().getSeller();
//            String sellerMessage = "Order #" + savedOrder.getOrderId() + " includes your product. Please prepare for shipping.";
//            notificationService.createNotification(seller, Notification.NotificationType.SHIP_ITEM, sellerMessage);
//        }

        return DtoConverter.toOrderDto(savedOrder);
    }

}
