import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import greenLogo from '../../assets/logo/green_logo.png';
import { IconButton, Typography } from '@mui/material';
import { NAVIGATION_LINK } from '../../app/constants/navigation.ts';

import LanguageIcon from '@mui/icons-material/Language';

const settings = ['Русский', 'English', 'Кыргызча'];

const Navigation = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [language, setLanguage] = React.useState<null | HTMLElement>(null);

  const openLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLanguage(event.currentTarget);
  };

  const closeLanguageMenu = () => {
    setLanguage(null);
  };

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (address: string) => {
    navigate(`/${address}`);
    handleCloseNavMenu();
  };

  const [menuState, setMenuState] = React.useState<{
    [key: string]: HTMLElement | null;
  }>({}); // Состояние для каждого меню

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    setMenuState((prevState) => ({
      ...prevState,
      [id]: event.currentTarget,
    }));
  };

  const handleClose = (id: string) => {
    setMenuState((prevState) => ({
      ...prevState,
      [id]: null,
    }));
  };

  return (
    <div
      style={{
        color: 'black',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          margin: 0,
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <img
          src={greenLogo}
          alt="GREEN Logo"
          className="green_logo"
          onClick={() => navigate('/')}
        />
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton size="large" onClick={openMenu} color="inherit">
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {NAVIGATION_LINK.map((page) => (
            <div key={page.id}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">{page.main}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {page.options.map((option) => (
                    <Button
                      key={option.id}
                      variant="outlined"
                      size={'small'}
                      sx={{ width: '100%', mb: 1 }}
                      onClick={() => handleNavigate(option.address)}
                    >
                      {option.name}
                    </Button>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </Menu>
      </Box>

      <Box sx={{ margin: 0, display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
        <img
          src={greenLogo}
          alt="GREEN Logo"
          className="green_logo"
          onClick={() => navigate('/')}
        />
      </Box>
      <IconButton
        sx={{ display: { xs: 'flex', md: 'none' } }}
        size="large"
        onClick={openLanguageMenu}
      >
        <LanguageIcon />
      </IconButton>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          marginLeft: 3,
        }}
      >
        <Button
          aria-haspopup="true"
          sx={{ color: 'black' }}
          onClick={() => navigate('/')}
        >
          Главная
        </Button>
        {NAVIGATION_LINK.map((page) => (
          <div key={page.id}>
            <Button
              id={`basic-button-${page.id}`}
              aria-controls={
                menuState[page.id] ? `basic-menu-${page.id}` : undefined
              }
              aria-haspopup="true"
              aria-expanded={menuState[page.id] ? 'true' : undefined}
              onClick={(event) => handleClick(event, page.id)}
              sx={{ color: 'black' }}
            >
              {page.main}
            </Button>
            <Menu
              id={`basic-menu-${page.id}`}
              anchorEl={menuState[page.id]}
              open={Boolean(menuState[page.id])}
              onClose={() => handleClose(page.id)}
              MenuListProps={{
                'aria-labelledby': `basic-button-${page.id}`,
              }}
            >
              {page.options.map(({ name, address }) => (
                <MenuItem
                  key={name}
                  onClick={() => {
                    handleClose(page.id);
                    navigate(`/${address}`);
                  }}
                >
                  {name}
                </MenuItem>
              ))}
            </Menu>
          </div>
        ))}
      </Box>
      <Box>
        <IconButton
          sx={{ display: { xs: 'none', md: 'flex' }, margin: 0, padding: 0 }}
          onClick={openLanguageMenu}
        >
          <LanguageIcon sx={{ fontSize: '35px' }} />
        </IconButton>

        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={language}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(language)}
          onClose={closeLanguageMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={closeLanguageMenu}>
              <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  );
};
export default Navigation;
