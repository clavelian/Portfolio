

import Paper from '@mui/material/Paper';
import '../CSS/Navbar.css'


const Navbar = () => {
    return (
        <>  
        <Paper elevation={3}
        sx={{
            display: 'flex',
            listStyle: 'none',
            m: 4,   
            gap: 3,
            listStyleType: 'none'
        }}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact Me</li>
            </ul>
        </Paper>   
        </>
    );
}
 
export default Navbar;