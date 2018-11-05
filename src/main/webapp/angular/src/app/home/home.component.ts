import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title: string = 'map test';
  lat: number = 6.872433;
  lng: number = 79.860608;
  zoom: number = 8;

  markers: Marker[] = [
    /*{
      name: 'home',
      lat: 7.872433,
      lng: 80.860608,
      draggable: true
    },
    {
      name: 'company',
      lat: 6.872433,
      lng: 78.860608,
      draggable: false
    }*/
  ]

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    
    this.loadAllMarkers()
  }

  loadAllMarkers(){
    let markers = this.homeService.getAllMarkers().subscribe(markers => {
      console.log("these markers "+markers)
      this.markers = markers
    })
    
  }

  private mapClicked($event:any){
    let lat = $event.coords.lat
    let lng = $event.coords.lng
    let newMarker: Marker = 
    {
      name:"new marker",
      lat: lat,
      lng: lng,
      draggable: true
    }
    this.markers.push(newMarker);
    this.homeService.saveMarker(newMarker).subscribe()
  }

}
interface Marker{
  name?: string,
  lat: number,
  lng: number,
  draggable: boolean
}