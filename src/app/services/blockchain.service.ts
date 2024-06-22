import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  private apiUrl = 'http://192.168.1.15:8000'; // Ajuste a URL da sua API

  constructor(private http: HttpClient) {}

  getBlocks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/blockchain/blocks`);
  }

  getBlock(blockId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/blockchain/blocks/${blockId}`);
  }

  getNodes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/blockchain/nodes`);
  }
}
