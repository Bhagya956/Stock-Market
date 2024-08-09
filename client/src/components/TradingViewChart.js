
import React, { useEffect, useRef } from 'react';

function TradingViewChart({ symbol }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      // Initialize the widget after the script is loaded
      new window.TradingView.widget({
        container_id: containerRef.current.id,
        symbol: symbol,
        interval: 'D',
        theme: 'light',
        locale: 'en',
        autosize: true,
        style: '1',
        timezone: 'Etc/UTC',
        allow_symbol_change: true,
        details: true,
        hotlist: true,
      });
    };

    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [symbol]);

  return (
    <div id="tradingview-chart" ref={containerRef} style={{ width: '100%', height: '500px' }}></div>
  );
}

export default TradingViewChart;
