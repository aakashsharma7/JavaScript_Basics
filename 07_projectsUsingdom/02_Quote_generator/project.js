//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"The best way to find yourself is to lose yourself in the service of others."',
    person: 'Mahatma Gandhi'
},{
    quote: '"Start writing, no matter what. The water does not flow until the faucet is turned on."',
    person: 'Louis L’Amour'
},{
    quote: ' "The first draft is just you telling yourself the story."',
    person: 'Terry Pratchett'
},{
    quote: '"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it."',
    person: 'Octavia E. Butler'
},{
    quote: '"You can’t wait for inspiration. You have to go after it with a club."',
    person: 'Jack London'
},{
    quote: '"I have never started a poem yet whose end I knew. Writing a poem is discovering."',
    person: 'Robert Frost'
},{
    quote: '"I get a lot of letters from people. They say, "I want to be a writer. What should I do?" I tell them to stop writing to me and get on with it."',
    person: 'Ruth Rendell'
},{
    quote: '"The greatest part of a writer’s time is spent in reading, in order to write. A man will turn over half a library to make a book."',
    person: 'Samuel Johnson'
},{
    quote: '"Writing a novel is like driving a car at night. You can only see as far as your headlights, but you can make the whole trip that way."',
    person: 'E. L. Doctorow'
},{
    quote: '"Description begins in the writer’s imagination but should finish in the reader’s."',
    person: 'Stephen King'
},{
    quote: '"No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader."',
    person: 'Stephen King'
},{
    quote: '"Never write anything that does not give you great pleasure. Emotion is easily transferred from the writer to the reader."',
    person: 'Joseph Joubert'
},{
    quote: '"The most valuable of all talents is that of never using two words when one will do. "',
    person: 'Thomas Jefferson'
},{
    quote: '"It is perfectly okay to write garbage as long as you edit brilliantly."',
    person: 'C. J. Cherryh'
},{
    quote: '"So the writer who breeds more words than he needs, is making a chore for the reader who reads."',
    person: 'Dr. Seuss'
}, ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})

