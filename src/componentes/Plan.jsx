/* eslint-disable react/prop-types */
import { List, ListItem, Typography } from '@mui/material';
import { Materia } from './Materia';

export const Plan = ({
  materiasPlan = [],
  title = 'Plan',
  aprobadas,
  setAprobadas,
  creditosMateriasDadasDeBaja = 0,
  creditosCarrera = 0,
}) => {
  const materiasAprobadas = materiasPlan.filter((materia) => {
    return aprobadas.includes(materia.nombreMateria);
  });
  const sumaCreditosAprobadas = materiasAprobadas.reduce((acc, curr) => {
    return acc + curr.creditos;
  }, 0);
  const creditosExcedentes = materiasAprobadas.reduce((acc, curr) => {
    return acc + curr.creditoExcedentePorEquivalencia;
  }, 0);

  const sumaCreditos =
    sumaCreditosAprobadas +
    creditosMateriasDadasDeBaja +
    (isNaN(creditosExcedentes) ? 0 : creditosExcedentes);

  const materias = materiasPlan.map((materia, i) => (
    <ListItem key={i} dense={true}>
      <Materia
        materia={materia}
        aprobadas={aprobadas}
        setAprobadas={setAprobadas}
        sumaCreditos={sumaCreditos}
      />
    </ListItem>
  ));

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <List>{materias}</List>
      <Typography variant="h6" gutterBottom>
        Total creditos: {sumaCreditos}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Total carrera: {creditosCarrera}
      </Typography>
    </>
  );
};
