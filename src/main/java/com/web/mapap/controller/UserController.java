package com.web.mapap.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Kalana Shalitha on 10/22/2017.
 */
@Controller
@RequestMapping("api/user")
public class UserController {

    @RequestMapping(method = RequestMethod.GET,value ="/signin")
    void signIn(){

    }
}