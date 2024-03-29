import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    //设置请求头
    const token = window.localStorage.getItem('auth_token');
    const authReq = req.clone({ setHeaders: { 'X-Access-Token': token } });
    return next.handle(authReq);
  }
}