package com.web.mapap.model;

import javax.persistence.*;

/**
 * Created by Kalana Shalitha on 8/15/2017.
 */
@Entity
@Table(name="marker")
public class Marker {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private double lat;
    private double lng;
    private String name;
    private boolean draggable;


    public double getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Marker{" +
                "id=" + id +
                ", lat='" + getLat() + '\'' +
                ", lng='" + getLng() + '\'' +
                ", name='" + name + '\'' +
                ", draggable=" + draggable +
                '}';
    }

    public boolean isDraggable() {
        return draggable;
    }

    public void setDraggable(boolean draggable) {
        this.draggable = draggable;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }
}
