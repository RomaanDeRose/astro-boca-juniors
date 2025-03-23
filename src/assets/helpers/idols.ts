interface Idols {
  id: number;
  name: string[];
  image: string;
}

const IDOLS: Idols[] = [
  {
    id: 1,
    name: ["Blas", "Armando", "Giunta"],
    image: "src/assets/images/idols/giunta.jpg",
  },
  {
    id: 2,
    name: ["Carlos", "Alberto", "Tevez"],
    image: "src/assets/images/idols/tevez.jpg",
  },
  {
    id: 3,
    name: ["Juan", "Roman", "Riquelme"],
    image: "src/assets/images/idols/riquelme.jpg",
  },
  {
    id: 4,
    name: ["Angel", "Clemente", "Rojas"],
    image: "src/assets/images/idols/rojitas.jpg",
  },
  {
    id: 5,
    name: ["Guillermo", "Barros", "Schelotto"],
    image: "src/assets/images/idols/guillermo.jpg",
  },
  {
    id: 6,
    name: ["Diego", "Armando", "Maradona"],
    image: "src/assets/images/idols/maradona.jpg",
  },
  {
    id: 7,
    name: ["Martin", "Palermo"],
    image: "src/assets/images/idols/palermo.jpg",
  },
  {
    id: 8,
    name: ["Carlos", "Bianchi"],
    image: "src/assets/images/idols/bianchi.jpg",
  },
];

export { IDOLS };
