
function isVowel(letter) {
    return letter === "ا" || letter === "و" || letter === "ي";
}
function whichToDelete(letterX, letterY) {
    if (letterX === "ا") return 1;
    if (letterY === "ا") return 0;
    if (letterX === "و") return 1;
    if (letterY === "و") return 0;

    return 0;
}
function removeSimilarConsecutiveLetters(root){
    return root.filter((letter, index) => letter !== root[index+1])
} 
function root(word) {
    if (word === undefined || word === '') return;

    const letters = word.split('');
    let root = [];
    for (let i = 0; i < letters.length; i++) {
        if (!isVowel(letters[i])) {
            root.push(letters[i])
            continue;
        }
        if (isVowel(letters[i + 1]) && isVowel(letters[i + 2])) {
            root.push(letters[i + 1]);
            i = i + 2;
            continue;
        }
        if (isVowel(letters[i + 1])) {
            let indexToDelet = whichToDelete(letters[i], letters[i+1]);
            root.push(letters[i+indexToDelet]);
        }
    }
    root = removeSimilarConsecutiveLetters(root);
    return root.join('');
}

console.log(root("رجاجيل"));