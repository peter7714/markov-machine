/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = {};

    for(let i=0; i<=this.words.length; i++){
      let word = this.words[i];
      let nextWord = this.words[i+1] || null;
      if (!chains[word]){
        chains[word] = [];    
      } else {
        chains[word].push(nextWord);
      }
    }
    this.chains = chains; 
  }

  random(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let currentWord = this.words[0];
    let result = [currentWord];

    for(let i=0; i<=numWords; i++){
      let possibilities = this.chains[currentWord];
      let next = this.random(possibilities);
      result.push(next);
      currentWord = next;
    }
    return result.join(' ');
  }
}

module.exports = {
  MarkovMachine,
};
