import {useState} from 'react';

/* material-ui */
import {Avatar, Card, CardContent, CardHeader, CardMedia, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

/* axios */
import axios from 'axios';

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
    },
    cardStyle: {
        padding: '1em 0',
        background: 'linear-gradient(to bottom, pink, #eee)'
    },
    cardAvatar: {
        background: 'red',
        fontSize: '1rem',
        
    },
    cardImageStyle: {
        height: 270,
        [theme.breakpoints.up('sm')] : {
            height: 320
        }
    }
}))
export default function CallUsers(){
    const classes = useStyles();
    const [data, setData] = useState(undefined);
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

    const searchUsers = () => {
        setLoading(true)
        axios.get(`https://api.github.com/users/${username}`).then((res) => {
            setData(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }
    
    return(
        <div className="App">
            <Typography className={classes.typoTitle}>Search Github users</Typography>
                <form onSubmit={submitHandler} className={classes.formStyle}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Type any username" className={classes.inputStyle}/>
                    <button onClick={searchUsers} className={classes.btnStyle}>Search</button>
                </form>
                {loading && <h1>Loading...</h1>}
                <div>
                    {data && (
                        <Grid container spacing={1} justify="center" alignItems="center">
                        <Grid item xs={12} sm={10} md={3}>
                            <Card className={classes.cardStyle}>
                                <CardHeader avatar={<Avatar className={classes.cardAvatar}>{data.type}</Avatar>} title={data.login} />
                                <CardMedia image={data.avatar_url} className={classes.cardImageStyle}/>
                                <CardContent><Typography><b>Bio</b>: {data.bio}</Typography></CardContent>
                                <CardContent><Typography><b>In Github Since</b>: {data.created_at}</Typography></CardContent>
                            </Card>
                            </Grid>
                            <Grid item xs={12} sm={10} md={3}>
                            <Card className={classes.cardStyle}>
                                <CardContent><Typography><b>Blog</b>: {data.blog}</Typography></CardContent>
                            </Card>
                            </Grid>
                            <Grid item xs={12} sm={10} md={2}>
                            <Card className={classes.cardStyle}>
                                <CardContent><Typography><b>Public repos</b>: {data.public_repos}</Typography></CardContent>
                            </Card>
                            </Grid>
                            <Grid item xs={12} sm={10} md={2}>
                            <Card className={classes.cardStyle}>
                                <CardContent><Typography><b>Company</b>: {data.company}</Typography></CardContent>
                            </Card>
                            </Grid>
                    </Grid>
                    )}
                    
                </div>

        </div>
    )
}