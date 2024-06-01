package com.example.demo.exception;

public class CommentNotFoundException extends RuntimeException {
    public CommentNotFoundException(Long id){
        super("Bu üründe yorum yok");
    }
}
