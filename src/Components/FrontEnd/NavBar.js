import {AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme =>({
    toolBarStyle: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')] : {
            width: '50%',
            margin: 'auto',
            
        }
    },
    linkStyle: {
        color: '#fff',
        textDecoration: 'none',
        [theme.breakpoints.up('sm')] : {
            margin: '0 1em',
            
        }
    }
})) 
    

export default function NavBarComp(props){
    const {position } = props
    const classes = useStyles()

    return(
        <AppBar position={position}>
            <Toolbar className={classes.toolBarStyle}>
                <Tabs>
                    <Link to="/users" className={classes.linkStyle}><Tab label="Users"/></Link>
                    <Link to="/repos" className={classes.linkStyle}><Tab label="Repos"/></Link>
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}