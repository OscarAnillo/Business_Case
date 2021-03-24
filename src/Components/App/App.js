import {useRef, useEffect} from 'react';

/* Material- ui */
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

/* gsap */
import gsap from 'gsap'

import './App.css';

const useStyles = makeStyles(theme => ({
  divStyle: {
    height: '100vh',
    background: 'linear-gradient(to bottom, #eee, pink)',
  },
  divText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #111',
    borderRadius: 5,
    width: '90%',
    padding: '3em 0',
    boxShadow: '3px 5px 10px #000',
    [theme.breakpoints.up('md')] : {
      maxWidth: '700px',
      padding: '5em 0',
    }
  },
  typoStyle: {
    fontSize: '3rem',
    color: '#eee',
    textShadow: '1px 3px 5px #000'
  },
  typoLegendStyle: {
    fontSize: '1.1rem',
    width: '90%',
    margin: 'auto',
    [theme.breakpoints.up('md')] : {
      fontSize: '1.3rem',
    }
  }
}))




function App() {
  const classes = useStyles();
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(bgRef.current, {opacity: 0, duration: 1, ease: 'slow'}, {opacity: 1, duration: 1, ease: 'slow'})
  }, [])

  return (
    <div className="App">
      <div className={classes.divStyle} ref={bgRef}>
        <div className={classes.divText}>
        <Typography className={classes.typoStyle}>HEY THERE!</Typography>
        <Typography className={classes.typoLegendStyle}>Check Github users and their repos with the links above</Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
