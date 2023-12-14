import { IconButton, Avatar } from '@mui/material';
import {Forum} from '@mui/icons-material';
import './Header.css';


export default function Header(){
    return(
        <div className='header'>
            <IconButton>
                <Avatar sx={{width:56,height:56}} src="https://mui.com/static/images/avatar/1.jpg" />
            </IconButton>
            <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="react logo" />
            <IconButton>
                <Forum />
            </IconButton>
        </div>
    )
}