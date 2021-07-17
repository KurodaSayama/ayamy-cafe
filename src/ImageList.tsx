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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import YouTube from 'react-youtube';
import itemData from './itemData';
import QRCode from 'qrcode.react';
import ReactToPrint from "react-to-print";
import IconButton from '@material-ui/core/IconButton';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import PrintIcon from '@material-ui/icons/Print';
import CloseIcon from '@material-ui/icons/Close';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
  recipeImg: {
    width: '100%',
    marginTop: '64px',
  },
  recipeCardHeader: {
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow: 'row',
    justifyContent: 'space-between',
  },
  recipeCardLogo: {
    paddingBottom: '20px',
    display: 'flex',
    flexFlow: 'row',
    color: '#cfb1b0',
  },
  modalRightContent: {
    width: '100%',
    overflow: 'auto'
  },
  tabs: {
    justifyItems: 'flex-end',
  },
  ingredients: {
    margin: '10px',
    padding: '10px',
    backgroundColor: '#FFE1E3',
    borderRadius: '6px',
  },
  steps: {
    margin: '10px',
    padding: '10px',
  },
  step: {
    marginBottom: '10px',
    fontSize: '12px',
  },
  icon: {
    margin: 'auto',
  },
  firstTab: {
    marginLeft: 'auto',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '20px solid #ffe1e0',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    width: '100%',
    outline: 'none',
    maxHeight: '85vh',
    overflow: 'auto',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'white',
    mixBlendMode: 'difference',
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`recipe-tabpanel-${index}`}
      aria-labelledby={`recipe-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box padding={0} paddingTop={2}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `recipe-tab-${index}`,
    'aria-controls': `recipe-tabpanel-${index}`,
  };
}

function RecipeTabs(props: any) {
  const item = props.item
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [language, setLanguage] = React.useState<string | null>('en');
  let printRef: any;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const handleLanguage = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment !== null) {
      setLanguage(newAlignment);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.modalRightContent}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
          aria-label="Recipe Tabs"
          className={classes.tabs}
        >
          <Tab className={classes.firstTab} label="ビデオ (Video)" {...a11yProps(0)} />
          {item.recipeCard &&
            <Tab label="レシピ (Recipe)" {...a11yProps(1)} />
          }
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          disableLazyLoading
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <YouTube videoId={item.videoId} containerClassName={'youtubeContainer'} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div ref={(el) => (printRef = el)}>
              <div className={classes.recipeCardHeader}>
                <div>
                  <div className={classes.recipeCardLogo}>
                    <FontAwesomeIcon icon={faCoffee} size="4x" className={classes.icon} />
                    <Box m={1} />
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h4" color="inherit" noWrap>
                          あやみカフェ
                      </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5" color="inherit" noWrap>
                          Ayamy Cafe
                      </Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <Typography variant="h6" align="left">
                    <Box display="none" displayPrint="box">
                      {item.title}
                    </Box>
                    <Box displayPrint="none">
                      {item.title}
                      <ReactToPrint
                        trigger={() => <IconButton aria-label="print">
                          <PrintIcon />
                        </IconButton>}
                        content={() => printRef}
                      />
                      <span>
                        <ToggleButtonGroup
                          value={language}
                          exclusive
                          onChange={handleLanguage}
                          aria-label="Language select"
                          size="small"
                        >
                          <ToggleButton value="en" aria-label="View in English" title="View in English">
                            EN
                        </ToggleButton>
                          <ToggleButton value="jp" aria-label="日本語で見る" title="日本語で見る">
                            JP
                        </ToggleButton>
                        </ToggleButtonGroup>
                      </span>
                    </Box>
                  </Typography>
                </div>

                <QRCode size={128} includeMargin fgColor="#cfb1b0" value={"http://www.youtube.com/watch?v=" + item.videoId} />
              </div>
              {language === 'en' &&
                <div>
                  <div className={classes.ingredients}>
                    <h4>Ingredients</h4>
                    <div>
                      {item.ingredientsEN.map((ingredient: any, index: number) => (
                        <span key={"ingredient-" + index}>{ingredient.name}, </span>
                      ))}
                    </div>
                  </div>
                  <div className={classes.steps}>
                    <h4>Steps</h4>
                    <div>
                      {item.stepsEN.map((step: any, index: number) => (
                        <div key={"step-" + index} className={classes.step}>{index + 1}. {step.step}</div>
                      ))}
                    </div>
                  </div>
                </div>
              }
              {language === 'jp' &&
                <div>
                  <div className={classes.ingredients}>
                    <h4>材料</h4>
                    <div>
                      {item.ingredientsJP.map((ingredient: any, index: number) => (
                        <span key={"ingredient-" + index}>{ingredient.name}, </span>
                      ))}
                    </div>
                  </div>
                  <div className={classes.steps}>
                    <h4>ステップ</h4>
                    <div>
                      {item.stepsJP.map((step: any, index: number) => (
                        <div key={"step-" + index} className={classes.step}>{index + 1}. {step.step}</div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            </div>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}

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
              //subtitle={<span>価格：{item.price}</span>}
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
              <IconButton aria-label="close" onClick={handleClose} className={classes.closeButton}>
                <CloseIcon />
              </IconButton>
              <Typography id={`transition-modal-title-${index}`} variant="h5" align="center">
                {item.title}
              </Typography>
              {/* {item.price !== '????' &&
              <Typography id={`transition-modal-description-${index}`} variant="body2" align="center" gutterBottom>
                価格：{item.price}
              </Typography>
              } */}
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={item.modalCols as GridSize}>
                  <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                    <img src={item.img} alt={item.title} className={classes.recipeImg} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={(12 - item.modalCols) as GridSize}>
                  <RecipeTabs item={item}></RecipeTabs>
                </Grid>
              </Grid>
            </Container>
          </Fade>
        </Modal>
      ))}
    </div>
  );
}
