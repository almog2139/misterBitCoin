import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

 loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}
}
