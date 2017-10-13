/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.web.mapap.service.impl;
import com.web.mapap.model.Marker;
import com.web.mapap.repo.MarkerRepository;
import com.web.mapap.service.MarkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author Kalana Shalitha
 */
@Service
@Transactional
public class MarkerServiceImpl<Entity extends Marker, ID extends String> extends BaseServiceImpl<Marker, String> implements MarkerService<Entity, ID> {

    private MarkerRepository<Marker, String> markerRepository;

    @Override
    public Optional<Marker> getMarker(ID id) {
        return super.getEntity(id);
    }

    public void saveMarker(Marker marker){
        super.createEntity(marker);
    }

    @Override
    public Optional<List<Marker>> getAllMarkers() {
        return super.getAllEntities();
    }
}
