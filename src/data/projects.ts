// src/data/projects.ts
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import SqlIcon from '../assets/logos/SQL-logo.svg?raw';
import AzureIcon from '../assets/logos/Azure-logo.svg?raw';
import SparkIcon from '../assets/logos/Spark-logo.svg?raw';
import ExcelIcon from '../assets/logos/Excel-logo.svg?raw';
import PowerBIIcon from '../assets/logos/PowerBI-logo.svg?raw';

export const projects = [
  {
    title: "Cancelaciones hoteleras: dashboard analítico y modelo predictivo",
    techStack: "Python • Streamlit • LightGBM • SHAP • Plotly • Docker • SHAP",
    description:
      "Análisis exploratorio y modelo de clasificación sobre reservas hoteleras para identificar factores de cancelación y estimar su probabilidad. Dashboard interactivo de 7 vistas con simulador individual e interpretabilidad SHAP global y local.",
    ctaText: "Ver Demo →",
    ctaLink: "https://hotels-bmu9.onrender.com",
    icon: PythonIcon,
  },
  {
    title: "Análisis de Productos de Supermercado con NLP (en curso)",
    techStack: "Python • Selenium • NLP • Pandas • JSON • Beautifulsoup",
    description:
      "Proyecto de Procesamiento del Lenguaje Natural desarrollado para la asignatura de Chatbots. Fase 1: extracción y limpieza de textos de productos desde varias webs. Fase 2: modelado y clasificación del contenido nutricional. Fase 3: implementación de un buscador semántico basado en embeddings y técnicas RAG.",
    ctaText: "Ver progreso en GitHub →",
    ctaLink: "https://github.com/minivillalba4/proyecto_chatbots",
    icon: PythonIcon,
  },
  {
    title: "Analisis Sostenibilidad PySpark",
    techStack: "Big Data • Spark • Parquet • PySpark • Sostenibilidad",
    description:
      "EDA enfocado en sostenibilidad empresarial utilizando PySpark para procesamiento distribuido de Big Data. El sistema genera tablas analíticas finales sobre impacto ambiental corporativo y beneficios de proyectos energéticos, facilitando la toma de decisiones en sostenibilidad empresarial mediante métricas cuantificables",
    ctaText: "Ver en GitHub →",
    ctaLink: "https://github.com/minivillalba4/bigdata-sostenibilidad/tree/main",
    icon: SparkIcon,
  },
];

