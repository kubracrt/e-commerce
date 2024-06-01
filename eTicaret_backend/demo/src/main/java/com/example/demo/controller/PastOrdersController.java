package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.PastOrders;
import com.example.demo.exception.PastOrderNotFoundException;
import com.example.demo.repository.PastOrderRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PastOrdersController {

    @Autowired
    private PastOrderRepository pastOrderRepository;
     
    @PostMapping("/past")
    PastOrders newPastOrders(@RequestBody PastOrders newPastOrders){
        return pastOrderRepository.save(newPastOrders);
    }

    @GetMapping("/pastOrder")
    public List<PastOrders> getAllPastOrders(){
        return pastOrderRepository.findAll();
    }

    @GetMapping("/pastOrder/{kisiId}")
    public List<PastOrders> getPastOrdersByKisiId(@PathVariable Long kisiId) {
    List<PastOrders> pastOrders = pastOrderRepository.findByKisiId(kisiId);
        if (pastOrders.isEmpty()) {
            throw new PastOrderNotFoundException(kisiId);
        }
        return pastOrders;
    }

}

