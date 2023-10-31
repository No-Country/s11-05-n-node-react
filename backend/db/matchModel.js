import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  nameTeams: {
    type: [String], 
    
  },
  matchDate: {
    type: Date,
    
  },
  location: {
    type: String,
    
  }
});

const Match = mongoose.model('Match', matchSchema);

export default Match;
