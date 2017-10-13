import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  constructor(private http:HttpClient) { }

  public saveMarker(marker:Marker){
  	return this.http.post('/api/marker/save-marker',marker)
  }

  public getAllMarkers():Observable<Marker[]>{
    return this.http.get<Marker[]>('/api/marker/all-markers')
  }


}
interface Marker{
  name?: string,
  lat: number,
  lng: number,
  draggable: boolean
}