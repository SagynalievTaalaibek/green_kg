import { NavLink } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import styles from './NewsCard.module.css';

const NewsCard = () => {
  return (
    <Box className={styles.newsCard}>
      <p className={styles.newsCardTitle}>Lorem ipsum dolor sit amet.</p>
      <div className={styles.rateCardTextBlocks}>
        <div className={styles.rateCardTextBlock}>
          <p className={styles.newsCardText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
            sequi.
          </p>
        </div>
      </div>
      <div className={styles.lastNewsDateTimeLink}>
        <div className={styles.dates}>
          <p className={styles.cardDateText}>
            <strong>Дата: </strong>
            26.01.2025
          </p>
        </div>
        <NavLink className={styles.cardBtnLink} to={`news/${''}`}>
          <ArrowOutwardIcon />
        </NavLink>
      </div>
    </Box>
  );
};

export default NewsCard;
