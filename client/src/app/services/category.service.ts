import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../types/category.dto";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private _http: HttpClient) {}

  findAll(): Observable<Category[]> {
    return this._http.get<Category[]>(`${environment.apiUrl}/categories`);
  }
}
