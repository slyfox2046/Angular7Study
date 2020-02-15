import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient} from "@angular/common/http";

import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DownloaderService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // #docregion getTextFile
  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename, { responseType: 'text' })
      .pipe(
        tap( // Log the result or error
          data => this.log(filename, data),
          error => this.logError(filename, error)
        )
      );
  }
  // #enddocregion getTextFile

  private log(filename: string, data: string) {
    const message = `DownloaderService downloaded "${filename}" and got "${data}".`;
    console.log(message);
    this.messageService.add(message);
  }

  private logError(filename: string, error: any) {
    const message = `DownloaderService failed to download "${filename}"; got error "${error.message}".`;
    console.error(message);
    this.messageService.add(message);
  }
}
