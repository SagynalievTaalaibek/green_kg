import styles from './MainPage.module.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';
import { WP } from '../../app/constants/wp.ts';
import Box from '@mui/material/Box';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginBottom: '100px' }}>
        <div className={styles.mainPage}>
          <div className="container">
            <Typography sx={{ fontSize: '45px', fontWeight: 700, margin: 0 }}>
              GREEN AND DIGITAL UNIVERSITIES
            </Typography>
            <Typography
              sx={{ fontSize: '45px', fontWeight: 700, marginTop: 3 }}
            >
              FOR SUSTAINABLE DEVELOPMENT
            </Typography>
            <Typography
              sx={{ fontSize: '45px', fontWeight: 700, marginTop: 3 }}
            >
              OF KYRGYZSTAN
            </Typography>
          </div>
        </div>
        <Box sx={{ backgroundColor: '#ECFFE8' }}>
          <div className="container">
            <Typography
              sx={{
                fontSize: '40px',
                fontWeight: 700,
                paddingTop: 2,
                marginBottom: 2,
              }}
            >
              Work Packages
            </Typography>
            <div className={styles.cards}>
              {WP.map((item) => (
                <div className={styles.card} key={item.id}>
                  <div className={styles.card__text}>
                    <h4>{item.name}</h4>
                    <div className={styles.card__circle}>
                      <span className={styles.card__number}>{item.number}</span>
                    </div>
                  </div>
                  <Button
                    variant="outlined"
                    startIcon={<ArrowOutwardIcon />}
                    onClick={() => navigate(`/${item.address}`)}
                  >
                    Подробнее
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default MainPage;
