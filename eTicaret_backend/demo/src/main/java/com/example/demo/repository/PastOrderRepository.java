package com.example.demo.repository;

import com.example.demo.entity.PastOrders;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;



public interface PastOrderRepository extends JpaRepository<PastOrders, Long> {
    List<PastOrders> findByKisiId(Long kisiId);
}

