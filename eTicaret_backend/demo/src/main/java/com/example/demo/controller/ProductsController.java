package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Products;
import com.example.demo.exception.ProductsNotFoundException;
import com.example.demo.repository.ProductsRepository;


@RestController
@CrossOrigin("http://localhost:3000")
public class ProductsController {
    @Autowired
    private ProductsRepository productsRepository;
  
    @SuppressWarnings("null")
    @PostMapping("/product")
    Products newProduct(@RequestBody Products newProduct){
        return productsRepository.save(newProduct);
    }
    
    @GetMapping("/category/{id}")
    List<Products> getProductsByCategoryId(@PathVariable Long id) {
     return productsRepository.findByCategoryId(id);
     }
    
    @GetMapping("/products")
    List<Products> getAllProducts(){
        return productsRepository.findAll();
    }

    @GetMapping("/products/{id}")
    Products getProductsById(@PathVariable Long id){
        return productsRepository.findById(id).
        orElseThrow(()->new ProductsNotFoundException(id));
    }

    @PutMapping("/products/{id}")
    Products updateProducts(@RequestBody Products newProducts,@PathVariable Long id){
        return productsRepository.findById(id)
        .map(products-> {
            products.setProductName(newProducts.getProductName());
            products.setName(newProducts.getName());
            products.setDescription(newProducts.getDescription());
            products.setPrice(newProducts.getPrice());
            products.setİsImportant(newProducts.getIsImportant());
            products.setImg(newProducts.getImg());
            return productsRepository.save(products);
        }).orElseThrow(()->new ProductsNotFoundException(id));
    }

    @DeleteMapping("/product/{id}")
    String deleteUser(@PathVariable Long id){
        if(!productsRepository.existsById(id)){
            throw new ProductsNotFoundException(id);
        }
        productsRepository.deleteById(id);
        return "Silme başarılı";

    }


    
    }



