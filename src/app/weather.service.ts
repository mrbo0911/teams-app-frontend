import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // private apiUrl = 'http://localhost:5000/api/weatherforecast';

  private apiUrl = 'https://dotnet-getting-started-1-aca479869799.herokuapp.com/api/weatherforecast';

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
