const {Schema, model} = require('mongoose')

const WorkoutSchema = new Schema(
    {
     name: {
        type: String,
        required: true,
        
     },
     numberofreps:{
        type: Number,
        required: true,
        },
        date: {
            type: Date,
            required: true
        },
        user:{
            type: Schema.Types.ObjectId,
            ref: 'User', 
            required: true
        }
    },
    {
        toJSON: {
          virtuals: true
        }
      },
)
const Workout = model('Workout', WorkoutSchema);

module.exports = Workout;
