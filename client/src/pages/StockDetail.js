
import React from 'react';
import { useParams } from 'react-router-dom';
import TradingViewChart from '../components/TradingViewChart';
import { Container, Typography } from '@mui/material';

function StockDetail() {
  const { id } = useParams(); // Extract the stock ID from the URL

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Stock Details for: {id}
      </Typography>
      <TradingViewChart symbol={id} />
    </Container>
  );
}

export default StockDetail;
