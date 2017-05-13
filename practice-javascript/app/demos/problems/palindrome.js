import assert from 'assert';
import {isPalindrome} from '../../problems/palindrome';

export default () => {
    console.log('Problem: isPalindrome');

    let isPal = false;
    ['', 0, 1, {}, null, true, 'pew', [], undefined]
        .forEach(val => {
            console.log(`[Assert] ${val} isPalindrome: ${isPal}`);
            assert(isPalindrome(val) === isPal);
        });

    isPal = true;
    ['lol', 'mom mom', 'wow']
        .forEach(val => {
            console.log(`[Assert] ${val} isPalindrome: ${isPal}`);
            assert(isPalindrome(val) === isPal);
        });
};
