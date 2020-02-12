const example1: object = undefined; // this works surprisingly 

const example2: Object = NaN; // interestingly this works 

const example3: {} = {};
example3.firstName = 'Dylan'; // this will not work because the type is an empty object