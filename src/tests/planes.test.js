const { plan2009 } = require("../planes/plan2009")
const { plan2023 } = require("../planes/plan2023")
const { plan2009MateriasDadasDeBaja} = require("../planes/asignaturasElectivasRemovidas")


describe('Plan 2009 Data', () => {
  const todasMaterias = plan2009.map(materia => materia.nombreMateria);

  test('materias correlativas pertenecen al plan', () => {
    plan2009.forEach(materia=>{
      expect(todasMaterias).toEqual(expect.arrayContaining(materia.correlativas))
    })
  });

  test("materias sin correlativas tienen un minimo de creditos requerido", () => {
    const materiasSinCorrelativas = plan2009.filter(materia => {
      return materia.correlativas.length === 0 && materia.nombreMateria !== "CBC";
    });  
    materiasSinCorrelativas.forEach( materia =>{
      expect(materia).toHaveProperty("creditosRequeridos");
      expect(materia.creditosRequeridos).not.toBe(0);
    })
  });

});

describe('Plan 2023 Data', () => {
  const todasMaterias = plan2023.map(materia => materia.nombreMateria);

  test('materias correlativas pertenecen al plan', () => {
    plan2023.forEach(materia=>{
      expect(todasMaterias).toEqual(expect.arrayContaining(materia.correlativas))
    })
  });

  test("materias sin correlativas tienen un minimo de creditos requerido", () => {
    const materiasSinCorrelativas = plan2023.filter(materia => {
      return materia.correlativas.length === 0 && materia.nombreMateria !== "CBC";
    });  
    materiasSinCorrelativas.forEach( materia =>{
      expect(materia).toHaveProperty("creditosRequeridos");
      expect(materia.creditosRequeridos).not.toBe(0);
    })

  });
  test("materias de equivalencia se encuentran en el plan viejo", () => {
    const materiasPlan2009 = plan2009.map(materia => materia.nombreMateria);
    const materiasConEquivalencia = plan2023.filter( materia => {
      return materia.equivalencias.length !== 0 && materia.nombreMateria !== "CBC"
    })
    materiasConEquivalencia.forEach( materia => {
      expect(materiasPlan2009).toEqual(expect.arrayContaining(materia.equivalencias));

    })
  })
});

describe('Electivas Removidas', () => {
  
  
  test("materias pertenecen al plan 2009", () => {
    const materiasPlan2009 = plan2009.map(materia => materia.nombreMateria);
    plan2009MateriasDadasDeBaja.forEach( materia => {
      expect(materiasPlan2009).toContain(materia.nombreMateria)
    })
  })
});