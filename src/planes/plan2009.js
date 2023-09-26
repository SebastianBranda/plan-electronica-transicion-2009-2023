const plan2009 = [
    {
        nombreMateria: "CBC",
        correlativas: [],
        creditos: 38,
    },
    {
        nombreMateria: "Analisis Matematico 2",
        correlativas: ["CBC"],
        creditos: 8,
    },
    {
        nombreMateria: "Fisica 1",
        correlativas: ["CBC"],
        creditos: 8,
    },
    {
        nombreMateria: "Algoritmos y Programacion 1",
        correlativas: ["CBC"],
        creditos: 6,
    },
    {
        nombreMateria: "Algebra 2",
        correlativas: ["CBC"],
        creditos: 8,
    },
    {
        nombreMateria: "Fisica 2",
        correlativas: ["Analisis Matematico 2", "Fisica 1"],
        creditos: 8,
    },
    {
        nombreMateria: "Introduccion a la Ingenieria Electronica",
        correlativas: ["Fisica 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Introduccion al Diseño Asistido por Computadora",
        correlativas: ["Fisica 1"],
        creditos: 4,
    },
    {
        nombreMateria: "Analisis Matematico 3",
        correlativas: ["Analisis Matematico 2", "Algebra 2"],
        creditos: 6,
    },
    {
        nombreMateria: "Probabilidad y Estadistica",
        correlativas: ["Analisis Matematico 2", "Algebra 2"],
        creditos: 6,
    },
    {
        nombreMateria: "Tecnica Digital",
        correlativas: ["Introduccion a la Ingenieria Electronica"],
        creditos: 6,
    },
    {
        nombreMateria: "Quimica",
        correlativas: ["CBC"],
        creditos: 6,
    },
    {
        nombreMateria: "Electromagnetismo",
        correlativas: ["Fisica 2", "Analisis Matematico 3"],
        creditos: 6,
    },
    {
        nombreMateria: "Dispositivos Semiconductores",
        correlativas: ["Fisica 2", "Introduccion a la Ingenieria Electronica"],
        creditos: 6,
    },
    {
        nombreMateria: "Analisis de Circuitos",
        correlativas: ["Introduccion a la Ingenieria Electronica", "Analisis Matematico 3", "Fisica 2"],
        creditos: 6,
    },
    {
        nombreMateria: "Analisis Numerico 1",
        correlativas: ["Analisis Matematico 2", "Algebra 2", "Algoritmos y Programacion 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Fisica 3",
        correlativas: ["Fisica 2"],
        creditos: 6,
    },
    {
        nombreMateria: "Señales y Sistemas",
        correlativas: ["Analisis de Circuitos", "Probabilidad y Estadistica"],
        creditos: 6,
    },
    {
        nombreMateria: "Circuitos Electronicos",
        correlativas: ["Dispositivos Semiconductores", "Analisis de Circuitos"],
        creditos: 6,
    },
    {
        nombreMateria: "Introduccion a la Economia y Organizacion de la Empresa",
        correlativas: [],
        creditosRequeridos: 48,
        creditos: 4,
    },
    {
        nombreMateria: "Control Automatico 1",
        correlativas: ["Señales y Sistemas"],
        creditos: 6,
    },
    {
        nombreMateria: "Procesos Estocasticos",
        correlativas: ["Señales y Sistemas", "Probabilidad y Estadistica"],
        creditos: 6,
    },
    {
        nombreMateria: "Laboratorio de Microprocesadores",
        correlativas: ["Tecnica Digital", "Dispositivos Semiconductores", "Analisis de Circuitos", "Algoritmos y Programacion 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Comunicacion de Datos",
        correlativas: ["Señales y Sistemas"],
        creditos: 6,
    },
    {
        nombreMateria: "Diseño de Circuitos Electronicos",
        correlativas: ["Circuitos Electronicos", "Laboratorio de Microprocesadores", "Introduccion al Diseño Asistido por Computadora"],
        creditos: 6,
    },
    {
        nombreMateria: "Intrumentos y Mediciones Electronicas",
        correlativas: ["Electromagnetismo", "Circuitos Electronicos", "Laboratorio de Microprocesadores"],
        creditos: 6,
    },
    {
        nombreMateria: "Introduccion a Proyectos",
        correlativas: ["Diseño de Circuitos Electronicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Legislacion y Ejercicio Profesional de la Ingenieria Electronica",
        correlativas: [],
        creditosRequeridos: 90,
        creditos: 4,
    },
    {
        nombreMateria: "Seguridad Ambiental y del Trabajo",
        correlativas: [],
        creditosRequeridos: 90,
        creditos: 4,
    },
    {
        nombreMateria: "Tesis de Ingenieria Electronica",
        correlativas: [],
        creditosRequeridos: 128,
        creditos: 18,
    },
    {
        nombreMateria: "Trabajo Profesional de Ingenieria Electronica",
        correlativas: [],
        creditosRequeridos: 128,
        creditos: 18,
    },
    {
        nombreMateria: "Análisis Funcional",
        correlativas: ["Analisis Matematico 3"],
        creditos: 6,
    },
    {
        nombreMateria: "Análisis Matricial y Métodos Numéricos",
        correlativas: ["Analisis Matematico 3", "Analisis Numerico 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Mecánica Racional",
        correlativas: ["Analisis Matematico 3", "Fisica 1"],
        creditos: 4,
    },
     {
        nombreMateria: "Física del Estado Sólido",
        correlativas: ["Fisica 3"],
        creditos: 6,
    },
    {
        nombreMateria: "Máquinas Eléctricas",
        correlativas: ["Analisis de Circuitos"],
        creditos: 6,
    },
    {
        nombreMateria: "Laboratorio de Instalaciones Eléctricas",
        correlativas: ["Circuitos Electronicos"],
        creditos: 4,
    },
    {
        nombreMateria: "Teoría de la Información Codificación",
        correlativas: ["Procesos Estocasticos"],
        creditos: 6,
    },
    {
        nombreMateria: "Robótica",
        correlativas: ["Mecánica Racional", "Control Automatico 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Control Automático II",
        correlativas: ["Control Automatico 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Control Automático III",
        correlativas: ["Control Automático II"],
        creditos: 6,
    },
    {
        nombreMateria: "Control Industrial Distribuido",
        correlativas: ["Control Automatico 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Control Robusto",
        correlativas: ["Control Automático II"],
        creditos: 6,
    },
    {
        nombreMateria: "Identificación y Control Adaptativo",
        correlativas: ["Control Automatico 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Instrumentación y Control de Procesos",
        correlativas: ["Control Automatico 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Laboratorio de Control Automático",
        correlativas: ["Control Automatico 1", "Diseño de Circuitos Electronicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Accionamientos Variables",
        correlativas: ["Control Automatico 1", "Diseño de Circuitos Electronicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Electrónica de Potencia",
        correlativas: ["Diseño de Circuitos Electronicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Comunicaciones Digitales I",
        correlativas: ["Procesos Estocasticos"],
        creditos: 6,
    },
    {
        nombreMateria: "Comunicaciones Digitales II",
        correlativas: ["Comunicacion de Datos", "Comunicaciones Digitales I"],
        creditos: 6,
    },
    {
        nombreMateria: "Infraestructura de Redes Fijas",
        correlativas: ["Comunicacion de Datos"],
        creditos: 6,
    },
    {
        nombreMateria: "Laboratorio de Comunicaciones",
        correlativas: ["Comunicacion de Datos"],
        creditos: 6,
    },
    {
        nombreMateria: "Propagación y Sistemas Irradiantes",
        correlativas: ["Electromagnetismo"],
        creditos: 6,
    },
    {
        nombreMateria: "Comunicaciones Digitales III",
        correlativas: ["Comunicaciones Digitales II"],
        creditos: 6,
    },
    {
        nombreMateria: "Servicios y Redes de Comunicaciones",
        correlativas: ["Comunicacion de Datos"],
        creditos: 6,
    },
    {
        nombreMateria: "Sistemas Inalámbricos",
        correlativas: ["Comunicacion de Datos", "Propagación y Sistemas Irradiantes"],
        creditos: 6,
    },
    {
        nombreMateria: "Transmisores y Receptores de Comunicaciones",
        correlativas: ["Diseño de Circuitos Electronicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Video Digital",
        correlativas: ["Procesos Estocasticos"],
        creditos: 6,
    },
    {
        nombreMateria: "Criptografía y Seguridad Informática",
        correlativas: ["Señales y Sistemas", "Laboratorio de Microprocesadores"],
        creditos: 6,
    },
    {
        nombreMateria: "Organización de Computadoras",
        correlativas: ["Laboratorio de Microprocesadores"],
        creditos: 6,
    },
    {
        nombreMateria: "Arquitecturas Paralelas",
        correlativas: ["Organización de Computadoras"],
        creditos: 6,
    },
    {
        nombreMateria: "Redes de Computadoras",
        correlativas: ["Comunicacion de Datos"],
        creditos: 6,
    },
    {
        nombreMateria: "Laboratorio de Redes de Computadoras",
        correlativas: ["Redes de Computadoras"],
        creditos: 6,
    },
    {
        nombreMateria: "Sistemas Digitales",
        correlativas: ["Analisis Matematico 3", "Tecnica Digital", "Algoritmos y Programacion 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Laboratorio de Sistemas Digitales",
        correlativas: ["Sistemas Digitales"],
        creditos: 6,
    },
    {
        nombreMateria: "Sistemas Gráficos",
        correlativas: ["Algoritmos y Programación II"],
        creditos: 6,
    },
    {
        nombreMateria: "Técnica Digital Avanzada",
        correlativas: ["Tecnica Digital", "Dispositivos Semiconductores"],
        creditos: 6,
    },
    {
        nombreMateria: "Industrias y Productos de Electrónica",
        correlativas: ["Diseño de Circuitos Electronicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Microelectrónica",
        correlativas: ["Circuitos Electronicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Optoelectrónica",
        correlativas: ["Fisica 3", "Electromagnetismo"],
        creditos: 6,
    },
    {
        nombreMateria: "Seminario de Electrónica",
        correlativas: ["Diseño de Circuitos Electronicos"],
        creditos: 4,
    },
    {
        nombreMateria: "Seminario de Electrónica II",
        correlativas: ["Diseño de Circuitos Electronicos"],
        creditos: 4,
    },
    {
        nombreMateria: "Tecnología de los Componentes",
        correlativas: ["Diseño de Circuitos Electronicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Procesamiento de Señales I",
        correlativas: ["Procesos Estocasticos"],
        creditos: 6,
    },
    {
        nombreMateria: "Procesamiento de Señales II",
        correlativas: ["Procesamiento de Señales I"],
        creditos: 6,
    },
    {
        nombreMateria: "Procesamiento del Habla",
        correlativas: ["Señales y Sistemas"],
        creditos: 6,
    },
    {
        nombreMateria: "Redes Neuronales",
        correlativas: ["Procesos Estocasticos"],
        creditos: 6,
    },
    {
        nombreMateria: "Teoría de Detección y Estimación",
        correlativas: ["Procesos Estocasticos"],
        creditos: 6,
    },
    {
        nombreMateria: "Procesamiento de Imágenes",
        correlativas: ["Procesamiento de Señales I", "Teoría de Detección y Estimación"],
        creditos: 6,
    },
    {
        nombreMateria: "Acústica",
        correlativas: ["Analisis de Circuitos"],
        creditos: 6,
    },
    {
        nombreMateria: "Electroacústica",
        correlativas: ["Circuitos Electronicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Audio Profesional",
        correlativas: ["Diseño de Circuitos Electronicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Sistemas Biológicos",
        correlativas: ["Señales y Sistemas"],
        creditos: 6,
    },
    {
        nombreMateria: "Ingeniería Biomédica",
        correlativas: ["Control Automatico 1", "Sistemas Biológicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Equipamiento para Diagnóstico y Tratamiento Biomédico",
        correlativas: ["Sistemas Biológicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Procesamiento y Análisis de Señales e Imágenes En Bioingeniería",
        correlativas: ["Sistemas Biológicos"],
        creditos: 6,
    },
    {
        nombreMateria: "Compatibilidad Electromagnética",
        correlativas: ["Electromagnetismo"],
        creditos: 6,
    },
    {
        nombreMateria: "Sistemas Embebidos",
        correlativas: ["Laboratorio de Microprocesadores"],
        creditos: 6,
    },
    {
        nombreMateria: "Laboratorio de Microelectrónica",
        correlativas: ["Microelectrónica"],
        creditos: 6,
    },
    {
        nombreMateria: "Comunicaciones Radioeléctricas y Radioenlaces",
        correlativas: ["Propagación y Sistemas Irradiantes"],
        creditos: 6,
    },
    {
        nombreMateria: "Control no Lineal",
        correlativas: ["Control Automático II"],
        creditos: 6,
    },
    {
        nombreMateria: "Algoritmos y Programación III",
        correlativas: ["Algoritmos y Programación II"],
        creditos: 6,
    },
    {
        nombreMateria: "Sistemas Operativos",
        correlativas: ["Laboratorio de Microprocesadores", "Algoritmos y Programación III"],
        creditos: 6,
    },
    {
        nombreMateria: "Base de Datos",
        correlativas: ["Laboratorio de Microprocesadores", "Algoritmos y Programación III"],
        creditos: 6,
    },
    {
        nombreMateria: "Teoría de Algoritmos I",
        correlativas: ["Algoritmos y Programación II"],
        creditos: 6,
    },
    {
        nombreMateria: "Teoría de Lenguajes de Programación",
        correlativas: ["Algoritmos y Programación II"],
        creditos: 4,
    },
    {
        nombreMateria: "Taller de Programación",
        correlativas: ["Algoritmos y Programación II"],
        creditos: 4,
    },
    {
        nombreMateria: "Técnicas de Programación Concurrente I",
        correlativas: ["Sistemas Operativos"],
        creditos: 6,
    },
    {
        nombreMateria: "Algoritmos y Programación II",
        correlativas: ["Algoritmos y Programacion 1"],
        creditos: 6,
    }
]

module.exports = { plan2009 }