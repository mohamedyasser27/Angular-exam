import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageManagerService {
  getItems(key: string, defaultValue: any): any {
    return JSON.parse(
      localStorage.getItem(key) ?? JSON.stringify(defaultValue)
    );
  }
  setItems(key: string, newValue: any) {
    return localStorage.setItem(key, JSON.stringify(newValue));
  }
}
