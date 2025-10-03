export const studies = [
  {
    title: "Grado en Data Science y Business Analytics",
    institution: "ESIC University",
    description:
      "Programa interdisciplinar que combina análisis de datos, programación (Python, SQL), fundamentos de negocio y visualización (Power BI, Excel avanzado). Incluye formación en machine learning, EDA, Big Data y Microsoft Azure",
    tags: [
      "Python",
      "SQL",
      "Power BI",
      "Excel",
      "Machine Learning",
      "EDA",
      "Apache Spark",
      "Azure",
      "Big Data",
      "Estructuras de datos"
    ],
  },
  {
    title: "Técnico Superior en Marketing y Publicidad",
    institution: "IES Luis Buñuel, Alcorcón",
    description:
      "Formación centrada en estrategias de marketing, investigación de mercados, comunicación digital y gestión publicitaria. Complementada con aprendizaje autodidacta en Lean Startup, sesgos cognitivos aplicados al consumidor e innovación basada en feedback rápido",
    tags: [
       "Marketing Digital",
      "Publicidad",
      "Investigación de mercados",
      "Comunicación",
      "Lean Startup",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

