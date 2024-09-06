const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://baha12:guinea12@atlascluster.uo6wr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster');

const homeDataSchema = new mongoose.Schema({
    title:{type:String},
    section_1: {type: String},
    section_2: {type: String},
    section_3: {type: String},
    section_4: {type: String},
})

const home_data = mongoose.model('home_data',homeDataSchema);

const data = new home_data({
    title: 'practice one',
    section_1: 'The sun was setting over the horizon, casting an orange glow across the landscape. Birds chirped softly as they prepared to rest for the night. A gentle breeze rustled the leaves, creating a serene and peaceful atmosphere',
    section_2: 'The sun was setting over the horizon, casting an orange glow across the landscape. Birds chirped softly as they prepared to rest for the night. A gentle breeze rustled the leaves, creating a serene and peaceful atmosphere',
    section_3: 'The sun was setting over the horizon, casting an orange glow across the landscape. Birds chirped softly as they prepared to rest for the night. A gentle breeze rustled the leaves, creating a serene and peaceful atmosphere',
    section_4: 'the data is coming from atlas'
});

home_data.deleteMany({})
  .then(() => {
    console.log('The data is deleted in the database');
    return data.save();
  })
  .then(() => {
    console.log('The data is saved in the database');
  })

module.exports = home_data;