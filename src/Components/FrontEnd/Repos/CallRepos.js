import { useState } from "react";
/* material-ui */
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

/* axios */
import axios from "axios";

const useStyles = makeStyles(theme => ({
    typoTitle: {
        fontSize: '1.1rem',
        [theme.breakpoints.up('sm')] : {
            fontSize: '1.3rem'
        }
    },
    formStyle: {
        border: '1px solid #eee',
        width: '90%',
        margin: '1em auto',
        padding: '1em 0',
        [theme.breakpoints.up('sm')] : {
            maxWidth : '850px'
        }
    },
    inputStyle : {
        padding: '1em .5em',
        border: '1px solid #eee',
        marginRight: '1em'
    },
    btnStyle: {
        padding: '1em .5em',
        border: 'none',
        borderRadius: 5,
        background: 'radial-gradient(circle, red, #fff)',
        textTransform: 'uppercase',
        color: '#fff',
        textShadow: '1px 1px 1px #000'
    }

}))



export default function Repos() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setUsername(e.target.value.toLowerCase());
  };

  const searchRepos = () => {
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <Typography className={classes.typoTitle}>Search Github repos</Typography>
      <form onSubmit={submitHandler} className={classes.formStyle}>
        <input type="text" value={username} onChange={changeHandler} placeholder="Type username for repos" className={classes.inputStyle}/>
        <button onClick={searchRepos} className={classes.btnStyle}>Search</button>
      </form>
      {loading && (<img src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
          alt="loading logo"
        />
      )}
      {data.map((x) => (
        <div key={x.id}>
          <p>Repository name: {x.name} <span>id: {x.id}</span></p>
          <p>Owner: {x.owner.login}</p>
        </div>
      ))}
    </div>
  );
}
