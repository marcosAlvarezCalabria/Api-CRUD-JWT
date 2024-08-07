const mongoose = require('mongoose');

const Schema = mongoose.Schema()

const codeSnippetSchema= new Schema (
    {
        title : {
            type : String,
            required : true

        },
        content : {
            type : String,
            required : true
        },
        userId : {
            type: mongoose.Types.ObjectId,
            ref : "User",
            required : true,
        },
        createdAt: {
            type: Date,
            default: Date.now 
        },
        result: { 
            type: String 
        } // Almacena el resultado este sera opcional de momento 
    },
    {
        timestamps: true,
    }
)

const CodeSnippet = mongoose.model('Codesnippet', codeSnippetSchema);
module.exports = CodeSnippet;