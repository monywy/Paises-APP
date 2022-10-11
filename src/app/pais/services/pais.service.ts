import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn:'root'
})

export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) {}

  
  buscarPais( termino:string ): Observable<Country[]>{ //Tipado de la interfaz pais de tipo country, es un arreglo
    const url = `${this.apiUrl}/name/${ termino }`
    return this.http.get<Country[]>(url);
    ///Se puede realizar una validación directamente desde la petición para atrapar el error con .pipe

    // return this.http.get(url)
    // .pipe(
    //  catchError ( err => of([])) //atrapa del tipo observable y retorna un arreglo vacío
    // )

  }
  // Método para buscar por capital 
  buscarCapital( termino:string ): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${ termino }`
    return this.http.get<Country[]>(url);

  }

  // Método para buscar pais por alpha
  getPaisPorAlpha( id:string ): Observable<Country[]>{

    const url = `${this.apiUrl}/alpha/${ id }`
    return this.http.get<Country[]>(url);

  }

}