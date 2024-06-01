package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Comment;

import com.example.demo.repository.CommentRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class CommentController {

    @Autowired
    private CommentRepository commentRepository;


    @PostMapping("/comment")
    Comment newComment (@RequestBody Comment newComment){
        return commentRepository.save(newComment);
    }

    @GetMapping("/comments")
    public List <Comment> getAllComment(){
        return commentRepository.findAll();
    }

    @GetMapping("/comment/{urun_id}")
   public List<Comment> getCommentByUrunId(@PathVariable Long urun_id) {
     return commentRepository.findByUrunId(urun_id);
   }
    

}
