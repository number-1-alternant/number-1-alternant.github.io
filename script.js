// Random Quote Generator
var quoteArray = [];
var singleQuote = [];
var quoteCount = null; // used to track number of quotes collected
var quoteIndex = null; // used to cycle through collected quotes
var tweetQuote = "";
var quotes = [
    {
        "quoteText":"Bonjour",
        "quoteAuthor":"Tout le monde"
    },
    {
        "quoteText":"Au revoir",
        "quoteAuthor":"Tout le monde"
    },
    {
        "quoteText":"Salut",
        "quoteAuthor":"Tout le monde"
    },
];

$(document).ready(function() {
    getQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    $("#previousQuote").click(getPreviousQuote);
    $("#nextQuote").click(getNextQuote);
    $("#getQuote").click(function() {
	if(quoteIndex < quotes.length) {
	    getQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	}
    });
});

var getQuote = function(data) {
    // Reset quoteNumber if used to cycle through previously collected quotes
    if (quoteIndex < quoteCount - 1) {
        quoteIndex = quoteCount - 1;
    }

    if ((!quoteIndex) && (!quoteCount)) {
        quoteIndex = 0;
        quoteCount = 1;
    } else {
        quoteIndex++;
        quoteCount++
    }
    $("#quote").text(data.quoteText);

    if (data.quoteAuthor === '') {
        data.quoteAuthor = 'Unknown';
    }
    $("#author").text("- " + data.quoteAuthor);

    singleQuote = [data.quoteText, data.quoteAuthor, quoteIndex];
    quoteArray.push(singleQuote);
};

function getPreviousQuote() {

    // cycle to back of the list
    if (quoteIndex === 0) {
        quoteIndex = quoteCount - 1;
    } else {
        quoteIndex--;
    }

    $("#quote").text(quoteArray[quoteIndex][0]);
    $("#author").text(" - " + quoteArray[quoteIndex][1]);
    tweetQuote = quoteArray[quoteIndex][0] + " - " + quoteArray[quoteIndex][1];

};

function getNextQuote() {
    // cycle to front of the list
    if (quoteIndex === quoteCount - 1) {
        quoteIndex = 0;
    } else {
        quoteIndex++;
    }

    $("#quote").text(quoteArray[quoteIndex][0]);
    $("#author").text(" - " + quoteArray[quoteIndex][1]);
    tweetQuote = quoteArray[quoteIndex][0] + " - " + quoteArray[quoteIndex][1];
};

