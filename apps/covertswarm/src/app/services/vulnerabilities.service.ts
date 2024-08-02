import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { CisaVulnerabilities } from '@covertswarm/types';

@Injectable({
  providedIn: 'root',
})
export class VulnerabilitiesService {
  private http = inject<HttpClient>(HttpClient);

  public getCisaVulnerabilities(): Observable<CisaVulnerabilities> {
    // TODO - move this to environment file
    const url = '/api/cisa_vulnerabilities';
    return this.http.get<CisaVulnerabilities>(url);
  }
}
