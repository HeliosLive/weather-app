import { BaseService } from './base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IWeather } from 'src/libs/interfaces/weather.interface';

interface Resource {
  id?: number;
}

export class ResourceService<T extends Resource> extends BaseService {
  url: string;
  searchUrl: string;

  private data$: BehaviorSubject<T> = new BehaviorSubject(null as any);
  data = this.data$.asObservable();

  private queryParams$: BehaviorSubject<any> = new BehaviorSubject({
    q: '',
    appid: '',
    lat: 0,
    lon: 0,
    exclude: '',
  });
  queryParams = this.queryParams$.asObservable();

  private selected$: BehaviorSubject<any> = new BehaviorSubject(null);
  selected = this.selected$.asObservable();

  constructor(
    protected http: HttpClient,
    protected readonly resourceName: string,
    protected environment: any
  ) {
    super(http);

    const apiConfig = environment.api[resourceName];

    this.url = `${apiConfig.host}/${apiConfig.endpoint}`;
    if (apiConfig.version) {
      this.url = `${apiConfig.host}/${apiConfig.version}/${apiConfig.endpoint}`;
    }
    this.searchUrl = `${apiConfig.host}/${apiConfig.version}/search`;
  }

  // crud operations below : list-get , simpleList-get , create-post , update-put and delete-delete
  list(): void {
    // this.data$.next(null as any);
    let queryParams = new HttpParams();
    queryParams = queryParams.set(
      'lat',
      this.queryParams$.value.lat.toString()
    );
    queryParams = queryParams.set(
      'lon',
      this.queryParams$.value.lon.toString()
    );
    queryParams = queryParams.set(
      'exclude',
      this.queryParams$.value.exclude.toString()
    );
    queryParams = queryParams.set(
      'appid',
      this.queryParams$.value.appid.toString()
    );
    this.get<any>(this.url, queryParams).subscribe((response) => {
      this.data$.next(response);
    });
  }

  simpleList(): Observable<IWeather> {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('q', this.queryParams$.value.q.toString());
    queryParams = queryParams.set(
      'appid',
      this.queryParams$.value.appid.toString()
    );
    return this.get<IWeather>(this.url, queryParams);
  }

  create(resource: T): Observable<T> {
    return this.post<T>(`${this.url}`, resource);
  }

  read(id: string): Observable<T> {
    this.selected$.next(null);
    return this.get<T>(`${this.url}/${id}`).pipe(
      tap((response) => this.selected$.next(response))
    );
  }

  update(resource: T): Observable<T> {
    return this.put<T>(`${this.url}/${resource.id}`, resource).pipe(
      tap((response) => this.selected$.next(response))
    );
  }

  del(id: string): Observable<T> {
    return this.delete<T>(`${this.url}/${id}`);
  }

  // for get list operation setting query params down below
  setCity(q: string) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        q,
      },
    });
  }

  setLat(lat: number) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        lat,
      },
    });
  }

  setLon(lon: number) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        lon,
      },
    });
  }

  setExclude(exclude: string) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        exclude,
      },
    });
  }

  setApiKey(appid: string) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        appid,
      },
    });
  }

  // data reset..
  resetData(): void {
    this.data$.next(null as any);
  }

  // set test mock data..
  setData(datum: any): void {
    this.data$.next(datum as any);
  }
}
