package com.goldman.brothers.matche.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class SampleController {
 
    @RequestMapping("hello")
    private String hello() {
        return "Hello, Spring boot";
    }

}