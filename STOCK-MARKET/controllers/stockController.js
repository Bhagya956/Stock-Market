const Stock = require('../models/Stock');

exports.getStocks = async (req, res) => {
    try {
        const stocks = await Stock.find();
        res.json(stocks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.addStock = async (req, res) => {
    const { symbol, price } = req.body;

    try {
        const newStock = new Stock({
            symbol,
            price
        });

        const stock = await newStock.save();
        res.json(stock);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
