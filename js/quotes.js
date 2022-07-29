const quotes = [
    {
        quote: "There is more to life than increasing speed.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Only I can change my life. No one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
    {
        quote: "Dost thou love life? Then do not squander time, for that is the stuff life is made of.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Age is foolish and forgetful when it underestimates youth.",
        author: "J. K. Rowling",
    },
    {
        quote: "Life is a zoo in a jungle.",
        author: "Peter De Vries",
    },
    {
        quote: "True life is lived when tiny changes occur.",
        author: "Leo Tolstoy",
    },
    {
        quote: "Dream as if you'll live forever. Live as if you'll die today.",
        author: "James Dean",
    },
    {
        quote: "Whatever you do, do cautiously, and look to the end.",
        author: "Unknown",
    },
    {
        quote: "Weakness of attitude becomes weakness of character.",
        author: "Albert Einstein",
    },
    {
        quote: "Wheresoever you go, go with all your heart.",
        author: "Confucius",
    },
    {
        quote: "If I have lost confidence in myself, I have the universe against me.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "I'm as proud of what we don't do as I am of what we do.",
        author: "Steve Jobs",
    },
    {
        quote: "Self-confidence is the first requisite to great undertakings.",
        author: "Samuel Johnson",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;