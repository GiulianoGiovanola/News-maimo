import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InternacionalesIcon from '@mui/icons-material/Public';
import PoliticaIcon from '@mui/icons-material/Work';
import DeportesIcon from '@mui/icons-material/Sports';
import TecnologiaIcon from '@mui/icons-material/Devices';
import EspectaculosIcon from '@mui/icons-material/Theaters';
import DisenoIcon from '@mui/icons-material/DesignServices';
import GamingIcon from '@mui/icons-material/SportsEsports';

export default function TemporaryDrawer({isOpen, toggleDrawer}) {
    const secciones = [
        { label: 'Deportes', url: 'deportes', icon: <DeportesIcon /> },
        { label: 'Politica', url: 'politica', icon: <PoliticaIcon />},
        { label: 'Tecnologia', url: 'tecnologia', icon: <TecnologiaIcon />},
        { label: 'Espectaculos', url: 'espectaculos', icon: <EspectaculosIcon />},
        { label: 'Internacionales', url: 'internacionales', icon: <InternacionalesIcon />},
        { label: 'Diseño', url: 'diseño', icon: <DisenoIcon /> },
        { label: 'Gaming', url: 'gaming', icon: <GamingIcon /> }]
    
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {secciones.map(({ label, url, icon }) =>
                    <Link to={`/category/${url}`}>
                        <ListItem button>
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                )}
            </List>

        </Box>
    );

    return (
        <>
            <Drawer
                anchor={'left'}
                open={isOpen}
                onClose={toggleDrawer}
            >
                {list('left')}
            </Drawer>
        </>
    );
}