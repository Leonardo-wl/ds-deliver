package com.leonardoalonso.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.leonardoalonso.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
