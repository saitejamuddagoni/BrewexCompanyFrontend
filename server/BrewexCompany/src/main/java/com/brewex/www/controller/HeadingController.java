package com.brewex.www.controller;

import com.brewex.www.model.Heading;
import com.brewex.www.repo.HeadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // for React 
public class HeadingController {

    @Autowired
    private HeadingRepository headingRepo;

    // GET 
    @GetMapping("/heading")
    public Heading getHeading() {
        List<Heading> headings = headingRepo.findAll();
        return headings.isEmpty() ? new Heading() : headings.get(headings.size() - 1);
    }

    // POST 
    @PostMapping("/heading")
    public ResponseEntity<String> saveHeading(@RequestBody Heading heading) {
        headingRepo.save(heading);
        return ResponseEntity.status(HttpStatus.CREATED).body("Saved");
    }
}
