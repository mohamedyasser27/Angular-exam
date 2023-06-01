import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageManagerService {
  getItems(key: string, defaultValue: any): any {
    const data = JSON.parse(
      localStorage.getItem(key) ?? JSON.stringify(defaultValue)
    );
    this.setItems(key, data);
    return data;
  }
  setItems(key: string, newValue: any) {
    return localStorage.setItem(key, JSON.stringify(newValue));
  }
}
