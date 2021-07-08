import './css/YouTube.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Timeline, Follow } from 'react-twitter-widgets';
import YouTube from 'react-youtube';
import ayamyCooking from './images/ayamy-cooking.png';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  ayamyCooking: {
    maxWidth: '100%',
  },
  embedsContainer: {
    display: 'contents',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="lg">
        <Grid container direction="column">
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2} direction="column">
                  <Grid item xs={12}>
                    <Typography component="h1" variant="h3" align="center" color="textPrimary">
                      あやみカフェ
        </Typography>
                    <Typography component="h1" variant="h6" align="center" color="textPrimary" gutterBottom>
                      Ayamy Cafe
        </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                      彼氏たちの素敵で可愛いで面白い（芸人ではない）彼女が作った料理を鑑賞するための非公式サイト。
        </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                      An unofficial website to appreciate the food made by our lovely, cute and funny (not comedian) girlfriend.
        </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4} className={classes.textAlignCenter}>
                <img src={ayamyCooking} className={classes.ayamyCooking} alt='Ayamy Cooking' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.embedsContainer}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <YouTube videoId="dFzSIFr4pHU" containerClassName={'youtubeContainer'} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Follow
                  username={'ayamy_garubinu'}
                  options={{
                    size: 'large'
                  }}
                />
                <Timeline
                  dataSource={{
                    sourceType: 'profile',
                    screenName: 'ayamy_garubinu'
                  }}
                  options={{
                    height: '430px'
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}