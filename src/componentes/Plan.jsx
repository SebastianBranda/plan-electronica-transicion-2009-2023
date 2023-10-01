/* eslint-disable react/prop-types */
import { Box, List, ListItem, Typography } from '@mui/material';
import { Materia } from './Materia';

export const Plan = ({
  materiasPlan = [],
  materiasElectivasPlan = [],
  materiasObligatoriasPlan = [],
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
    const creditos = isNaN(curr.creditoExcedentePorEquivalencia)
      ? 0
      : curr.creditoExcedentePorEquivalencia;
    return acc + creditos;
  }, 0);

  const sumaCreditos =
    sumaCreditosAprobadas + creditosMateriasDadasDeBaja + creditosExcedentes;

  const obtenerListaMaterias = (materias) =>
    materias.map((materia, i) => (
      <ListItem key={i} dense={true}>
        <Materia
          materia={materia}
          aprobadas={aprobadas}
          setAprobadas={setAprobadas}
          sumaCreditos={sumaCreditos}
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
          Créditos Obligatorias: {sumaCreditosAprobadas}
        </Typography>
        <Typography variant="subtitle2" gutterBottom align={'left'}>
          Créditos Electivas: {creditosMateriasDadasDeBaja + creditosExcedentes}
        </Typography>
        {/* <Typography variant="h6" gutterBottom align={'left'}>
          Total creditos: {sumaCreditos}
        </Typography> */}
        <Typography variant="h6" gutterBottom align={'left'}>
          Total carrera: {sumaCreditos} de {creditosCarrera} (
          {Math.round((100 * sumaCreditos) / creditosCarrera)}%)
        </Typography>
      </Box>
    </>
  );
};
