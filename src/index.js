import { Clock } from './clock';
import { Marquee } from './marquee';
import { Grid } from './grid';
import { Heading } from './heading';

import { reveal } from './helpers/reveal';

const clock = new Clock('.hero_clock');
const marqueeElements = document.querySelectorAll(".marquee");
marqueeElements.forEach((marqueeElements) => new Marquee(marqueeElements));
const grid = new Grid();

document.fonts.ready.then(() => {
  console.log('Fonts are loaded here');
  const heading = new Heading(document.querySelector('.hero_h1'));
})
reveal();
