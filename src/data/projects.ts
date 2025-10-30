// src/data/projects.ts
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import SqlIcon from '../assets/logos/SQL-logo.svg?raw';
import AzureIcon from '../assets/logos/Azure-logo.svg?raw';
import SparkIcon from '../assets/logos/Spark-logo.svg?raw';
import ExcelIcon from '../assets/logos/Excel-logo.svg?raw';
import PowerBIIcon from '../assets/logos/PowerBI-logo.svg?raw';

export const projects = [
  {
    title: "Clasificación Según nivel de Ingresos (Machine Learning)",
    techStack: "Python • Scikit-learn • Pandas • Matplotlib • Feature Engineering",
    description:
      "Proyecto de Machine Learning para predecir si un individuo gana más o menos de 50 K al año según variables sociodemográficas. Incluye EDA, preprocesamiento, selección de modelos y un Voting Classifier.",
    ctaText: "Ver en GitHub →",
    ctaLink: "https://github.com/minivillalba4/trabajo_final_prediccion",
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
  {
    title: "Dashboard Cancelaciones Hoteleras",
    techStack: "Python • Dash/Plotly • Pandas • NumPy",
    description:
      "Dashboard interactivo de 119.390 reservas hoteleras con KPIs y análisis para detectar factores clave de cancelación.",
    ctaText: "Ver Dashboard →",
    ctaLink:
      "https://www.notion.so/Dashboard-Ploty-283b28adc6d7807ab473e24d3b40694d?source=copy_link",
    icon: PythonIcon,
  },
];

