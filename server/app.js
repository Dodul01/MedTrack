const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let medicinesCollection;

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to database');
        const database = client.db('medicinesDB');
        medicinesCollection = database.collection('medicines');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

app.get('/medicines', async (req, res) => {
    try {
        const medicines = await medicinesCollection.find({}).toArray();
        res.json(medicines);
    } catch (error) {
        console.error('Error fetching medicines:', error);
        res.status(500).send('Internal Server Error');
    }
});

connectToDatabase().catch(console.error);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
