// This is a simple JavaScript function to display a random quote from an array of quotes
    function getRandomQuote() {
    let quotes = [
        { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
        { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
        { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
        { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
        { text: "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).", author: "Mark Twain" },
        { text: "I'm not afraid of death; I just don't want to be there when it happens.", author: "Woody Allen" },

    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];

    document.getElementById("Quotes").innerHTML = `“${randomQuote.text}”<span class="author">— ${randomQuote.author}</span>`;
    }