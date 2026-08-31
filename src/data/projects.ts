// src/data/projects.ts
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import SqlIcon from '../assets/logos/SQL-logo.svg?raw';
import AzureIcon from '../assets/logos/Azure-logo.svg?raw';
import SparkIcon from '../assets/logos/Spark-logo.svg?raw';
import ExcelIcon from '../assets/logos/Excel-logo.svg?raw';
import PowerBIIcon from '../assets/logos/PowerBI-logo.svg?raw';

export const projects = [
  {
    title: "SOC Multiagent",
    techStack: "Python • Langgraph • Langsmith • AI Agents • Cybersecurity • Workflow",
    description:
      "CONTRASEÑA: ismaelvillalba",
    ctaText: "Ver más →",
    ctaLink: "https://soc-multiagent-dr5bqrmsemmidbzbrvn3sf.streamlit.app/",
    icon: PythonIcon,
  },
 {
    title: "RAG Assistant",
    techStack: "Python • LangChain • Chroma • Embeddings • Retrievers • Langsmith",
    description:
      "CONTRASEÑA: ismaelvillalba",
    ctaText: "Ver Más →",
    ctaLink: "https://rag-asistente-legal-m8xptvdsddhz88kb6wfxsn.streamlit.app/",
    icon: PythonIcon,
  }, 

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
    title: "Analisis Sostenibilidad PySpark",
    techStack: "Big Data • Spark • Parquet • PySpark • Sostenibilidad",
    description:
      "EDA enfocado en sostenibilidad empresarial utilizando PySpark para procesamiento distribuido de Big Data. El sistema genera tablas analíticas finales sobre impacto ambiental corporativo y beneficios de proyectos energéticos, facilitando la toma de decisiones en sostenibilidad empresarial mediante métricas cuantificables",
    ctaText: "Ver en GitHub →",
    ctaLink: "https://github.com/minivillalba4/bigdata-sostenibilidad/tree/main",
    icon: SparkIcon,
  },
];

