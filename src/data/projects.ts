// src/data/projects.ts
import PythonIcon   from '../assets/logos/Python-logo.svg?raw';
import SqlIcon      from '../assets/logos/SQL-logo.svg?raw';
import AzureIcon from '../assets/logos/Azure-logo.svg?raw';
import SparkIcon from '../assets/logos/Spark-logo.svg?raw';
import ExcelIcon from '../assets/logos/Excel-logo.svg?raw';
import PowerBIIcon from '../assets/logos/PowerBI-logo.svg?raw';


export const projects = [
  {
    title: "Clasificación Según nivel de Ingresos (Machine Learning)",
    techStack: "n8n • Node.js • TypeScript • PostgreSQL",
    description: "Proyecto de Machine Learning para predecir si un individuo gana más o menos de 50 K al año según variables sociodemográficas. Incluye EDA, preprocesamiento, selección de modelos y un Voting Classifier con interpretación mediante SHAP.",
    ctaText: "Ver en GitHub →",
    ctaLink: "https://github.com/minivillalba4/trabajo_final_prediccion",
    icon: PythonIcon, // placeholder válido
  },
  {
    title: "Análisis de Productos de Supermercado con NLP (en curso)",
    techStack: "Python • Selenium • NLP • Pandas • JSON",
    description: "Proyecto de Procesamiento del Lenguaje Natural desarrollado para la asignatura de ChatGPT. Fase 1: extracción y limpieza de textos de productos desde varias webs. Fase 2: modelado y clasificación del contenido nutricional. Fase 3: implementación de un buscador semántico basado en embeddings y técnicas RAG.",
    ctaText: "Ver progreso en GitHub →",
    ctaLink: "https://github.com/minivillalba4/proyecto_chatbots",
    icon: PythonIcon, // placeholder válido
  },
  // Si no quieres mostrar Phoenix, borra este bloque completo.
  {
    title: "Dashboard Cancelaciones Hoteleras",
    techStack: "Python • Dash/Plotly • Pandas • NumPy",
    description: "Dashboard interactivo de 119.390 reservas hoteleras con KPIs (cancelaciones, ADR, anticipación) y análisis univariado, multivariado y categórico para detectar factores clave de cancelación.",
    ctaText: "Ver Dashboard →",
    ctaLink: "https://drive.google.com/file/d/1T-cKk7sbqzBeMf5orQMCNcitTv_UAYy5/view?usp=sharing",
    icon: PythonIcon,
  },
  {
];
