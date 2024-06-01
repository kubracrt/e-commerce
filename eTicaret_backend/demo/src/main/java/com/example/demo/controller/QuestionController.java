package com.example.demo.controller;

import com.example.demo.entity.Answer;
import com.example.demo.entity.Question;
import com.example.demo.exception.QuestionNotFoundException;
import com.example.demo.repository.AnswerRepository;
import com.example.demo.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class QuestionController {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private AnswerRepository answerRepository;

    @PostMapping("/question")
    public Question newQuestion(@RequestBody Question newQuestion) {
        return questionRepository.save(newQuestion);
    }

    @GetMapping("/questions")
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    @GetMapping("/question/{id}")
    public Question getQuestionById(@PathVariable Long id) {
        return questionRepository.findById(id)
                .orElseThrow(() -> new QuestionNotFoundException(id));
    }

    @GetMapping("/questions/urun/{urun_id}")
    public List<Question> getQuestionsByUrunId(@PathVariable Long urun_id) {
        return questionRepository.findByUrunId(urun_id);
    }

    @GetMapping("/answers/{questionId}")
    public List<Answer> getAnswersByQuestionId(@PathVariable Long questionId) {
        return answerRepository.findByQuestionId(questionId);
    }

    @PostMapping("/answer/{questionId}")
    public Answer answerQuestion(@PathVariable Long questionId, @RequestBody Answer answerData) {
        try {
            Question question = questionRepository.findById(questionId)
                    .orElseThrow(() -> new QuestionNotFoundException(questionId));
            Answer answer = new Answer();
            answer.setAnswerText(answerData.getAnswerText());
            answer.setQuestion(question);
            return answerRepository.save(answer);
        } catch (QuestionNotFoundException ex) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Soru Bulunamadı", ex);
        } catch (Exception ex) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Hata var", ex);
        }
    }
}

