package com.example.demo.exception;

public class CategoryNotFoundException extends RuntimeException {
    public CategoryNotFoundException(Long id){
        super("bu id ile kayıtlı kategori bulunamadı"+id);
    }
}
