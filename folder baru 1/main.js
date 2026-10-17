const quotes = [
    "Inget gak pas nyontek PR pas jam pertama?",
    "Nongkrong di kantin padahal bel masuk udah bunyi 🤫",
    "Cabut olahraga demi beli es teh di luar 🥤",
    "Momen pas tugas kelompok tapi yang ngerjain cuma 1 orang 😂",
    "Guru killer gak masuk = Hari Libur Nasional! 🎉"
];

const btnQuote = document.getElementById('btnQuote');
const quoteDisplay = document.getElementById('quoteDisplay');

btnQuote.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
});
