import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // use performance.now() to measure time duration in milliseconds
        const start = performance.now();
        // afficher l'url cible
        console.log('url cible: ' + req.url)
        // 
    return next.handle(req).pipe(map(result => {
    console.log('took ' + (performance.now() - start) + 'ms');
    return result;
  }))}}
