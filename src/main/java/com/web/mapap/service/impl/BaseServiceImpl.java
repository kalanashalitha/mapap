/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.web.mapap.service.impl;

import com.web.mapap.repo.Repository;
import com.web.mapap.service.BaseService;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 *
 * @author Kalana Shalitha
 */
@Service
@Transactional
public class BaseServiceImpl<Entity, ID extends String> implements BaseService<Entity, ID>{

    @Autowired
    private Repository<Entity,ID> repository;
    
    @Override
    public Optional<Entity> getEntity(ID id) {
        System.out.println("gggggggggggg"+id);
        System.out.println(repository);
        Optional<Entity> byId = repository.findById(id);
        System.out.println(byId);return byId;
    }

    @Override
    public Entity createEntity(Entity entity) {
        return repository.save(entity);
    }

    @Override
    public void modifyEntity(Entity entity) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void deleteEntity(Entity entity) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Optional<List<Entity>> getAllEntities() {
        List<Entity> all = repository.findAll();
        return Optional.of(all);
    }

    @Override
    public Optional getAllActiveEntities() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Optional getAllInactiveEntities() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
