const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const StatementOfClaimeSchema = new Schema({

    body: {
        type: Schema.Types.Object
    },
    userId: {
        type: Schema.Types.String,
    },
    title: {
        type: Schema.Types.String,
    },
    data:{
        type: Schema.Types.String,
    }

    }
);

const StatmentOfClaim = mongoose.model('statmentOfClaimeSchema', StatementOfClaimeSchema);



module.exports = StatmentOfClaim;