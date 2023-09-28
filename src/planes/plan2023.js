const plan2023 = [
    {
        nombreMateria: "CBC",
        correlativas: [],
        equivalencias: ["CBC"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 38,
    },
    {
        nombreMateria: "Analisis Matematico 2",
        correlativas: ["CBC"],
        equivalencias: ["Analisis Matematico 2"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 8,
    },
    {
        nombreMateria: "Fisica de los Sistemas de Particulas",
        correlativas: ["CBC"],
        equivalencias: ["Fisica 1"],
        creditoExcedentePorEquivalencia: 2,
        creditos: 6,
    },
    {
        nombreMateria: "Introduccion a la Ingenieria Electronica",
        correlativas: ["CBC"],
        equivalencias: ["Introduccion a la Ingenieria Electronica"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Algoritmos y Programacion",
        correlativas: ["CBC"],
        equivalencias: ["Algoritmos y Programacion 1"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Algebra Lineal",
        correlativas: ["CBC"],
        equivalencias: ["Algebra 2"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 8,
    },
    {
        nombreMateria: "Electricidad, Magnetismo y Calor",
        correlativas: ["Analisis Matematico 2", "Fisica de los Sistemas de Particulas"],
        equivalencias: ["Fisica 2"],
        creditoExcedentePorEquivalencia: 2,
        creditos: 6,
    },
    {
        nombreMateria: "Introduccion a los Dispositivos Electronicos",
        correlativas: ["Introduccion a la Ingenieria Electronica"],
        equivalencias: ["Dispositivos Semiconductores"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 4,
    },
    {
        nombreMateria: "Sistemas Digitales",
        correlativas: ["Introduccion a la Ingenieria Electronica"],
        equivalencias: ["Tecnica Digital"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Probabilidad y Estadistica",
        correlativas: ["Analisis Matematico 2", "Algebra Lineal"],
        equivalencias: ["Probabilidad y Estadistica"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Señales y Sistemas",
        correlativas: ["Analisis Matematico 2", "Algebra Lineal"],
        equivalencias: ["Señales y Sistemas"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Analisis de Circuitos",
        correlativas: ["Introduccion a la Ingenieria Electronica", "Electricidad, Magnetismo y Calor"],
        equivalencias: ["Analisis de Circuitos"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Redes de Comunicaciones",
        correlativas: ["CBC"],
        equivalencias: ["Comunicacion de Datos"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Planificacion de Proyectos",
        correlativas: ["Introduccion a la Ingenieria Electronica"],
        equivalencias: ["Introduccion a Proyectos"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 2,
    },
    {
        nombreMateria: "Circuitos Microelectronicos",
        correlativas: ["Introduccion a los Dispositivos Electronicos", "Analisis de Circuitos"],
        equivalencias: ["Circuitos Electronicos"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Procesos Estocasticos",
        correlativas: ["Probabilidad y Estadistica", "Señales y Sistemas"],
        equivalencias: ["Procesos Estocasticos"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Control Automatico",
        correlativas: ["Electricidad, Magnetismo y Calor", "Señales y Sistemas"],
        equivalencias: ["Control Automatico 1"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Taller de Sistemas Embebidos",
        correlativas: ["Algoritmos y Programacion", "Introduccion a los Dispositivos Electronicos", "Sistemas Digitales"],
        equivalencias: ["Laboratorio de Microprocesadores"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Quimica y Electroquimica",
        correlativas: ["Electricidad, Magnetismo y Calor"],
        equivalencias: ["Quimica"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Electromagnetismo Aplicado",
        correlativas: ["Analisis de Circuitos"],
        equivalencias: ["Electromagnetismo"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 4,
    },
    {
        nombreMateria: "Taller de Automatizacion y Control",
        correlativas: ["Algoritmos y Programacion", "Control Automatico", "Sistemas Digitales"],
        equivalencias: ["Laboratorio de Control Automático", "Control Industrial Distribuido"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Taller de Procesamiento de Señales",
        correlativas: ["Procesos Estocasticos"],
        equivalencias: ["Teoría de Detección y Estimación", "Procesamiento de Imágenes", "Procesamiento de Señales I"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Dispositivos Semiconductores",
        correlativas: ["Introduccion a los Dispositivos Electronicos", "Analisis de Circuitos"],
        equivalencias: ["Fisica 3"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Taller de Comunicaciones Digitales",
        correlativas: ["Señales y Sistemas", "Redes de Comunicaciones"],
        equivalencias: ["Comunicaciones Digitales I"],
        creditos: 6,
    },
    {
        nombreMateria: "Taller de Diseño de Circuitos Electronicos",
        correlativas: ["Circuitos Microelectronicos", "Electromagnetismo Aplicado"],
        equivalencias: ["Diseño de Circuitos Electronicos"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Higiene y Seguridad",
        correlativas: [],
        creditosRequeridos: 100,
        equivalencias: ["Seguridad Ambiental y del Trabajo"],
        creditoExcedentePorEquivalencia: 2,
        creditos: 2,
    },
    {
        nombreMateria: "Legislacion y Ejercicio Profesional",
        correlativas: [],
        creditosRequeridos: 100,
        equivalencias: ["Legislacion y Ejercicio Profesional de la Ingenieria Electronica"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 2,
    },
    {
        nombreMateria: "Gestion de Proyectos Electronicos",
        correlativas: ["Planificacion de Proyectos"],
        equivalencias: ["Introduccion a la Economia y Organizacion de la Empresa"],
        creditoExcedentePorEquivalencia: 0,
        creditos: 6,
    },
    {
        nombreMateria: "Trabajo Integrador Final de Ingenieria Electronica",
        correlativas: ["Planificacion de Proyectos", "Taller de Sistemas Embebidos", "Taller de Automatizacion y Control", "Taller de Procesamiento de Señales", "Taller de Diseño de Circuitos Electronicos"],
        equivalencias: ["Tesis - Trabajo Profesional"],
        creditoExcedentePorEquivalencia: 6,
        creditos: 12,
    },
    {
        nombreMateria: "Comunicaciones Inalambricas",
        correlativas: ["Electromagnetismo Aplicado", "Taller de Comunicaciones Digitales"],
        equivalencias: ["Sistemas Inalámbricos"],
        creditos: 4,
    },
    {
        nombreMateria: "Instrumentos Electronicos y Metrologia",
        correlativas: ["Taller de Diseño de Circuitos Electronicos"],
        equivalencias: [],
        creditos: 4,
    },
    {
        nombreMateria: "Electronica de Alta Frecuencia",
        correlativas: ["Taller de Diseño de Circuitos Electronicos"],
        equivalencias: ["Transmisores y Receptores de Comunicaciones"],
        creditos: 4,
    },
    {
        nombreMateria: "Internet de las Cosas",
        correlativas: ["Taller de Comunicaciones Digitales"],
        equivalencias: [],
        creditos: 4,
    },
    {
        nombreMateria: "Infraestructura de Redes",
        correlativas: ["Taller de Comunicaciones Digitales"],
        equivalencias: ["Infraestructura de Redes Fijas", "Servicios y Redes de Comunicaciones"],
        creditos: 4,
    },
    {
        nombreMateria: "Propagacion y Sistemas Irradiantes",
        correlativas: ["Electromagnetismo Aplicado"],
        equivalencias: ["Propagación y Sistemas Irradiantes"],
        creditos: 4,
    },
    {
        nombreMateria: "Compatibilidad Electromagnetica",
        correlativas: ["Taller de Diseño de Circuitos Electronicos"],
        equivalencias: ["Compatibilidad Electromagnética"],
        creditos: 4,
    },
    {
        nombreMateria: "Laboratorio de Comunicaciones",
        correlativas: ["Taller de Comunicaciones Digitales"],
        equivalencias: ["Laboratorio de Comunicaciones"],
        creditos: 4,
    },
    {
        nombreMateria: "Redes Neuronales y Aprendizaje Profundo",
        correlativas: ["Taller de Procesamiento de Señales"],
        equivalencias: ["Redes Neuronales"],
        creditos: 4,
    },
    {
        nombreMateria: "Aprendizaje por Refuerzo",
        correlativas: ["Taller de Procesamiento de Señales"],
        equivalencias: [],
        creditos: 6,
    },
    {
        nombreMateria: "Vision por computadora",
        correlativas: ["Taller de Procesamiento de Señales"],
        equivalencias: [],
        creditos: 4,
    },
    {
        nombreMateria: "Procesamiento del Habla",
        correlativas: ["Taller de Procesamiento de Señales"],
        equivalencias: ["Procesamiento del Habla"],
        creditos: 4,
    },
    {
        nombreMateria: "Optimizacion Convexa",
        correlativas: ["Procesos Estocasticos"],
        equivalencias: [],
        creditos: 6,
    },
    {
        nombreMateria: "Procesamiento Estadistico de Señales",
        correlativas: ["Procesos Estocasticos"],
        equivalencias: ["Procesamiento de Señales II"],
        creditos: 4,
    },
    {
        nombreMateria: "Taller de Sistemas Digitales",
        correlativas: ["Sistemas Digitales", "Señales y Sistemas"],
        equivalencias: ["Sistemas Digitales"],
        creditos: 6,
    },
    {
        nombreMateria: "Diseño y Verificacion Digital",
        correlativas: ["Taller de Sistemas Embebidos"],
        equivalencias: ["Laboratorio de Sistemas Digitales"],
        creditos: 6,
    },
    {
        nombreMateria: "Sistemas Operativos",
        correlativas: ["Taller de Sistemas Embebidos"],
        equivalencias: ["Sistemas Operativos"],
        creditos: 6,
    },
    {
        nombreMateria: "Algoritmos y Estructuras de Datos",
        correlativas: ["Algoritmos y Programacion"],
        equivalencias: ["Algoritmos y Programación II"],
        creditos: 6,
    },
    {
        nombreMateria: "Sistemas Operativos Embebidos",
        correlativas: ["Taller de Sistemas Embebidos"],
        equivalencias: [],
        creditos: 4,
    },
    {
        nombreMateria: "Instrumentacion y Control de Procesos Industriales",
        correlativas: ["Taller de Automatizacion y Control"],
        equivalencias: ["Instrumentación y Control de Procesos"],
        creditos: 4,
    },
    {
        nombreMateria: "Control Automatico Avanzado",
        correlativas: ["Taller de Automatizacion y Control"],
        equivalencias: ["Control Automático III"],
        creditos: 4,
    },
    {
        nombreMateria: "Control Automatico Multivariable",
        correlativas: ["Taller de Automatizacion y Control"],
        equivalencias: ["Control Automático II"],
        creditos: 4,
    },
    {
        nombreMateria: "Identificacion y Control Adaptativo",
        correlativas: ["Taller de Automatizacion y Control"],
        equivalencias: ["Identificación y Control Adaptativo"],
        creditos: 4,
    },
    {
        nombreMateria: "Electronica de Potencia",
        correlativas: ["Circuitos Microelectronicos"],
        equivalencias: ["Electrónica de Potencia"],
        creditos: 4,
    },
    {
        nombreMateria: "Accionamientos Variables",
        correlativas: ["Circuitos Microelectronicos", "Control Automatico"],
        equivalencias: ["Accionamientos Variables"],
        creditos: 6,
    },
    {
        nombreMateria: "Robotica Movil",
        correlativas: ["Procesos Estocasticos", "Algoritmos y Programacion"],
        equivalencias: [],
        creditos: 4,
    },
    {
        nombreMateria: "Robotica Industrial",
        correlativas: ["Taller de Automatizacion y Control"],
        equivalencias: ["Robótica"],
        creditos: 6,
    },
    {
        nombreMateria: "Microelectronica",
        correlativas: ["Circuitos Microelectronicos", "Dispositivos Semiconductores"],
        equivalencias: ["Microelectrónica"],
        creditos: 4,
    },
    {
        nombreMateria: "Laboratorio de Microelectronica",
        correlativas: ["Microelectronica"],
        equivalencias: ["Laboratorio de Microelectrónica"],
        creditos: 4,
    },
    {
        nombreMateria: "Comunicacion y Computacion Cuantica",
        correlativas: ["Taller de Sistemas Embebidos"],
        equivalencias: [],
        creditos: 4,
    },
    {
        nombreMateria: "Dispositivos Optoelectronicos Avanzados",
        correlativas: ["Dispositivos Semiconductores"],
        equivalencias: [],
        creditos: 4,
    },
    {
        nombreMateria: "Optoelectronica",
        correlativas: ["Dispositivos Semiconductores"],
        equivalencias: ["Optoelectrónica"],
        creditos: 4,
    },
    {
        nombreMateria: "Introduccion a la Ingenieria Acustica",
        correlativas: ["Señales y Sistemas"],
        equivalencias: ["Acústica"],
        creditos: 4,
    },
    {
        nombreMateria: "Acustica de Recintos",
        correlativas: ["Señales y Sistemas"],
        equivalencias: [],
        creditos: 4,
    },
    {
        nombreMateria: "Electroacustica",
        correlativas: ["Circuitos Microelectronicos"],
        equivalencias: ["Electroacústica"],
        creditos: 4,
    },
    {
        nombreMateria: "Audio Profesional",
        correlativas: ["Taller de Diseño de Circuitos Electronicos"],
        equivalencias: ["Audio Profesional"],
        creditos: 4,
    },
    {
        nombreMateria: "Ciberseguridad de Redes e Infraestructuras",
        correlativas: ["Algoritmos y Programacion", "Taller de Comunicaciones Digitales"],
        equivalencias: ["Criptografía y Seguridad Informática"],
        creditos: 6,
    },
    {
        nombreMateria: "Sistemas Graficos",
        correlativas: ["Algoritmos y Programacion"],
        equivalencias: ["Sistemas Gráficos"],
        creditos: 4,
    },
    {
        nombreMateria: "Introduccion a la Industria, los Sistemas y el Negocio Aeroespacial",
        correlativas: [],
        creditosRequeridos: 120,
        equivalencias: [],
        creditos: 6,
    },
    {
        nombreMateria: "Tecnologia de Materiales para la industria Aeroespacial B",
        correlativas: ["Electricidad, Magnetismo y Calor", "Quimica y Electroquimica"],
        equivalencias: [],
        creditos: 4,
    },
    {
        nombreMateria: "Comunicaciones Aeroespaciales B",
        correlativas: ["Taller de Comunicaciones Digitales"],
        equivalencias: [],
        creditos: 2,
    },
]

export { plan2023 }
// module.exports = { plan2023 }