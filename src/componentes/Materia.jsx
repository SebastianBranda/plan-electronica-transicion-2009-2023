/* eslint-disable react/prop-types */
import {
  Checkbox,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export const Materia = ({
  materia = {},
  aprobadas = [],
  setAprobadas = () => {},
  sumaCreditos = 0,
}) => {
  const handleClick = () => {
    let nuevasAprobadas = [];
    if (aprobadas.includes(materia.nombreMateria)) {
      nuevasAprobadas = aprobadas.filter((m) => m !== materia.nombreMateria);
    } else {
      nuevasAprobadas = aprobadas.concat([materia.nombreMateria]);
    }
    setAprobadas(nuevasAprobadas);
  };

  const estanCorrelativasAprobadas = materia.correlativas.every(
    (nombreMateria) => {
      return aprobadas.includes(nombreMateria);
    },
  );

  const poseeCreditosRequeridos = materia.creditosRequeridos !== undefined;

  const estanCreditosRequeridosAprobados =
    sumaCreditos >= materia.creditosRequeridos;

  const estaHabilitada =
    (poseeCreditosRequeridos && estanCreditosRequeridosAprobados) ||
    (!poseeCreditosRequeridos && estanCorrelativasAprobadas);

  const estaMateriaAprobada = aprobadas.includes(materia.nombreMateria);

  return (
    <ListItemButton
      role={undefined}
      onClick={handleClick}
      selected={estaMateriaAprobada}
      disabled={!estaHabilitada}
      dense={true}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          tabIndex={-1}
          disableRipple
          disabled={estaMateriaAprobada}
          checked={estaMateriaAprobada}
        />
      </ListItemIcon>
      <ListItemText primary={materia.nombreMateria} />
    </ListItemButton>
  );
};
