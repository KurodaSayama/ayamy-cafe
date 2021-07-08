import MuiAppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function AppBar() {
  const classes = useStyles();

  return (
    <MuiAppBar position="relative">
      <Toolbar>
        <FontAwesomeIcon icon={faCoffee} size="2x" className={classes.icon} />
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" color="inherit" noWrap>
              あやみカフェ
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="inherit" noWrap>
              Ayamy Cafe
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
}