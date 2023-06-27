do {
  userChoice = prompt(
    'Choice what you need to convert: Dollar or Euro? or q - to exit'
  );

  if (userChoice.toLowerCase() === 'dollar') {
    const dollar = parseInt(prompt('Enter dollar to convert to euro'));
    const euro = 0.91;
    const convertedAmount = dollar * euro;

    console.log(convertedAmount);
  }
  if (userChoice.toLowerCase() === 'euro') {
    const euro = parseInt(prompt('Enter euro to convert to dollar'));
    const dollar = 1.09;
    const convertedAmount = euro * dollar;
    console.log(convertedAmount);
  }
} while (userChoice.toLowerCase() !== 'q');
console.log('Have a nice day!');
