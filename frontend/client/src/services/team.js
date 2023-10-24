const teamMembers = [
  {
    position: "Full Stack Developer",
    name: "Nara Humano",
    linkedin: "https://www.linkedin.com/in/nara-esther-humano/",
  },
  {
    position: "Backend Developer",
    name: "Mario Godoy",
    linkedin: "https://www.linkedin.com/in/mario-godoy-43927a1a5/",
  },
  {
    position: "Backend Developer",
    name: "Ezequiel Soto",
    linkedin: "https://www.linkedin.com/in/ezequiel-soto/",
  },
  {
    position: "Frontend Developer",
    name: "Joaquin Bianchi",
    linkedin: "https://www.linkedin.com/in/joaquin-bianchi-89725721a/",
  },
  {
    position: "Frontend Developer",
    name: "Tomás Echeveste Arteaga",
    linkedin: "https://www.linkedin.com/in/tomasecheveste/",
  },
  {
    position: "QA",
    name: "Emilia Quintana",
    linkedin: "https://www.linkedin.com/in/emiliaquintana/",
  },
  {
    position: "UX/UI",
    name: "Samantha Sánchez",
    linkedin:
      "https://www.linkedin.com/in/samantha-s%C3%A1nchez-carranza-5ab509264/",
  },
  {
    position: "Frontend Developer",
    name: "Alex Martín",
    linkedin: "https://www.linkedin.com/in/alexeumartin/",
  },
];

function shuffleArray(array) {
  // Crea una copia del arreglo para no modificar el original
  const shuffledArray = [...array];

  // Función de comparación aleatoria
  const randomComparator = () => Math.random() - 0.5;

  // Aplica el orden aleatorio al arreglo copiado
  shuffledArray.sort(randomComparator);

  return shuffledArray;
}

const team = shuffleArray(teamMembers);

export default team;
