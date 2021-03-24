import {useState} from 'react';
import axios from 'axios';


export default function CallUsers(){
    const [data, setData] = useState([]);
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

    const searchUsers = () => {
        setLoading(true)
        axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
            setData(res.data)
            setLoading(false)

        })
        .catch((err) => console.log(err))
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return(
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="type username"/>
                    <button onClick={searchUsers}>Search</button>
                </form>
                {loading && <h1>Loading...</h1>}
                {data.map(x => (
                    <div key={x.id}>
                        <p>Repo id: {x.id}</p>
                        <p>Repo name: {x.name}</p>
                        <img src={x.avatar_url} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}