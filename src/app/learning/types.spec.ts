// import * as fromHr from './hr/employee';
import { Employee, Retiree, favoriteFood } from './hr';


describe('writing jasmine specs', () => {
  it('is easy', () => {
    const a = 10;
    const b = 20;

    const answer = a + b;

    expect(answer).toBe(30); // RED!
  });
});

describe('variables and stuff', () => {
  it('declaring variables', () => {
    let x; // total hold my beer. I'll be in control of this variable. Like old-skool JavaScript.

    x = 'Tacos';
    expect(typeof (x)).toBe('string');

    x = 3.14;
    expect(typeof (x)).toBe('number');

    x = (a, b) => a + b;
    expect(typeof (x)).toBe('function');
  });
  it('declaring a variable with a type', () => {
    let x: number | string;

    x = 12;

    x = 'Tacos';

    // x = ['dog', 'cat'];
  });
  it('initializing a variable', () => {
    let x = 22;

    x = 32;

    // x = 'Tacos';
  });
  it('has some literals', () => {
    const bigNumber = 1_000_000;
    expect(bigNumber).toBe(1000000);
    const color = 0xff; // base 16
    const song = 0b10101; // binary base 2
    const permission = 0o344; // octal base 8.

    const someArray = ['dog', 'cat', 99];
    const movie = {
      title: 'Thor Ragnorak',
      director: 'Taika Waititi',
      yearReleased: 2017
    };

    expect(movie.title).toBe('Thor Ragnorak');
    movie.yearReleased = 2018;
    // etc. etc.
  });
  it('string literals', () => {
    const myName = 'Jeff';
    // tslint:disable-next-line: quotemark
    const yourName = "Jeff";




    const joke = 'Knock Knock';
    const myStory = `Chapter 1


    It was a dark and story night.

    The End`;

    const myPay = 32.50;

    const message = 'The name is ' + yourName + ' and the pay is $' + myPay + '.';
    const message2 = `The name is ${yourName} and the pay is $${myPay}.`;
    expect(message).toEqual(message2);
  });
  it('array literals', () => {
    // let stuff: (string | number)[] = [];
    const stuff: Array<string | number> = [];
    stuff[0] = 'Tamales';
    stuff[1] = 99;
  });
  it('using const and let', () => {
    const PI = 3.1415;

    // PI = 3;

    const friends = ['David', 'Amy', 'Sean', 'Billy'];

    friends[3] = 'William';

    const movie = {
      title: 'Jaws',
      director: 'Spielberg',
      yearReleased: 1978
    };

    movie.yearReleased = 1977;

  });
  describe('functions', () => {

    it('two kinds', () => {

      expect(add(2, 2)).toBe(4);

      // named functions
      // in c#: int add(int a, int b) { .. }
      function add(a: number, b: number): number {
        return a + b;
      }

      // Anonymous function
      const subtract = (a: number, b: number) => a - b;
      expect(subtract(10, 2)).toBe(8);

    });

    describe('array methods', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      it('going through each element of an array', () => {
        numbers.forEach(n => console.log(n));
      });
      it('can change something to another thing', () => {
        // select in C#

        const doubled = numbers.map(n => n + n);

        expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);

      });

      it('can filter', () => {
        // like C#'s 'Where' LINQ Method

        const evens = numbers.filter(n => n % 2 === 0); // I'll talk about hte triple equals in a second

        expect(evens).toEqual([2, 4, 6, 8]);
      });

    });

  });

});

describe('interfaces and duck typing', () => {
  describe('interfaces', () => {

    it('an object literal has a data type', () => {
      interface Person {
        firstName: string;
        lastName: string;
        department: string;
        age?: number;
      }
      const bob: Person = {
        firstName: 'Bob',
        lastName: 'Smith',
        department: 'DEV',
        age: 38
      };
      const jane: Person = {
        firstName: 'Jane',
        lastName: 'Smith',
        department: 'QA'
      };
      // bob.firstname = 'Robert';


    });
    it('supports duck typing', () => {
      interface IHaveAMessage { message: string; } // note: the 'I' thing in interfaces in Typescript isn't so much a thing as in c#
      function logIt(thing: IHaveAMessage) {
        console.log(thing.message);
      }

      const phoneCall = {
        from: 'Mom',
        message: 'Call me'
      };
      logIt(phoneCall);

    });
  });

});
describe('using modules', () => {

  it('creating an instance of a class', () => {

    const emp = new Employee();
    emp.firstName = 'Robert';
    emp.lastName = 'Smith';
    emp.department = 'Singer';

    const info = emp.getInfo();
    expect(info).toBe('employee Robert Smith is a Singer');

  });
});


