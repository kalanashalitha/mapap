package com.web.mapap.repo;

import com.web.mapap.model.User;

import javax.swing.text.html.parser.Entity;

@org.springframework.stereotype.Repository
public interface UserRepository<Entity extends User, ID extends String> extends Repository<Entity, String>{

}
