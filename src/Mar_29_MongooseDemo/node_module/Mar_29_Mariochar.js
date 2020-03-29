const Schema = mongoose.Schema;

const MarioCharSchema = new Schema({
    name:String,
    weight:Number
});

const MarioChar = mongoose.model('mariochar', MariocharSchema);
module.exports = MarioChar;
