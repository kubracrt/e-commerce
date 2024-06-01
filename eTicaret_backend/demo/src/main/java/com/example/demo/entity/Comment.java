
package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "comment")
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String comment;
    private int rating;
    private int urun_id;

    public Long getId(){
        return id;
    }

    public String getComment(){
        return comment;
    }

    public int getRating(){
        return rating;
    }

    public int getUrunId(){
        return urun_id;
    }

    public void setId(Long id){
        this.id=id;
    }

    public void setComment(String comment){
        this.comment=comment;
    }
    
    public void setRating(int rating){
        this.rating=rating;
    }

    public void setUrunId(int urun_id){
        this.urun_id=urun_id;
    }
}
