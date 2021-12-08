const { lowerCase } = require("lodash");
const mongoose = require("mongoose");

const fieldsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    days: {
        type: [{
            day: {
                type: Date,
                required: true
            },
            hours: [{
                teamId: {
                    type: Number,
                    required: true
                }
            }]
        }],
        required: true
    }
});

// fields: {
//     name: String,
//     days: [{
//         day: Number,
//         hours: [{
//             teamId: Number
//         }]
//     }]
// });

module.exports = mongoose.model("fields", fieldsSchema);