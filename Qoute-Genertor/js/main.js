function randomText(){
    var userText =["You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."]

    var user =["Dr. Seuss","Mae West","Mahatma Gandhi","Robert Frost","J.K. Rowling"]

    var num = Math.floor( Math.random() * userText.length )

    document.getElementById('qoute').innerHTML = userText[num];
    document.getElementById('author').innerHTML = user[num];

}