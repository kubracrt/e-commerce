
package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.demo.entity.User;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repository.UserRepository;



@Configuration
@EnableWebMvc
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    
    @Autowired
    private UserRepository userRepository;

    @SuppressWarnings("null")
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
    
    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @SuppressWarnings("null")
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id).
        orElseThrow(()->new UserNotFoundException(id));
    }

    @SuppressWarnings("null")
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id){
        return userRepository.findById(id)
        .map(user-> {
            user.setUsername(newUser.getUsername());
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            return userRepository.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }

    @SuppressWarnings("null")
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id"+id+"has been deleted success.";

    }


    @PostMapping("/checkUser")
    public ResponseEntity<Map<String, Object>> checkUserByEmail(@RequestBody Map<String, String> body) {
    String email = body.get("email");
    boolean isUserRegistered = userRepository.existsByEmail(email);
    
    Map<String, Object> responseBody = new HashMap<>();
    responseBody.put("status", isUserRegistered);
    responseBody.put("email", email);
    
    if (isUserRegistered) {
        User user = userRepository.findByEmail(email);
        responseBody.put("username", user.getName());
    } else {
        responseBody.put("username", null);
    }
    
    return ResponseEntity.ok(responseBody);
}

    

    

    

}


