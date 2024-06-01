package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "question")
@Data
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String question;
    private Long urun_id;

    public Long getId(){
        return id;
    }
    public String getQuestion(){
        return question;
    }
   
    public Long getUrunId(){
        return urun_id;
    }
    

    public void setQuestion(String question){
        this.question=question;
    }
   
    public void setId(Long id){
        this.id=id;
    }

    
    public void setUrunId(Long urun_id){
        this.urun_id=urun_id;
    }
}
