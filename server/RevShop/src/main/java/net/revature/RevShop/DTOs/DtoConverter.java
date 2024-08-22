package net.revature.RevShop.DTOs;

import net.revature.RevShop.Models.*;

import java.util.List;
import java.util.Set;

public class DtoConverter {

//    public static NotificationDto toNotificationDto(Notification notification) {
//        NotificationDto dto = new NotificationDto();
//        dto.setNotificationId(notification.getNotificationId());
//        dto.setUserId(notification.getUser().getUserId());
//        dto.setType(notification.getType().toString());
//        dto.setMessage(notification.getMessage());
//        dto.setRead(notification.getRead());
//        dto.setCreatedAt(notification.getCreatedAt());
//        return dto;
//
//    }
    public static OrderItemDto toOrderItemDto(OrderItem orderItem) {
        OrderItemDto orderItemDto = new OrderItemDto();
        orderItemDto.setOrderItemId(orderItem.getOrderItemId());
        orderItemDto.setProductId(orderItem.getProduct().getProductId());
        orderItemDto.setProductName(orderItem.getProduct().getName());
        orderItemDto.setQuantity(orderItem.getQuantity());
        orderItemDto.setPrice(orderItem.getUnitPrice());
        return orderItemDto;
    }



    public static OrderDto toOrderDto(Order order) {
        OrderDto orderDto = new OrderDto();
        orderDto.setOrderId(order.getOrderId());
        orderDto.setUserId(order.getBuyer().getUserId());
        orderDto.setOrderDate(order.getCreatedAt());
        orderDto.setStatus(order.getOrderStatus());
        orderDto.setTotalAmount(order.getOrderItems().stream()
                .mapToDouble(item -> item.getUnitPrice() * item.getQuantity())
                .sum());

        List<OrderItemDto> orderItemDtos = order.getOrderItems().stream()
                .map(DtoConverter::toOrderItemDto)
                .toList();
        orderDto.setOrderItems(orderItemDtos);

        return orderDto;
    }



}
