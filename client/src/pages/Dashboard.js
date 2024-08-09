
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Grid, Paper, Box } from '@mui/material';

function Dashboard() {
  const navigate = useNavigate();

  const handleViewStocks = () => {
    navigate('/stock/AAPL'); // Navigate to the Stock Detail page for Apple (AAPL) as an example
  };

  const handleReadNews = () => {
    navigate('/news'); // Navigate to the News page (if implemented)
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Market Overview</Typography>
            <Box mt={2}>
              {/* Add market overview content here */}
              <Button variant="contained" color="primary" onClick={handleViewStocks}>
                View Stocks
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Latest News</Typography>
            <Box mt={2}>
              {/* Add latest news content here */}
              <Button variant="contained" color="primary" onClick={handleReadNews}>
                Read News
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
