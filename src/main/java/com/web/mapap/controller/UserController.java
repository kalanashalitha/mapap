package com.web.mapap.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Kalana Shalitha on 10/22/2017.
 */

@RequestMapping("api/user")
@Controller
public class UserController {

    @RequestMapping(method = RequestMethod.POST,value ="/authenticate")
    public void authenticateUser(@RequestBody String idToken){
        System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"+idToken);
    }
}
