import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  gameInstance: any;
  progress = 0;
  isReady = false;
  constructor() { }

  ngOnInit() {
    const loader = (window as any).UnityLoader;
    this.gameInstance = loader.instantiate('gameContainer', `/assets/Build/SodaBottle.json`, {
      onProgress: (gameInstance: any, progress: number) => {
        this.progress = progress;
        if (progress === 1) {
          this.isReady = true;
        }
      }
    });
    console.log(this.gameInstance);
  }
  ngOnDestroy(): void {
    this.gameInstance.Quit();
  }

  // startStopRotating() {
  //   this.gameInstance.SendMessage();
  // }

  // startStopAnimation() {
  //   this.gameInstance.SendMessage('Director', 'StartStopAnimation');
  // }

  // setDistance(distance: number) {
  //   this.gameInstance.SendMessage('Director', 'SetDistance', distance);
  // }

}
