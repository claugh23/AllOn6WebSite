import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactModel } from 'src/app/Interfaces/ContactInformation';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private ServerEndpoint:string = "https://allon6server.herokuapp.com/api/Emails";
  constructor(private HttpRequest:HttpClient) { }

  PostContactInformation(information:ContactModel):Observable<ContactModel>{

    return this.HttpRequest.post<ContactModel>(this.ServerEndpoint,information);
  }
}
