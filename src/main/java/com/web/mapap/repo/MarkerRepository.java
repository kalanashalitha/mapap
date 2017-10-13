/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.web.mapap.repo;

import com.web.mapap.model.Marker;

import java.util.List;
import java.util.Optional;


/**
 *
 * @author Kalana Shalitha
 */
@org.springframework.stereotype.Repository
public interface MarkerRepository<Entity extends Marker, ID> extends Repository<Entity, String>{

}
