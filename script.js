const quoteSpan     = document.querySelector('.qoute');
const authorSpan    = document.querySelector('.author');
const randomize     = document.querySelector('.random');
const tweet         = document.querySelector('.tweet');
const loader        = document.getElementById('loader');
const container     = document.querySelector('.q-container');
var quotes          = [];
const loading = () => {
    loader.hidden = false;
    container.hidden = true;
}
const completeLoading = () => {
    if(!loader.hidden){
        container.hidden = false;
        loader.hidden = true;
    }
}
async function exportQuote() {
    const ftch = await fetch("https://type.fit/api/quotes");
    const ob = await ftch.json();
    quotes = ob;
    getQuote()
}

function getQuote() {
    loading();
    try {
        var qq = quotes[Math.floor(Math.random() * quotes.length)];
    // adding class to minimize font size
    if (quoteSpan.length > 120){
        quoteSpan.classList.add('minize-font-size');
    }else{
        quoteSpan.classList.remove('minize-font-size');
    }
    quoteSpan.textContent = qq.text;
    if(qq.author === null){
        authorSpan.textContent = 'unknown';
    }else{
        authorSpan.textContent = qq.author;
    }
        completeLoading();
    } catch (error) {
        console.log(error)      
    }
}
const tweetIt = () => {
    const qt = quoteSpan.textContent;
    const at = authorSpan.textContent;
    turl = `https://twitter.com/intent/tweet?text=${qt} - by ${at}`;
    window.open(turl,'_blank');
}
randomize.addEventListener('click',getQuote);
tweet.addEventListener('click',tweetIt); 
exportQuote();