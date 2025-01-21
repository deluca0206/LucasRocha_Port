const quotes = [
  { quote: "O único limite para a realização de amanhã são nossas dúvidas de hoje.", author: "Franklin D. Roosevelt" },
  { quote: "Não espere para agir quando o ferro estiver quente; faça-o quente agindo.", author: "William Butler Yeats" },
  { quote: "Quer você ache que pode ou que não pode – você está certo.", author: "Henry Ford" },
  { quote: "A melhor maneira de prever o futuro é inventá-lo.", author: "Alan Kay" },
  { quote: "A vida é 10% o que acontece conosco e 90% como reagimos.", author: "Charles R. Swindoll" }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  quoteText.textContent = `"${selectedQuote.quote}"`;
  authorText.textContent = `- ${selectedQuote.author}`;
}

newQuoteButton.addEventListener("click", generateQuote);


  