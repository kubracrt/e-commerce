package com.example.demo.exception;

public class ProductsNotFoundException extends RuntimeException {
    public ProductsNotFoundException(Long id){
        super("bu id ile kayıtlı ürün bulunamadı"+id);
    }
}
