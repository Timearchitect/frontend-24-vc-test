import * as dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.apikey;
console.log(`API Key: ${apiKey}`);