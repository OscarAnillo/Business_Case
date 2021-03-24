import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme =>({
    navStyle: {
        [theme.breakpoints.up('sm')] : {
            background: 'linear-gradient(to bottom, #fff, #eee)'
        }
    },
    ulStyle: {
        display: 'block',
        textAlign: 'center',
        listStyle: 'none',
        margin: '.5em 0',
        padding: '1em 0',
        textTransform: 'uppercase',
        [theme.breakpoints.up('sm')] : {
            display: 'flex',
            justifyContent: 'space-around'
        }
    },
    LinkStyle: {
        textDecoration: 'none',
    },
    liStyle: {
        color: '#000',
        padding: '1em 0',
        fontSize: '2rem',
        cursor: 'pointer',
        transition: '.3s',
        '&:hover': {
            color: '#858585',
            textShadow: '1px 3px 5px #000'
        }
    }
})) 
    

export default function NavBarComp(){
    const classes = useStyles()

    return(
        <nav className={classes.navStyle}>
            <ul className={classes.ulStyle}>
                <Link to="/users"className={classes.LinkStyle}><li className={classes.liStyle}>Users</li></Link>
                <li className={classes.liStyle}>Repos</li>
            </ul>
        </nav>
    )
}