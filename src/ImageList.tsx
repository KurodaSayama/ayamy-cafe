import { makeStyles, useTheme } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  imageList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function SingleLineImageList() {
  const classes = useStyles();

  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));

  var cols;
  if (lg) {
    cols = 4;
  }
  else if (md) {
    cols = 3;
  }
  else if (sm) {
    cols = 2;
  }
  else {
    cols = 1;
  }

  return (
    <div className={classes.root}>
      <ImageList cols={cols} gap={0} className={classes.imageList}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={1} rows={1.5}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>値段：{item.price}</span>}
              classes={{
                root: classes.titleBar,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
