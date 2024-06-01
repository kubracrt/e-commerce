package com.example.demo.exception;

public class PastOrderNotFoundException extends RuntimeException {
    public PastOrderNotFoundException(Long kisi_id){
        super("Geçmiş Siparişiniz Bulunamadı: " + kisi_id);
    }
}
