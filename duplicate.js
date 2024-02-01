function containsDuplicate(nums) {
    let uniqueSet = new Set();

    for (let num of nums) {
        if (uniqueSet.has(num)) {
            return true;
        }
        uniqueSet.add(num);
    }

    return false;
}

const example1 = [1, 2, 3, 1];
const example2 = [1, 2, 3, 4];
const example3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

document.write(`<p>Example 1: [1, 2, 3, 1] - ${containsDuplicate(example1)}</p>`);
document.write(`<p>Example 2: [1, 2, 3, 4] - ${containsDuplicate(example2)}</p>`);
document.write(`<p>Example 3: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] - ${containsDuplicate(example3)}</p>`);
