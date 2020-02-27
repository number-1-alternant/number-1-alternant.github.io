var quotes = [
    {
        "quoteText":"You TOKEN to me ?",
        "quoteAuthor":"Blague immonde prononcée par Franck D. le Lundi 26 Novembre à 14:52:54:218"
    },
    {
        "quoteText":"Va pas falloir pousser mémé dans les orties quand elle est en short",
        "quoteAuthor":"Prononcée une nouvelle fois par Franck D. le Lundi 26 Novembre à 15:51:46:198"
    },
    {
        "quoteText":"Je trouve ça beau (Sabo)",
        "quoteAuthor":"Franck D. par rapport à Sabo (One Piece)"
    },
    {
        "quoteText":"1412-1421 : Jeanne d'arc elle a pas fait long FEU (!)",
        "quoteAuthor":"Franck D. par rapport à La Pucelle d'Orleans"
    },
    {
        "quoteText":"\"Ghaya Ghaya\" en lieu et place de \"Voyage Voyage\"",
        "quoteAuthor":"Fabien, détenteur de nouvelles lunettes"
    },
    {
        "quoteText":"\"Ca FaBien\" au lieu de \"Ca va bien\"",
        "quoteAuthor":"Fabien"
    },
    {
        "quoteText":'"J\'ai une putain de réputation" dixit Fabien\n"Inverse c\'est mieux" dixit Franck D. car cela donne "J\'ai une réputation de putain"',
        "quoteAuthor":"Franck D., le destructeur de nain de Donjons et Dragons"
    },
    {
        "quoteText":'Kibana le plus, Kibana le moins',
        "quoteAuthor":"Adnane"
    },
    {
        "quoteText":'Fabien : "Majid n\'est pas la il est en journée d\'intégration"',
        "quoteAuthor":'Adnane : "et bientôt il sera en recette"'
    },
    {
        "quoteText":'Fabien : "Mailer, met l\'heure"',
        "quoteAuthor":'Adnane : "HAHA on rigole bien !"'
    },
    {
        "quoteText":'Le Mapping au soleil',
        "quoteAuthor":'Fabien Michaud, skieur professionnel'
    },
    {
        "quoteText":'"La response (arRAY SPONSE) c\'est un array" dit Fabien',
        "quoteAuthor":'"C\'est ta mère la response" répond Franck de manière touchante'
    },
    {
        "quoteText":'En s\'adressant à Josselin : "Si tu me tires dessus je vais te frapper avec un objet connecté"',
        "quoteAuthor":'Majdi, maintenant caporal-chef du 3e régiment de tirailleurs en Tunisie'
    }
];
var quotesIndexes = randoSequence(0, quotes.length - 1);
var currentIndex = 0;


$(document).ready(function() {
    getQuote(quotes[quotesIndexes[currentIndex]]);
    $("#previousQuote").click(getPreviousQuote);
    $("#nextQuote").click(getNextQuote);
    $("#getQuote").click(function() {
	window.open("https://www.google.com/search?q=on+fait+des+gaufres+ou+on+...&oq=on+fait+des&aqs=chrome.0.69i59l2j69i57j0l3.1811j0j7&sourceid=chrome&ie=UTF-8");
    });
});

var getQuote = function(data) {
    $("#quote").text(data.quoteText);

    if (data.quoteAuthor === '') {
        data.quoteAuthor = 'Unknown';
    }
    $("#author").text("- " + data.quoteAuthor);
};

function getPreviousQuote() {
    if (currentIndex === 0) {
        currentIndex = quotes.length - 1;
    } else {
        currentIndex--;
    }

    $("#quote").text(quotes[quotesIndexes[currentIndex]].quoteText);
    $("#author").text(" - " + quotes[quotesIndexes[currentIndex]].quoteAuthor);
};

function getNextQuote() {
    if (currentIndex === quotes.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    $("#quote").text(quotes[quotesIndexes[currentIndex]].quoteText);
    $("#author").text(" - " + quotes[quotesIndexes[currentIndex]].quoteAuthor);
};

