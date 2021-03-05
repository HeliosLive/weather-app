import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, mergeMap } from 'rxjs/operators';

export abstract class BaseService {
  constructor(protected http: HttpClient) {}

  protected get<T>(endpoint: string, queryParams?: HttpParams): Observable<T> {
    return this.http
      .get<T>(endpoint, { params: queryParams })
      .pipe(
        retry(1), // try at least one more time in case of api network load
        mergeMap(this.handleResponse),
        catchError(this.handleError)
      );
  }

  protected post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(endpoint, body).pipe(
      retry(1), // try at least one more time in case of api network load
      mergeMap(this.handleResponse),
      catchError(this.handleError)
    );
  }

  protected put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(endpoint, body).pipe(
      retry(1), // try at least one more time in case of api network load
      mergeMap(this.handleResponse),
      catchError(this.handleError)
    );
  }

  protected delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(endpoint).pipe(
      retry(1), // try at least one more time in case of api network load
      mergeMap(this.handleResponse),
      catchError(this.handleError)
    );
  }

  handleResponse(response: any) {
    if (response) {
      return of(response);
    } else {
      return throwError(response);
    }
  }

  handleError(response: any) {
    let errorMessage = '';
    if (response.error && response.error.error) {
      errorMessage = `Error code ${response.error.error.code}: ${response.error.error.description}`;
    } else if (response.code && response.description) {
      errorMessage = `Error code ${response.code}: ${response.description}`;
    } else if (response.code && response.message) {
      errorMessage = `Error code ${response.code}: ${response.message}`;
    } else {
      errorMessage = `${response.status}: ${response.message}`;
    }

    return throwError(errorMessage);
  }
}
