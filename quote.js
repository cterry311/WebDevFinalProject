async function getQuote() {
    try {
        // //const response = await fetch(`https://zenquotes.io?api=${"today"}`);
        // // I could not get it to work, I used chat GPT to help
        // const response = await fetch(`https://zenquotes.io/api/today`);
        // const data = await response.json();
        // return data;
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://zenquotes.io/api/today')}`);
        const data = await response.json();
        return JSON.parse(data.contents);
    } catch {
        console.log("an error happened")
    }
}

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

async function setQuoteText() {
    const jsonResponce = await getQuote();
    if (jsonResponce == null) {
        return;
    }

    quoteText.textContent = "\"" + jsonResponce[0]['q'] + "\"";
    authorText.textContent = "- " + jsonResponce[0]['a'];
}

setQuoteText();