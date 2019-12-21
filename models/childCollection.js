const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const childSchema = new Schema({
    child_id: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: false
    },
    motherName: {
        type: String,
        required: false
    },
    parentContact: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    vaccine_1: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    vaccine_2: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    vaccine_3: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    vaccine_4: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    vaccine_5: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    vaccine_6: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    vaccine_7: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    vaccine_8: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    vaccine_9: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    vaccine_10: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    vaccine_11: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    vaccine_12: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    vaccine_13: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default  :false
        }
    },
    
})

const childModel = mongoose.model('children',childSchema)

module.exports = childModel