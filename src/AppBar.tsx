import MuiAppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'inherit',
    color: 'inherit',
    display: 'inherit',
    width: '125px',
  },
  icon: {
    margin: 'auto',
  },
}));

export default function AppBar() {
  const classes = useStyles();

  return (
    <MuiAppBar position="relative">
      <Toolbar>
        <a href="/" className={classes.link}>
          <FontAwesomeIcon icon={faCoffee} size="2x" className={classes.icon} />
          <Box m={1} />
          <Box>
            <Typography variant="h6" color="inherit" noWrap>
              あやみカフェ
            </Typography>
            <Typography variant="body2" color="inherit" noWrap>
              Ayamy Cafe
            </Typography>
          </Box>
        </a>
      </Toolbar>
    </MuiAppBar>
  );
}