const isPalindrome = word => {
    const isValidWord = typeof word === 'string' && word.trim().length > 1;
    if (!isValidWord) return false;

    return word.split('').reverse().join('') === word;
};

export { isPalindrome };
