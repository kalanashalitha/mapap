package com.web.mapap.service.impl;

import com.web.mapap.model.User;
import com.web.mapap.repo.UserRepository;
import com.web.mapap.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service@Transactional
public class UserServiceImpl<Entity extends User,ID extends String> extends BaseServiceImpl<User,String> implements UserService<Entity,ID> {

    private UserRepository<Entity,ID> userRepository;

    @Override
    public boolean isUserExist(ID userId) {
        //return userRepository.existsById(userId);
        return true;
    }

    @Override
    public Optional<User> getUser(ID userId) {
        System.out.println("ccccccccccccccccccccccccccccccccccccc"+userId);
        Optional<User> entity = super.getEntity(userId);
        System.out.println(entity);
        return entity;
    }

    @Override
    public User createUser(Entity user) {
        return super.createEntity(user);
    }
}
