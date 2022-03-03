const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const fs = require('fs');

const port = process.env.PORT || 4000;

const app = express();


axios.get('https://dev.to/')
    .then(res => {
        // const $ = cheerio.load(res.data);
        const fullText = res.data
        const markupWithoutTags = fullText.toString().replace(/<[^>]*>?/gm, '');
        // console.log(markupWithoutTags);

        fs.writeFile('Output.txt', markupWithoutTags, (err) => {
            if (err) throw err;
        })
    }).catch(err => console.error(err))

//Listen to server
app.listen(port, () => {
    console.log(`Server Established and  running on Port ⚡${port}`)
})
