import { Plan } from './Plan';
import { plan2009Electivas } from '../planes/plan2009Electivas';
import { plan2009Obligatorias } from '../planes/plan2009Obligatorias';
import { useContext } from 'react';
import { Plan2009Context } from './Context';

export const Plan2009 = () => {
  const { aprobadas2009, setAprobadas2009 } = useContext(Plan2009Context);

  // const plan2009 = plan2009Obligatorias.concat(plan2009Electivas);

  return (
    <Plan
      title={`Plan 2009`}
      // materiasPlan={plan2009}
      materiasElectivasPlan={plan2009Electivas}
      materiasObligatoriasPlan={plan2009Obligatorias}
      aprobadas={aprobadas2009}
      setAprobadas={setAprobadas2009}
      creditosCarrera={278}
    />
  );
};
