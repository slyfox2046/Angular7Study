import { Component, OnInit } from '@angular/core';
import { DownloaderService } from './downloader.service';

@Component({
  selector: 'app-downloader-component',
  templateUrl: './downloader-component.component.html',
  styleUrls: ['./downloader-component.component.css']
})
export class DownloaderComponentComponent implements OnInit {
  contents: string;
  constructor(private downloaderService:DownloaderService) { }

  ngOnInit() {
  }
  download() {
    this.downloaderService.getTextFile('assets/textfile.txt')
      .subscribe(results => this.contents = results);
  }

}
