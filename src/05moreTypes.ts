let response: any = "43";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"who moved my cheese"}';

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;
