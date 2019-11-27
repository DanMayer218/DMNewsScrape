const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const for the creation of a new schema from the scrapes
const HeadlineSchema = new Schema ({
	headline: {
		type: String,
		unique: true
	},
	summary: {
		type: String
	},
	link: {
		type: String
	},
	photo: {
		type: String
	},
	date: {
		type: Date
	},
	saved: {
		type: Boolean,
		default: false
	},
	note: [
		{
			type: Schema.Types.ObjectId,
			ref: "Note"
		}
	]
});

const Headline = mongoose.model("Headline", HeadlineSchema);

module.exports = Headline;