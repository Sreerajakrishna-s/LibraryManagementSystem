import { Component } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent {
  podcastList: any[] = [
    {
      title: 'Cap-o-rushes',
      description: 'Cap-o-Rushes is a traditional English fairy tale about a mistreated girl who disguises herself as Cap-o\'-Rushes. She finds refuge in the service of a wealthy lord and eventually reveals her true identity. The story highlights themes of perseverance, inner strength, and the transformative power of identity. Variations of this tale exist in different cultures under names like "Donkeyskin" and "Allerleirauh." It has inspired adaptations in literature, theater, and film, showcasing its enduring appeal in folklore.',
      imageUrl: 'assets/download.jpg',
      audioSrc: 'assets/audio.mp3',
      author:' by Winifred Finlay',
      isPlaying: false
    },
    {
      title: 'The Lion and the Mouse',
      description: 'The Lion and the Mouse is a classic Aesop fable. A lion generously spares a mouse it was about to kill. The mouse promise to repay the lion some day.',
      imageUrl: 'assets/images.jpg',
      audioSrc: 'assets/cap-o-rushes-storynory.mp3',
      author:' by Aesop',
      isPlaying: false
    },
    {
      title: 'Hansel and gratel',
      description: 'Hansel and Gretel are siblings who are abandoned in a forest and fall into the hands of a witch who lives in a gingerbread, cake, and candy house. The witch, who has cannibalistic intentions, intends to fatten Hansel before eventually eating him.',
      imageUrl: 'assets/hansel.jpg',
      audioSrc: 'assets/cap-o-rushes-storynory.mp3',
      isPlaying: false
    },
    {
      title: 'The Ants and the Grasshopper',
      description: 'Description of Podcast 2',
      imageUrl: 'assets/ant.jpg',
      audioSrc: 'assets/cap-o-rushes-storynory.mp3',
      author:' by Aesop',
      isPlaying: false
    }
  ];

  selectedPodcast: any = null;

  constructor() {}

  playPodcast(podcast: any) {
    this.podcastList.forEach((p: any) => {
      p.isPlaying = false;
    });
    podcast.isPlaying = true;
    this.selectedPodcast = podcast;

    console.log('Playing podcast:', podcast.title);
    console.log('Audio source:', podcast.audioSrc);
  }
}
