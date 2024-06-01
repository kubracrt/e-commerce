package com.example.demo.repository;

import com.example.demo.entity.Comment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
     @Query("SELECT q FROM Comment q WHERE q.urun_id = :urun_id")
    List<Comment> findByUrunId(@Param("urun_id") Long urun_id);

}
