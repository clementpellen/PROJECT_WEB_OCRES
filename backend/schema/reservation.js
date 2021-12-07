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
                type: Number,
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

fieldsSchema.methods.changeToFree = function(iDay, iHour) {
    this.days[iDay].hours[iHour].teamId = 0;
}

fieldsSchema.methods.changeTeamId = function (iDay, iHour, teamId) {
    if(teamId !== 0)
        if (this.days[iDay].hours[iHour].teamId === 0)
            this.days[iDay].hours[iHour].teamId = teamId;
}

module.exports = mongoose.model("fields", fieldsSchema);