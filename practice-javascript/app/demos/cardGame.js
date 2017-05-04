export default () => {

    const SUITS = ['C', 'S', 'D', 'H'];
    const SUIT_UNICODES = {'C':'\u2663', 'S':'\u2660', 'D':'\u2666', 'H':'\u2665'};
    const NUMBERS = Array(10).fill()
                        .map((_, i) => i+1)
                        .filter(num => num !== 1)
                        .concat('J', 'K', 'Q', 'A');
    const cards = [];

    class Card {
        constructor(suit, number) {
            this.suit = suit;
            this.number = number;
        }

        toString() {
            return `${SUIT_UNICODES[this.suit]}${this.number}`;
        }
    }

    SUITS.forEach(suit => {
        NUMBERS.map(num => new Card(suit, num))
               .forEach(c => cards.push(c));
    });

    const _compareStrNum = (currNum, prevNum) => {
        const numPrecedence = {'A': 4, 'K': 3, 'Q': 2, 'J': 1};

        if (numPrecedence[currNum] > numPrecedence[prevNum]) return 1;
        if (numPrecedence[currNum] < numPrecedence[prevNum]) return -1;
        return 0;
    };

    cards.sort((curr, prev) => {
        const isCurrNum = typeof curr.number === 'number';
        const isPrevNum = typeof prev.number === 'number';
        const isNums = isCurrNum && isPrevNum;
        const isStrs = !isCurrNum && !isPrevNum;

        if (isNums) return curr.number - prev.number;
        if (isStrs) return _compareStrNum(curr.number, prev.number);
        if (!isCurrNum && isPrevNum) return 1;
        if (isCurrNum && !isPrevNum) return -1;

        return 0;
    });

    console.log('Populated Cards: ', cards.map(card => card.toString()));
};
