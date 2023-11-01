const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")

const { db } = require("./db");
// Define associations here
const initialize = async () => {
    await db.sync({force: true});

    await Band.bulkCreate([{name: 'dat boi', genre:'who knows', showCount: 2},
    {name: 'artic monkeys', genre:'rock', showCount: 10},
    {name: 'justice', genre:'electronic', showCount: 8}])

    Musician.bulkCreate([{name: 'cat',instrument: 'guitar'},
    {name: 'mouse',instrument: 'keyboard'},
    {name: 'dino',instrument: 'drums'}])

    Song.bulkCreate([{title: 'this song doesnt exits',year: 2005,length: 195},
    {title: 'civilization',year: 2011,length: 208},
    {title: 'fireside',year: 2013,length: 180}])
    
    console.log(await Band.findAll());
    console.log(await Musician.findAll());
    console.log(await Song.findAll());
}

initialize();

module.exports = {
    Band,
    Musician,
    Song
};
