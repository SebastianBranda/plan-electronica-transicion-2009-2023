/* eslint-disable react/prop-types */
import { Box, List, ListItem, Typography } from '@mui/material';
import { Materia } from './Materia';

export const Plan = ({
  materiasElectivasPlan = [],
  materiasObligatoriasPlan = [],
  title = 'Plan',
  aprobadas,
  setAprobadas,
  creditosMateriasDadasDeBaja = 0,
  creditosCarrera = 0,
}) => {
  const materiasObligatoriasAprobadas = materiasObligatoriasPlan.filter(
    (materia) => {
      return aprobadas.includes(materia.nombreMateria);
    },
  );

  const materiasElectivasAprobadas = materiasElectivasPlan.filter((materia) => {
    return aprobadas.includes(materia.nombreMateria);
  });

  const materiasAprobadas = materiasObligatoriasAprobadas.concat(
    materiasElectivasAprobadas,
  );

  const sumaCreditosTotalAprobadas = materiasAprobadas.reduce((acc, curr) => {
    return acc + curr.creditos;
  }, 0);

  const sumaCreditosObligatoriasAprobadas =
    materiasObligatoriasAprobadas.reduce((acc, curr) => {
      return acc + curr.creditos;
    }, 0);

  const sumaCreditosElectivasAprobadas = materiasElectivasAprobadas.reduce(
    (acc, curr) => {
      return acc + curr.creditos;
    },
    0,
  );

  const creditosExcedentes = materiasAprobadas.reduce((acc, curr) => {
    const creditos = isNaN(curr.creditoExcedentePorEquivalencia)
      ? 0
      : curr.creditoExcedentePorEquivalencia;
    return acc + creditos;
  }, 0);

  const sumaCreditosTotal =
    sumaCreditosTotalAprobadas +
    creditosMateriasDadasDeBaja +
    creditosExcedentes;

  const obtenerListaMaterias = (materias) =>
    materias.map((materia, i) => (
      <ListItem key={i} dense={true}>
        <Materia
          materia={materia}
          aprobadas={aprobadas}
          setAprobadas={setAprobadas}
          sumaCreditos={sumaCreditosTotal}
        />
      </ListItem>
    ));

  const subtitulo = (sub) => (
    <Box sx={{ pl: 5 }}>
      <Typography variant="h6" gutterBottom align={'left'}>
        {sub}
      </Typography>
    </Box>
  );

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {subtitulo('Obligatorias')}
      <List>{obtenerListaMaterias(materiasObligatoriasPlan)}</List>
      {subtitulo('Electivas')}
      <List>{obtenerListaMaterias(materiasElectivasPlan)}</List>
      <Box sx={{ pl: 5 }}>
        <Typography variant="subtitle2" gutterBottom align={'left'}>
          Créditos Obligatorias: {sumaCreditosObligatoriasAprobadas}
        </Typography>
        <Typography variant="subtitle2" gutterBottom align={'left'}>
          Créditos Electivas:{' '}
          {sumaCreditosElectivasAprobadas +
            creditosMateriasDadasDeBaja +
            creditosExcedentes}
        </Typography>
        <Typography variant="h6" gutterBottom align={'left'}>
          Total carrera: {sumaCreditosTotal} de {creditosCarrera} (
          {Math.round((100 * sumaCreditosTotal) / creditosCarrera)}%)
        </Typography>
      </Box>
    </>
  );
};
