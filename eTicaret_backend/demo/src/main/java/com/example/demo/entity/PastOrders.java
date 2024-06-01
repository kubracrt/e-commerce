package com.example.demo.entity;

import java.sql.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="pastOrders")
@Data
public class PastOrders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(name = "kisi_id") 
    private Long kisiId;
    private String urun_Aciklamasi;
    private String urunAdi;
    private String tutar;
    private Date tarih;

   public Long getId(){
    return id;
   }

   public Long getKisiId(){
    return kisiId;
   }

   public String geturunAciklamasi(){
    return urun_Aciklamasi;
   }

   public String getUrunAdi(){
    return urunAdi;
   }

   public String getTutar(){
    return tutar;
   }

   public Date getTarih(){
    return tarih;
   }

   public void setId(Long id){
    this.id=id;
   }

   public void setUrunAciklamasi(String urun_Aciklamasi){
    this.urun_Aciklamasi=urun_Aciklamasi;
   }

   public void setKisiId(Long kisiId){
    this.kisiId=kisiId;
   }

   public void setUrunAdi(String urunAdi){
    this.urunAdi=urunAdi;
   }

   public void setTutar(String tutar){
    this.tutar=tutar;
   }

   public void setTarih(Date tarih){
    this.tarih=tarih;
   }
    
}
