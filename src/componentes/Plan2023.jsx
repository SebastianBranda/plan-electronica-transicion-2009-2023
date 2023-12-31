import { Plan } from './Plan';
import { plan2023Electivas } from '../planes/plan2023Electivas';
import { plan2023Obligatorias } from '../planes/plan2023Obligatorias';
import { plan2009MateriasDadasDeBaja } from '../planes/asignaturasElectivasRemovidas';
import { Plan2009Context } from './Context';
import { useContext } from 'react';

export const Plan2023 = () => {
  const { aprobadas2009 } = useContext(Plan2009Context);

  const aprobadas = [];

  const estanEquivalenciasAprobadas = (materia2023) => {
    return materia2023.equivalencias.every((materia2009) => {
      return aprobadas2009.includes(materia2009);
    });
  };

  const estaAlgunaDeLasEquivalenciasAprobada = (materia2023) => {
    return materia2023.equivalencias.some((materia2009) => {
      return aprobadas2009.includes(materia2009);
    });
  };

  const plan2023 = plan2023Obligatorias.concat(plan2023Electivas);

  plan2023.forEach((materia2023) => {
    if (materia2023.equivalencias.length === 0) return;
    if (estanEquivalenciasAprobadas(materia2023)) {
      aprobadas.push(materia2023.nombreMateria);
    } else if (
      (materia2023.nombreMateria === 'Taller de Automatizacion y Control' ||
        materia2023.nombreMateria === 'Taller de Procesamiento de Señales') &&
      estaAlgunaDeLasEquivalenciasAprobada(materia2023)
    ) {
      aprobadas.push(materia2023.nombreMateria);
    }
  });

  const matDadasDeBaja = plan2009MateriasDadasDeBaja.filter((materia) => {
    return aprobadas2009.includes(materia.nombreMateria);
  });

  let creditosMateriasDadasDeBaja = matDadasDeBaja.reduce((acc, cur) => {
    return acc + cur.creditoExcedentePorEquivalencia;
  }, 0);

  return (
    <Plan
      title={`Plan 2023`}
      // materiasPlan={plan2023}
      materiasElectivasPlan={plan2023Electivas}
      materiasObligatoriasPlan={plan2023Obligatorias}
      aprobadas={aprobadas}
      creditosMateriasDadasDeBaja={creditosMateriasDadasDeBaja}
      creditosCarrera={228}
    />
  );
};
