const mongoose = require("mongoose");

var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
    headline: {
        type: String,
        
    },

    summary: {
        type: String,
        
    },

  link: {
        type: String,
       
    },

    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
