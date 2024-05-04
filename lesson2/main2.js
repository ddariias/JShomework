///------------------Масиви та об'єкти:---------------
///- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
    let arr = [ 17, 1, 'hello', 'homework', 'okten', 11, true, false, 'array', 7];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    console.log(arr[5]);
    console.log(arr[6]);
    console.log(arr[7]);
    console.log(arr[8]);
    console.log(arr[9]);

///- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
    let book1 = {
        title: 'The little prince',
        pageCount: 180,
        genre: 'novella',
    }
    let book2 = {
        title: 'Harry Potter',
        pageCount: 400,
        genre: 'fantasy novel',
    }
    let book3 = {
        title: 'Alice\'s adventures in wonderland',
        pageCount: 250,
        genre: 'fantasy',
    }
    console.log(book1, book2, book3);

///- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
            let bookOne = {
                title: 'The little prince',
                pageCount: 180,
                genre: 'novella',
                authors: [
                    {
                        name: 'Antoine de Saint-Exupery',
                        age: 99
                    },
                    {
                        name: 'Tom Kolin',
                        age: 19
                    }
                ]
            }
            let bookTwo = {
                title: 'Harry Potter',
                pageCount: 400,
                genre: 'fantasy novel',
                authors: [
                    {
                        name: 'Joanne Rowling',
                        age: 78
                    },
                    {
                        name: 'Ann Kuper',
                        age: 55
                    }
                ]
            }
            let bookThree = {
                title: 'Alice\'s adventures in wonderland',
                pageCount: 250,
                genre: 'fantasy',
                authors: [
                    {
                        name: 'Charles Lutwidge Dodgson',
                        age: 88
                    },
                    {
                        name: 'Sofi Bon',
                        age: 32
                    }
                ]
            }
            console.log(bookOne, bookTwo, bookThree);


///- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача.
    let users = [
        {
            name: 'Olha',
            username: 'OlhaSSS',
            password: 3567,
        },
        {
            name: 'Ann',
            username: 'Annnn12',
            password: 1111,
        },
        {
            name: 'Tom',
            username: 'tomas',
            password: 1001,
        },
        {
            name: 'Dasha',
            username: 'Dariiia',
            password: 3560,
        },
        {
            name: 'Den',
            username: 'Denchik',
            password: 7765,
        },
        {
            name: 'Vita',
            username: 'vitasss',
            password: 3880,
        },
        {
            name: 'Jane',
            username: 'Jane111111',
            password: 5641,
        },
        {
            name: 'Alice',
            username: 'Ali8',
            password: 9801,
        },
        {
            name: 'Kolia',
            username: 'Koliassss',
            password: 9089,
        },
        {
            name: 'Lisa',
            username: 'Lisska',
            password: 1234,
        }
    ]
    console.log(users[0].password);
    console.log(users[1].password);
    console.log(users[2].password);
    console.log(users[3].password);
    console.log(users[4].password);
    console.log(users[5].password);
    console.log(users[6].password);
    console.log(users[7].password);
    console.log(users[8].password);
    console.log(users[9].password);

///- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
////--------------Варіант-1--------------------

    let weather = [
        ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
        ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
        ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
        ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
        ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
        ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
        ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
    ]
    console.log(weather);

///-----------------Варіант-2-----------------
    let weather1 = {
        day1: ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
        day2: ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
        day3: ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
        day4: ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
        day5: ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
        day6: ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
        day7: ['Температура вранці', 'Температура вдень', 'Температура ввечері'],
    }
console.log(weather1);



///-----------------------Логічні розгалуження:----------------------
///- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

    let x = 11;
    if (x!==0) {
        console.log('Вірно');
    }else {
        console.log('Невірно');
    }

    a = 1;
    if (a!==0) {
        console.log('Вірно');
    }else {
        console.log('Невірно');
    }

    a = 0;
    if (a!==0) {
        console.log('Вірно');
    }else {
        console.log('Невірно');
    }

    a = -3;
    if (a!==0) {
        console.log('Вірно');
    }else {
        console.log('Невірно');
    }

///  Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

    let time = 37;
        if (time <= 15){
            console.log('Число попадає в першу чверть години');
        }else if (time > 15 && time <= 30){
            console.log('Число попадає в другу чверть години');
        }else if (time > 30 && time <= 45){
            console.log('Число попадає в третю чверть години');
        }else if (time > 45 && time <= 59){
            console.log('Число попадає в четверту чверть години');
        }else{
            console.log('Помилка');
        }


/////- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
    let day = 31;
    if( day >= 1 && day <=10){
        console.log('Число потрапляє у першу декаду місяця');
    }else if( day > 10 && day <= 20){
        console.log('Число потрапляє у другу декаду місяця');
    }else if ( day > 20 && day <= 31){
        console.log('Число потрапляє у третю декаду місяця');
    }else {
        console.log('Error');
    }

///- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

    let timetable = prompt('Введіть порядковий номер дня тижня');
    switch (timetable){
        case '1':
            console.log('Monday');
        break;
        case '2':
            console.log('Tuesday');
            break;
        case '3':
            console.log('Wednesday');
            break;
        case '4':
            console.log('Thursday');
            break;
        case '5':
            console.log('Friday');
            break;
        case '6':
            console.log('Saturday');
            break;
        case '7':
            console.log('Sunday');
            break;
        default:
            console.log('Error');
    }

///- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

    let numberOne = prompt("Enter number one");
    let numberTwo = prompt("Enter number two")
    if (numberOne > numberTwo){
        console.log( 'max' + '=' + numberOne);
    }else if (numberOne < numberTwo){
        console.log('max' + '=' + numberTwo);
    }else{
        console.log(numberOne + "=" + numberTwo);
    }

///- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
    p = undefined;
    let tern = p ? 'okey' : "default"
    console.log(tern);


///- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    if (coursesAndDurationArray[0].monthDuration > 5) {
        console.log("Супер");
    }else if (coursesAndDurationArray[1].monthDuration > 5) {
        console.log("Супер");
    }else if (coursesAndDurationArray[2].monthDuration > 5) {
        console.log("Супер");
    }else if (coursesAndDurationArray[3].monthDuration > 5) {
        console.log("Супер");
    }else if (coursesAndDurationArray[4].monthDuration > 5) {
        console.log("Супер");
    }else if(coursesAndDurationArray[5].monthDuration > 5) {
        console.log("Супер");
    }