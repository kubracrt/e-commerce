package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="category")
@Data
public class Category {
    
    @Id
    private Long id;
    private String name;
    private String products_id;
    
    public void setCategoryName(String Name){
        this.name=Name;
    }
    public String getName(){
        return name;
    }

}
