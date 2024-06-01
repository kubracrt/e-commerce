package com.example.demo.exception;

public class QuestionNotFoundException extends RuntimeException {
    public QuestionNotFoundException(Long id){
        super("bu id ile soru bulunamadı"+id);
    }
}
