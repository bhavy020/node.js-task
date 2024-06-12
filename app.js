const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
// Add vendorRoutes here once they are defined
// const vendorRoutes = require('./routes/vendorRoutes');

const app = express();
app.use(bodyParser.json());

const dbURI = 'your_mongo_db_uri_here';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/products', productRoutes);
// app.use('/api/vendors', vendorRoutes); // Add this once vendor routes are defined

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
