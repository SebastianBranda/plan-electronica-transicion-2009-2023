import { Plan } from './Plan';
import { plan2023 } from '../planes/plan2023';
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
  console.log('rerender');

  plan2023.forEach((materia2023) => {
    if (
      estanEquivalenciasAprobadas(materia2023) &&
      materia2023.equivalencias.length !== 0
    ) {
      aprobadas.push(materia2023.nombreMateria);
    }
  });

  return (
    <Plan title={`Plan 2023`} materiasPlan={plan2023} aprobadas={aprobadas} />
  );
};
