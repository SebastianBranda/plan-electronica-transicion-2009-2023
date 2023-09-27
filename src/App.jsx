import { useState } from 'react';
import { Grid } from '@mui/material';
import './App.css';
import { Plan2009Context } from './componentes/Context';
import { Plan2009 } from './componentes/Plan2009';
import { Plan2023 } from './componentes/Plan2023';

function App() {
  const [aprobadas2009, setAprobadas2009] = useState([]);

  return (
    <Plan2009Context.Provider value={{ aprobadas2009, setAprobadas2009 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Plan2009 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Plan2023 />
        </Grid>
      </Grid>
    </Plan2009Context.Provider>
  );
}

export default App;
