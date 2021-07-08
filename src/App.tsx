import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import AppBar from './AppBar';
import Hero from './Hero';
import ImageList from './ImageList';
import github_mark from './images/github-mark.png';
import github_logo from './images/github-logo.png';

const useStyles = makeStyles((theme) => ({
  main: {
    background: 'repeating-linear-gradient(110deg,#fff,#fff 50px,#ffe1e0 50px,#ffe1e0 100px);',
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(6),
    color: theme.palette.primary.contrastText,
    textAlign: 'center'
  },
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
        <FontAwesomeIcon icon={faCoffee} size="2x" />
        <Typography variant="h6" align="center">
          あやみカフェ
        </Typography>
        <Typography variant="body2" align="center">
          Ayamy Cafe
        </Typography>
        <Box m={2} />
        <a href="https://github.com/KurodaSayama/ayamy-cafe" target="_blank" rel="noreferrer">
          <img src={github_mark} alt='GitHub Mark' />
          <img src={github_logo} alt='GitHub Logo' />
        </a>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}