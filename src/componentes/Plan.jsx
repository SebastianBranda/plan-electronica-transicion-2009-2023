/* eslint-disable react/prop-types */
import { List, ListItem, Typography } from '@mui/material';
import { Materia } from './Materia';

export const Plan = ({
  materiasPlan = [],
  title = 'Plan',
  aprobadas,
  setAprobadas,
}) => {
  const materias = materiasPlan.map((materia, i) => (
    <ListItem key={i}>
      <Materia
        materia={materia}
        aprobadas={aprobadas}
        setAprobadas={setAprobadas}
      />
    </ListItem>
  ));

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <List>{materias}</List>
    </>
  );
};
