package net.revature.RevShop.Services;


import net.revature.RevShop.DTOs.DtoConverter;
import net.revature.RevShop.DTOs.OrderItemDto;
import net.revature.RevShop.Models.OrderItem;
import net.revature.RevShop.Repositories.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemService {

    private final OrderItemRepository orderItemRepository;

    @Autowired
    public OrderItemService(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;

    }

    public OrderItemDto getOrderItemById(Integer orderItemId) {
        OrderItem orderItem = orderItemRepository.findById(orderItemId)
                .orElseThrow(() -> new RuntimeException("OrderItem not found"));
        return DtoConverter.toOrderItemDto(orderItem);
    }

    public List<OrderItemDto> getOrderItemsByOrderId(Integer orderId) {
        return orderItemRepository.findByOrder_orderId(orderId).stream()
                .map(DtoConverter::toOrderItemDto)
                .toList();
    }
}