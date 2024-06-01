package com.example.demo.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Bu id ile kayıtlı kullanıcı bulunamadı"+id);
    }
}
