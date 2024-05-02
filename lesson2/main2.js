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
//             let bookOne = {
//                 title: 'The little prince',
//                 pageCount: 180,
//                 genre: 'novella',
//                 authors: ['Antoine de Saint-Exupery', 'Tom Kolin']{
//                     name: 'Antoine de Saint-Exupery'
// }
//             }
//             let bookTwo = {
//                 title: 'Harry Potter',
//                 pageCount: 400,
//                 genre: 'fantasy novel',
//                 authors: ['Joanne Rowling', 'Ann Kuper']
//             }
//             let bookThree = {
//                 title: 'Alice\'s adventures in wonderland',
//                 pageCount: 250,
//                 genre: 'fantasy',
//                 [{authors: ['Charles Lutwidge Dodgson', 'Sofi Bon'],
//                     name:'Charles Lutwidge Dodgson',
//                     age: 89}]

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

    // let weather = [
    //     [];
    //     [];
    //     [];
    //     [];
    //     [];
    //     [];
    //     [];
    // ]




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

///  Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

    // let time =


///- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
