import { useParams } from 'react-router-dom';
import styles from './wpPage.module.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { PARTNERS, WP1 } from '../../app/constants/wp.ts';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const WpPage = () => {
  const { id } = useParams() as { id: string };

  const [activeTabs, setActiveTabs] = useState<{ [key: string]: number }>({});

  const handleChange = (partnerId: string, newValue: number) => {
    setActiveTabs((prev) => ({
      ...prev,
      [partnerId]: newValue,
    }));
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h4 className={styles.wp__title}>Tasks of WP {id}</h4>
        <div className={styles.tasks}>
          {WP1.map((item) => (
            <div className={styles.task} key={item.id}>
              <ArrowRightIcon
                sx={{
                  fontSize: {
                    xs: '25px',
                    sm: '35px',
                    md: '40px',
                  },
                }}
              />{' '}
              {item.text}
            </div>
          ))}
        </div>
        <h4 className={styles.wp__title}>Results of WP {id}: </h4>
        <div className={styles.results}>
          {PARTNERS.map((partner) => (
            <Accordion key={partner.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: {
                      xs: '14px',
                      sm: '17px',
                      md: '20px',
                    },
                  }}
                >
                  {partner.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                      variant="scrollable"
                      scrollButtons="auto"
                      value={activeTabs[partner.id] || 0}
                      onChange={(_, newValue) =>
                        handleChange(partner.id, newValue)
                      }
                      aria-label="basic tabs example"
                    >
                      {WP1.map((task, i) => (
                        <Tab
                          key={`tabs-${partner.id}-${task.id}`}
                          label={task.name}
                          {...a11yProps(i)}
                        />
                      ))}
                    </Tabs>
                  </Box>
                  {WP1.map((task, i) => (
                    <CustomTabPanel
                      key={`panel-${partner.id}-${task.id}`}
                      value={activeTabs[partner.id] || 0}
                      index={i}
                    >
                      <p className={styles.tab__text}>{task.text}</p>
                    </CustomTabPanel>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WpPage;
