package com.example.extreme.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class RootController {

    @GetMapping("")
    fun getRoot(@RequestParam("q") q: String?): String {
        println(q)
        return ""
    }
}