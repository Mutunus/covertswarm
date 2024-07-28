import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CisaVulnerabilities } from '@covertswarm/types';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VulnerabilitiesService {
  private http = inject<HttpClient>(HttpClient);

  public getCisaVulnerabilities(): Observable<CisaVulnerabilities> {
    // TODO - move this to environment file
    const url = 'http://localhost:3333/api/cisa_vulnerabilities';
    return this.http.get<CisaVulnerabilities>(url);
  }
}
