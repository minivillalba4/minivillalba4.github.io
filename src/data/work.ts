
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Sales Analytics",
    company: "Carrefour",
    region: "Alcobendas",
    description:
      "Actualización y validación de bases de datos de ventas mediante SQL, automatización de informes en Excel a partir de datos Nielsen y GFK, y extracción de insights sobre comportamiento del consumidor para apoyar decisiones estratégicas.",
    technologies: [
      "SQL",
      "Excel",
      "Nielsen",
      "GFK",
      "Análisis de mercado",
    ],
  },
  {
    title: "Freelancer Copywriting SEO",
    company: "Fiverr",
    region: "Global",
    description:
      "Colaboración en títulos SEO Optimizados para páginas web",
    technologies: [
      "SEO",
      "Copywriting",
      "Marketing de contenidos",
      "Redacción técnica",
    ],
  },
  {
    title: "Social Media & E-commerce Assistant",
    company: "Decasport",
    region: "Leganés",
    description:
      "Gestión de contenido digital y conversión en e-commerce, coordinación operativa de tienda online, soporte en promociones y marketing digital, y apoyo en redes sociales y posicionamiento de marca.",
    technologies: [
      "E-commerce",
      "Marketing digital",
      "Redes sociales",
      "SEO",
    ],
  },
  {
    title: "Fundador E-commerce Dropshipping",
    company: "Proyecto Propio",
    region: "Parla",
    description:
      "Desarrollo y gestión integral de tienda online bajo modelo dropshipping, análisis de métricas comerciales y comportamiento del cliente, aplicación de principios Lean Startup y optimización de procesos",
    technologies: [
      "E-commerce",
      "Dropshipping",
      "Lean Startup",
      "Análisis de datos",
      "Marketing digital",
    ],
  },
];

export type WorkItem = (typeof work)[number];

