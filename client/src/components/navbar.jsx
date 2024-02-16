import {AppBar,Toolbar,styled} from '@mui/material'
import { NavLink } from 'react-router-dom'


const Header=styled(AppBar)`
background: #111111`

const Tabs=styled(NavLink)`
text-decoration:none;
color:#fff;
font-size: 20px;
margin-right:20px;`
const Navbar =()=>{
    return(
        <Header position='static'>
            <Toolbar>
            <Tabs to='/'>Home</Tabs>
          <Tabs to='all'>AllUsers</Tabs>
          <Tabs to='add'>AddUser</Tabs>
            </Toolbar>
        </Header>
    )
}

export default Navbar;