package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "products")
@Data
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private Float price;
    private String img;
    private boolean isImportant;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;
   
    public Long getIdProduct(){
        return id;
    }
    public String getProductName(){
       return name;
    }
    public String getDescription(){
        return description;
    }
    public Float getPrice(){
        return price;
    }
    public boolean getIsImportant(){
        return isImportant;
    }
    public String getImg(){
        return img;
    }
    public void setIdProduct(Long id){
        this.id=id;
    }
    public void setProductName(String Name){
        this.name=Name;
    }
    public void setİsImportant(Boolean Important){
        this.isImportant=Important;
    }
    public void setDescription(String Description){
        this.description=Description;
    }
    public void getPrice(Float Price){
        this.price=Price;
    }
    public void getImg(String Img){
        this.img=Img;
    }
  

    
}
