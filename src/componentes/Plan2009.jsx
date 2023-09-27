import { Plan } from './Plan';
import { plan2009 } from '../planes/plan2009';
import { useContext } from 'react';
import { Plan2009Context } from './Context';

export const Plan2009 = () => {
  const { aprobadas2009, setAprobadas2009 } = useContext(Plan2009Context);
  return (
    <Plan
      title={`Plan 2009`}
      materiasPlan={plan2009}
      aprobadas={aprobadas2009}
      setAprobadas={setAprobadas2009}
      creditosCarrera={278}
    />
  );
};
