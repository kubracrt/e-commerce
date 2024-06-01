package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Category;
import com.example.demo.repository.CategoryRepository;


@RestController
@CrossOrigin("http://localhost:3000")
public class CategoryController {
    
    @Autowired
    private CategoryRepository categoryRepository;

   @GetMapping("/category")
    List <Category> getAllCategories(){
        return categoryRepository.findAll();
    }
    
}





