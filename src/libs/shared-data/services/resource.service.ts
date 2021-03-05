import { BaseService } from './base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Resource {
  id?: number;
}

export class ResourceService<T extends Resource> extends BaseService {
  url: string;
  searchUrl: string;

  private data$: BehaviorSubject<T[] | null> = new BehaviorSubject([] as any);
  data = this.data$.asObservable();

  private queryParams$: BehaviorSubject<any> = new BehaviorSubject({
    page: 1,
    size: 10,
    totalPages: 0,
    sortBy: 'audit.createdDate',
    sort: 'desc',
    totalElements: 0,
    queryText: '',
    searchBy: '',
    startDate: null,
    endDate: new Date().toISOString(),
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

  // crud operations below : list-get , create-post , update-put and delete-delete
  list(): void {
    this.data$.next([]);
    let queryParams = new HttpParams();
    queryParams = queryParams.set(
      'page',
      this.queryParams$.value.page.toString()
    );
    queryParams = queryParams.set(
      'size',
      this.queryParams$.value.size.toString()
    );
    queryParams = queryParams.set('sort', `${this.queryParams$.value.sort}`);
    queryParams = queryParams.set(
      'sortBy',
      `${this.queryParams$.value.sortBy}`
    );
    if (this.queryParams$.value.queryText) {
      queryParams = queryParams.set(
        'queryText',
        this.queryParams$.value.queryText
      );
      queryParams = queryParams.set(
        'searchBy',
        this.queryParams$.value.searchBy
      );
    }
    if (this.queryParams$.value.startDate && this.queryParams$.value.endDate) {
      queryParams = queryParams.set(
        'startDate',
        this.queryParams$.value.startDate
      );
      queryParams = queryParams.set('endDate', this.queryParams$.value.endDate);
    }
    this.get<any>(this.url, queryParams).subscribe((response) => {
      this.queryParams$.next({
        ...this.queryParams$.value,
        ...{
          size: response[0].size,
          totalElements: response[0].total,
        },
      });
      this.data$.next(response[0]?.data);
    });
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
  setPage(page: number) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        page,
      },
    });
  }

  setSize(size: number) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        size,
      },
    });
  }

  setQueryText(queryText: string) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        queryText,
      },
    });
  }

  setSearchBy(searchBy: string) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        searchBy,
      },
    });
  }

  setSortBy(sortBy: string) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        sortBy,
      },
    });
  }

  setSort(sort: string) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        sort,
      },
    });
  }

  setStartDate(startDate: string) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        startDate,
      },
    });
  }

  setEndDate(endDate: string) {
    this.queryParams$.next({
      ...this.queryParams$.value,
      ...{
        endDate,
      },
    });
  }
}
