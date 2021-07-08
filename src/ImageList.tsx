import './css/YouTube.css';
import './css/ImageList.css';
import React from 'react';
import Box from '@material-ui/core/Box';
import Grid, { GridSize } from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import YouTube from 'react-youtube';
import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflowX: 'clip',
    overflowY: 'visible',
  },
  imageList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    overflow: 'visible',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '20px solid #ffe1e0',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '100%',
    outline: 'none',
  },
}));

export default function SingleLineImageList() {
  const classes = useStyles();

  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up('xl'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));

  var cols;
  if (xl) {
    cols = 6;
  }
  else if (lg) {
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

  const [openIndex, setOpenIndex] = React.useState(-1);

  const handleOpen = (index: number) => {
    setOpenIndex(index);
  };

  const handleClose = () => {
    setOpenIndex(-1);
  };

  return (
    <div className={classes.root}>
      <ImageList cols={cols} gap={0} className={classes.imageList}>
        {itemData.map((item, index) => (
          <ImageListItem
            key={index}
            cols={1}
            rows={1.5}
            className={'imageZoom'}
            onClick={() => handleOpen(index)}
          >
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>価格：{item.price}</span>}
              classes={{
                root: classes.titleBar,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {itemData.map((item, index) => (
        <Modal
          key={index}
          aria-labelledby={`transition-modal-title-${index}`}
          aria-describedby={`transition-modal-description-${index}`}
          className={classes.modal}
          open={index === openIndex}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={index === openIndex}>
            <Container className={classes.paper} maxWidth="lg">
              <Typography id={`transition-modal-title-${index}`} variant="h5" align="center">
                {item.title}
              </Typography>
              <Typography id={`transition-modal-description-${index}`} variant="body2" align="center" gutterBottom>
                価格：{item.price}
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={item.modalCols as GridSize}>
                  <Box display={{ xs: 'none', md: 'block' }}>
                    <img src={item.img} alt={item.title} width='100%' />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={(12 - item.modalCols) as GridSize}>
                  <YouTube videoId={item.videoId} containerClassName={'youtubeContainer'} />
                </Grid>
              </Grid>
            </Container>
          </Fade>
        </Modal>
      ))}
    </div>
  );
}
