import { Clock } from './clock';
import { Marquee } from './marquee';
import { Grid } from './grid';

import { reveal } from './helpers/reveal';

const clock = new Clock('.hero_clock');
const marqueeElements = document.querySelectorAll(".marquee");
marqueeElements.forEach((marqueeElements) => new Marquee(marqueeElements));
const grid = new Grid();

reveal();
