// Load the full build.
let _ = require('lodash');
// Load the core build.
let _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
let fp = require('lodash/fp');
// Load method categories.
let array = require('lodash/array');
let object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
let at = require('lodash/at');
let curryN = require('lodash/fp/curryN');

//Задача №1: Знайти різницю між найбільшим і найменшим елементом масива; якщо масив пустий 
//або має один елемент - повернути 0.
let myArray = [1,5,-8,11,22,6];
let emptyArray = [];
let oneElementArray = [5];


function arr(list) {
    if (list.length <= 1) return (console.log(0));
        else {
        let min = Math.min(...list);    
        let max = Math.max(...list);
                return console.log (max-min);
    }
  }

  arr(myArray);
  
//Задача №1 Lo dash
  let _ = require('lodash/core');
  let nums = [1,5,-8,11,22,6];
  
  function arr(list) {
    if (list.length <= 1) return (console.log(0));
        else
        return console.log (_.max(nums)-_.min(nums));
    }
 arr(nums);

//Задача №2: Написати функцію, яка приймає рядок і число. Поверрнути у вигляді масиву тільки ті 
//слова, довжина яких перевищує число.
let names = "Krystyna, Alina, Alex, Yan, Jenia";

function words(str, num) {
    let arr = str.split(', ');
    let newArray = arr.filter(word => word.length > num);
    return console.log (newArray);
    /*
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            newArray.push(arr[i]);
        }
    }
    return console.log (newArray);*/
}
words(names, 4);

//Задача №2 Lo dash
let line = "Krystyna, Alina, Alex, Yan, Jenia";
let _ = require('lodash');

function words(str, num) {
    let newArray = _.filter((_.split(line, ', ')),word => word.length > num);
    return console.log (newArray);
}
words(line, 4);

//Задача №3: Написати функцію, яка повертає true, якщо перший переданий аргумент (рядок) 
// закінчується другим аргументом (також рядком).
let solution = (str1, str2) => console.log(str1.endsWith(str2));

solution('abc', 'bc');

//Задача №3 Lo dash
let _ = require('lodash');
let twotrings = (str1, str2) => console.log(_.endsWith(str1, str2));

twotrings('abcaaa', 'bc');

//Задача №4: Написати функцію, яка отримує масив цілих чисел і повертає масив 
//середніх значень кожного цілого числа та його послідовника, якщо він є.
let numbers = [1, 3, 5, 1, -10, -5];

function averages(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length-1; i++) {
            arr[i]+arr[i+1];
            newArray.push((arr[i]+arr[i+1])/2); 
    }
    return console.log (newArray);
}
   
averages(numbers);

//Задача №5: Створити функцію, яка приймає рядок і повертає кількість голосних, які у ній.
//Створити функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне змінену версію. 
//Якщо цей рядок не містить "a", "b" або "c", повернути null.
function countVowels(str) {
    let vowels ='aeiou';
    let result = 0;
    let word = str.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) !== -1) {
            result += 1;
        }
    }
    return console.log(result);
}

function removeABC(str) { 
    let letters = 'abc';
    let result = null;
    let sentence = str.toLowerCase();
    
    for (let i = 0; i < sentence.length; i++) {
        if (letters.indexOf(sentence[i]) !== -1) {
            result = sentence.replace(/[abc]/g, '');
        } 
    }
    return console.log(result);
}
 
countVowels("Celebration");
removeABC("This might be a bit hard");
removeABC("hello world!");

//Задача №6: Написати JavaScript для пошуку унікальних елементів з двох масивів. ?????????????
let difference = ((arr1, arr2) => [...new Set([...arr1, ...arr2])]);

console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//Задача №6 La dosh
let _ = require('lodash');
let diff = ((arr1, arr2) => (_.filter(arr1, (x => !_.includes(arr2,x))).concat(arr2)));

console.log(diff([1, 2, 3], [100, 2, 1, 10]));

//Задача №7: Написати функцію, щоб отримати копію об'єкта, де ключі стали значеннями, а значення ключами.
const myObj = {
    red: "#FF0000", 
    green: "#00FF00", 
    white: "#FFFFFF"
}
const result = {};

/*Object.keys(obj) – возвращает массив ключей.
Object.values(obj) – возвращает массив значений.
Object.entries(obj) – возвращает массив пар [ключ, значение].*/

Object.entries(myObj).forEach(([key, value]) => {
  result[value] = key
});

console.log(result);

//Задача №8: Повернути різницю між загальною вартістю цих речей та межею політики.
let myObject ={ 
    skate: 10, 
    painting: 20 
};
let sum;

function calculateDifference(obj, num) {
    let result = 0;
    let sum = 0;

    for (let item of Object.values(obj)) {
      sum += item; 
    }

    if (sum > num && Object.keys(obj).length !== 0) {
        return console.log(sum - num);
    }
    else return console.log('Об`єкт завжди повинен містити елементи, сума предметів завжди повинна бути більшою за страховку.');
      
}

calculateDifference(myObject,150);

//Задача №10: Дано рядок, що містить повне ім'я файлу. Виділити із цього рядка ім'я файлу без розширення.
let currPathName = "c:\\WebServers\\home\\testsite\\www\\myfile.txt";
let currPathName2 = "c:/WebServers/home/testsite/www/myfile.txt";

function getSubstr(str, char, pos) {
    if(pos=='before') 
    return str.slice(0, str.indexOf(char));
 };

let newPathName = getSubstr(currPathName, '.','before');
let newPathName2 = getSubstr(currPathName2, '.','before');

function path(pathname) {
    if (pathname.includes('\\')) {
        let name = pathname.split("\\").pop();
        return console.log(name); 
    } else if (pathname.includes('/')) {
        let name = pathname.split("/").pop();
        return console.log(name); 
    }
}
path(newPathName);
path(newPathName2);

//Задача №11: Дано два рядки. Чи можна перший рядок отримати з циклічним зрушенням другого?
let str1, str2;

function shift(string1, string2) {
    let count = 0;
    if (string1.length >= string2.length) {
        let firstArr = string1.split('');
        let secondArr = string2.split('');
        count = secondArr.length;
       
        for(i = 0; i < count; i++) {
            firstArr.unshift(firstArr.pop());
        } 
        return console.log(`Перший рядок можна отримати з циклічним зрушенням другого: ${firstArr.join('')}`);

    } else {
        return console.log ('Перший рядок не можна отримати з циклічним зрушенням другого.');
    }
}

shift('Kristina','Ali');

//Задача №12: З елементів масиву a, що складається з 2n елементів, отримати масиви b і c наступним чином: вибрати в масиві a два
// найбільш близькі за значенням елемента, менший з них помістити в масив b, а більший - масив c. Виключити з розгляду в масиві 
//a ці елементи і продовжити вибір з елементів, що залишилися.----
let a = [3, 1, 71, 5, 6, 808, -5, 9];
a.sort((a,b) => a - b);
let b = [];
let c = [];

function show(arr) {
    let index = 0;
    let nextPosition = 0;
    let difference = Math.abs(arr[0] - arr[1]);
    while (arr.length > 0) {
        
    for (let i = 1; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i+1]) < difference) {
                    difference = Math.abs(arr[i] - arr[i+1]);
                    index = i;
                }
             }
                if (b.length !== 0) {
                    b.push(arr[index]);
                    c.unshift(arr[index + 1]);
                                  
                } else {
                    b[nextPosition] = arr[index];
                    c[nextPosition] = arr[index + 1];
                    nextPosition++;
                      
                } 
                arr.splice(index,2);  
    }
    return console.log(`Array b = ${b}; array c = ${c}`);
    
}
             
      if (a.length % 2 !== 0 || a.length < 2) 
      return console.log('Параметри масива невірні згідно з умовою.')
      else return show(a);
      

//Задача №17: В заданому масиві найменший елемент помістити на перше місце, найменший з тих, що
// залишилися - на останнє місце,наступний - передостаннє і так далі - до середини масиву.
let myArr = [5,3,6,4,2,7,1];
let sortedArr = myArr.sort((a,b) => a-b);
let resultArr = [];
let left = 0; //указатєлі на початок 
let right = sortedArr.length - 1; //і на кінець масива

for(let i = 0; i < sortedArr.length; i++) {
    if (i % 2 == 0)
    resultArr[left++] = sortedArr[i];
    else
    resultArr[right--] = sortedArr[i];
  }

console.log(resultArr);
