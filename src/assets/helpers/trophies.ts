interface Trophies {
  id: number;
  name: string;
  champion: number;
  maxWidth: number;
  image: string;
}

const TROPHIES: Trophies[] = [
  {
    id: 1,
    name: "Conmebol Libertadores",
    champion: 6,
    maxWidth: 160,
    image: "src/assets/images/trophies/copa-lib.png",
  },
  {
    id: 2,
    name: "Liga Profesional de Fútbol",
    champion: 35,
    maxWidth: 160,
    image: "src/assets/images/trophies/copa-lpf.png",
  },
  {
    id: 3,
    name: "Conmebol Sudamericana",
    champion: 2,
    maxWidth: 115,
    image: "src/assets/images/trophies/copa-sud.png",
  },
  {
    id: 4,
    name: "Conmebol Recopa",
    champion: 4,
    maxWidth: 115,
    image: "src/assets/images/trophies/copa-recopa.png",
  },
  {
    id: 5,
    name: "Copa Argentina",
    champion: 4,
    maxWidth: 115,
    image: "src/assets/images/trophies/copa-arg.png",
  },
];

export { TROPHIES };
