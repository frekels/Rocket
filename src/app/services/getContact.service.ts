import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ContactModel } from '../interfaces/contact';
import { environment } from '../../environments/environment';
import "rxjs/Rx";
@Injectable()
export class GetContactService{

    constructor(private _http: Http){

    }

    getAllContact(){//Retrieve data from sharepoint API
        return this._http.get(environment.baseURI+'contact')
        .map((response: Response) => {
            return <ContactModel[]>response.json();
        }).catch(this.handleError);
    }

    private handleError(error: Response){//Catching error
        return Observable.throw(error.statusText);
    }
}