import styles from './MainPage.module.css';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';
import { WP } from '../../app/constants/wp.ts';
import Box from '@mui/material/Box';
import NewsCard from './components/NewsCard.tsx';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginBottom: '100px' }}>
        <div className={styles.mainPage}>
          <div className="container">
            <h5 className={styles.main__title}>
              GREEN AND DIGITAL UNIVERSITIES
            </h5>
            <h5 className={styles.main__title}>FOR SUSTAINABLE DEVELOPMENT</h5>
            <h5 className={styles.main__title}>OF KYRGYZSTAN</h5>
          </div>
        </div>
        <Box sx={{ backgroundColor: '#ECFFE8', pb: 4 }}>
          <div className="container">
            <h4 className={styles.section__title}>Work Packages</h4>
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
                    onClick={() => navigate(`/wp/${item.number}`)}
                  >
                    Подробнее
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Box>
        <div className="container">
          <h4 className={styles.section__title}>Last News</h4>
          <div className={styles.news__cards}>
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
