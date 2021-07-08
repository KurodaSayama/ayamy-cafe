import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import AppBar from './AppBar';
import Hero from './Hero';
import ImageList from './ImageList';

const useStyles = makeStyles((theme) => ({
  main: {
    background: 'repeating-linear-gradient(110deg,#fff,#fff 50px,#ffe1e0 50px,#ffe1e0 100px);',
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(6),
    color: theme.palette.primary.contrastText,
  },
  coffeeIcon: {
    display: 'block',
    margin: 'auto',
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <main className={classes.main}>
        <Hero />
        <ImageList />
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <FontAwesomeIcon icon={faCoffee} size="2x" className={classes.coffeeIcon} />
        <Typography variant="h6" align="center">
          あやみカフェ
        </Typography>
        <Typography variant="body2" align="center">
          Ayamy Cafe
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}