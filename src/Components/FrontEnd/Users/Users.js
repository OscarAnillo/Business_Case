import {useState} from 'react';

/* material-ui */
import {makeStyles} from '@material-ui/core/styles';

/* axios */
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    divStyle: {
        border: '1px solid red'
    }
}))
export default function CallUsers(){
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

    const searchUsers = () => {
        setLoading(true)
        axios.get(`https://api.github.com/users`).then((res) => {
            setData(res.data)
            setLoading(false)

        })
        .catch((err) => console.log(err))
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return(
        <div className={classes.divStyle}>
            <div>
                <form onSubmit={submitHandler}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="type username"/>
                    <button onClick={searchUsers}>Search</button>
                </form>
                {loading && <h1>Loading...</h1>}
                {data.map(x => (
                    <div key={x.id}>
                        <p>Name: {x.name}</p>
                        <img src={x.avatar_url} alt="avatar" />
                    </div>
                ))}
            </div>
        </div>
    )
}