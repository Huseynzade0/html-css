//1
// const num = 24; // Burada istədiyiniz ədədi yazın

// console.log(`${num} ədədinin bölənləri:`);

// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         console.log(i);
//     }
// }
//2
// const num = 24; // Burada istədiyiniz ədədi yazın

// let count = 0;

// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         count++;
//     }
// }

// console.log(`${num} ədədinin bölənlərinin sayı: ${count}`);
//3
// function upperStr(str) {
//      return str.toUpperCase();
// }

// // Nümunə istifadə:
// console.log(upperStr("salam dünya")); // Çıxış: SALAM DÜNYA
//4
// function pow(a, b) {
//     return Math.pow(a, b);
// }

// const num1 = Number(prompt("Birinci ədədi daxil edin:"));
// const num2 = Number(prompt("İkinci ədədi daxil edin (qüvvət):"));

// console.log(`${num1} ^ ${num2} = ${pow(num1, num2)}`);
//5
// function convert(str) {
//     return str
//         .split('')
//         .map(char => {
//             if (char === char.toUpperCase()) {
//                 return char.toLowerCase();
//             } else {
//                 return char.toUpperCase();
//             }
//         })
//         .join('');
// }

// // Nümunə istifadə:
// console.log(convert('saLamNecesen')); // Çıxış: SAlAMnECESEN
//Array metodu ilə:1
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// // 'Meat' əlavə et (əgər yoxdursa)
// if (!shoppingCart.includes('Meat')) {
//     shoppingCart.unshift('Meat');
// }

// // 'Sugar' əlavə et (əgər yoxdursa)
// if (!shoppingCart.includes('Sugar')) {
//     shoppingCart.push('Sugar');
// }

// // 'Honey' sil
// const honeyIndex = shoppingCart.indexOf('Honey');
// if (honeyIndex !== -1) {
//     shoppingCart.splice(honeyIndex, 1);
// }

// // 'Tea' dəyişdir 'Green Tea'
// const teaIndex = shoppingCart.indexOf('Tea');
// if (teaIndex !== -1) {
//     shoppingCart[teaIndex] = 'Green Tea';
// }

// console.log(shoppingCart); // ["Meat", "Milk", "Coffee", "Green Tea", "Sugar"]
//2
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ];

// // Massivi tərsinə çevir
// countries.reverse();

// // "Canada" və "Denmark" sil, "Azerbaijan" əlavə et
// const canadaIndex = countries.indexOf('Canada');
// if (canadaIndex !== -1) {
//     countries.splice(canadaIndex, 2, 'Azerbaijan');
// }
// const denmarkIndex = countries.indexOf('Denmark');
// if (denmarkIndex !== -1) {
//     countries.splice(denmarkIndex, 1);
// }
// console.log(countries);
//3
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node', 'Express', 'MongoDB'];

// const fullStack = frontEnd.concat(backEnd);

// console.log(fullStack); // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//4
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// // İlk 3 şirkəti slice ilə çıxar
// const firstThree = itCompanies.slice(0, 3);
// console.log('First 3:', firstThree);

// // Son 3 şirkəti slice ilə çıxar
// const lastThree = itCompanies.slice(-3);
// console.log('Last 3:', lastThree);

// // Ortadakı şirkəti/şirkətləri slice ilə çıxar
// const middleIndex = Math.floor(itCompanies.length / 2);
// let middleCompanies;
// if (itCompanies.length % 2 === 0) {
//     middleCompanies = itCompanies.slice(middleIndex - 1, middleIndex + 1);
// } else {
//     middleCompanies = [itCompanies[middleIndex]];
// }
// console.log('Middle:', middleCompanies);

// // Şirkətləri sort et
// const sortedCompanies = [...itCompanies].sort();
// console.log('Sorted:', sortedCompanies);

// // Hər bir şirkət adını böyük hərflərlə yazdır
// itCompanies.forEach(company => {
//     console.log(company.toUpperCase());
// });

// // "Google" şirkəti mövcuddurmu?
// if (itCompanies.includes('Google')) {
//     console.log('Google');
// } else {
//     console.log('Company is not found');
// }

// // filter olmadan bir neçə 'o' olan şirkətləri çıxar
// const companiesWithMoreThanOneO = [];
// for (let company of itCompanies) {
//     let count = 0;
//     for (let char of company.toLowerCase()) {
//         if (char === 'o') count++;
//     }
//     if (count > 1) {
//         companiesWithMoreThanOneO.push(company);
//     }
// }
// console.log('More than one "o":', companiesWithMoreThanOneO);
//extra 1
// for (let num = 2; num <= 100; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num);
//     }
// }
//extra 2
// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// // Nümunə istifadə:
// console.log(isPalindrome('racecar') ? 'polidromdur' : 'polidrom deyil'); // polidromdur
// console.log(isPalindrome('hello') ? 'polidromdur' : 'polidrom deyil');   // polidrom deyil
//extra 3
// const products = [
//   {
//     id: 1,
//     title: "Smartphone",
//     description: "A high-end smartphone with the latest features.",
//     price: 799.99,
//   },
//   {
//     id: 2,
//     title: "Laptop",
//     description: "Powerful laptop with a large screen and fast processor.",
//     price: 1299.99,
//   },
//   {
//     id: 3,
//     title: "Coffee Maker",
//     description: "An automatic coffee maker with a built-in grinder.",
//     price: 99.99,
//   },
//   {
//     id: 4,
//     title: "Headphones",
//     description: "Wireless over-ear headphones with noise-cancellation.",
//     price: 199.99,
//   },
//   {
//     id: 5,
//     title: "Smart TV",
//     description: "55-inch 4K Smart TV with streaming apps built-in.",
//     price: 699.99,
//   },
// ];

// let total = 0;
// for (let product of products) {
//   total += product.price;
// }
// let average = total / products.length;

// console.log("Qiymətlərin cəmi:", total);
// console.log("Qiymətlərin ortalaması:", average);