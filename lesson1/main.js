/// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

    let a = 'hello';
    let b = 'owu';
    let c = 'com';
    let d = 'ua';
    let e = 1;
    let f = 10;
    let g = -999
    let h = 123;
    let i = 3.14;
    let j = 2.7;
    let k = 16;
    let l = true;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    console.log(i);
    console.log(j);
    console.log(k);
    console.log(l);

///Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
    let firstName = 'Dariia';
    let middleName = 'Serhiivna';
    let lastName = 'Didyk';

    let person = `${lastName} ${firstName} ${middleName}`;
    console.log(person);

/// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

    let one = 100;
    let two = '100';
    let three = true;

    console.log(typeof one);
    console.log(typeof two);
    console.log(typeof three);

///Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

    let name = prompt('Name');
    console.log(name);

    let surname = prompt('Surname');
    console.log(surname);

    let age = prompt('Age');
    console.log(age);


