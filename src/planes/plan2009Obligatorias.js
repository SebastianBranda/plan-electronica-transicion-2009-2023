const plan2009Obligatorias = [
    {
        nombreMateria: "CBC",
        correlativas: [],
        creditos: 38,
    },
    {
        nombreMateria: "Análisis Matemático 2",
        correlativas: ["CBC"],
        creditos: 8,
    },
    {
        nombreMateria: "Física 1",
        correlativas: ["CBC"],
        creditos: 8,
    },
    {
        nombreMateria: "Algoritmos y Programación 1",
        correlativas: ["CBC"],
        creditos: 6,
    },
    {
        nombreMateria: "Álgebra 2",
        correlativas: ["CBC"],
        creditos: 8,
    },
    {
        nombreMateria: "Física 2",
        correlativas: ["Análisis Matemático 2", "Física 1"],
        creditos: 8,
    },
    {
        nombreMateria: "Introducción a la Ingeniería Electrónica",
        correlativas: ["Física 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Introducción al Diseño Asistido por Computadora",
        correlativas: ["Física 1"],
        creditos: 4,
    },
    {
        nombreMateria: "Análisis Matemático 3",
        correlativas: ["Análisis Matemático 2", "Álgebra 2"],
        creditos: 6,
    },
    {
        nombreMateria: "Probabilidad y Estadística",
        correlativas: ["Análisis Matemático 2", "Álgebra 2"],
        creditos: 6,
    },
    {
        nombreMateria: "Técnica Digital",
        correlativas: ["Introducción a la Ingeniería Electrónica"],
        creditos: 6,
    },
    {
        nombreMateria: "Química",
        correlativas: ["CBC"],
        creditos: 6,
    },
    {
        nombreMateria: "Electromagnetismo",
        correlativas: ["Física 2", "Análisis Matemático 3"],
        creditos: 6,
    },
    {
        nombreMateria: "Dispositivos Semiconductores",
        correlativas: ["Física 2", "Introducción a la Ingeniería Electrónica"],
        creditos: 6,
    },
    {
        nombreMateria: "Análisis de Circuitos",
        correlativas: ["Introducción a la Ingeniería Electrónica", "Análisis Matemático 3", "Física 2"],
        creditos: 6,
    },
    {
        nombreMateria: "Análisis Numérico 1",
        correlativas: ["Análisis Matemático 2", "Álgebra 2", "Algoritmos y Programación 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Física 3",
        correlativas: ["Física 2"],
        creditos: 6,
    },
    {
        nombreMateria: "Señales y Sistemas",
        correlativas: ["Análisis de Circuitos", "Probabilidad y Estadística"],
        creditos: 6,
    },
    {
        nombreMateria: "Circuitos Electrónicos",
        correlativas: ["Dispositivos Semiconductores", "Análisis de Circuitos"],
        creditos: 6,
    },
    {
        nombreMateria: "Introducción a la Economía y Organización de la Empresa",
        correlativas: [],
        creditosRequeridos: 48,
        creditos: 4,
    },
    {
        nombreMateria: "Control Automático 1",
        correlativas: ["Señales y Sistemas"],
        creditos: 6,
    },
    {
        nombreMateria: "Procesos Estocásticos",
        correlativas: ["Señales y Sistemas", "Probabilidad y Estadística"],
        creditos: 6,
    },
    {
        nombreMateria: "Laboratorio de Microprocesadores",
        correlativas: ["Técnica Digital", "Dispositivos Semiconductores", "Análisis de Circuitos", "Algoritmos y Programación 1"],
        creditos: 6,
    },
    {
        nombreMateria: "Comunicación de Datos",
        correlativas: ["Señales y Sistemas"],
        creditos: 6,
    },
    {
        nombreMateria: "Diseño de Circuitos Electrónicos",
        correlativas: ["Circuitos Electrónicos", "Laboratorio de Microprocesadores", "Introducción al Diseño Asistido por Computadora"],
        creditos: 6,
    },
    {
        nombreMateria: "Instrumentos y Mediciones Electrónicas",
        correlativas: ["Electromagnetismo", "Circuitos Electrónicos", "Laboratorio de Microprocesadores"],
        creditos: 6,
    },
    {
        nombreMateria: "Introducción a Proyectos",
        correlativas: ["Diseño de Circuitos Electrónicos"],
        creditos: 4,
    },
    {
        nombreMateria: "Legislación y Ejercicio Profesional de la Ingeniería Electrónica",
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
        nombreMateria: "Tesis - Trabajo Profesional",
        correlativas: [],
        creditosRequeridos: 128,
        creditos: 18,
    },
]

export { plan2009Obligatorias }
// module.exports = {plan2009Obligatorias}