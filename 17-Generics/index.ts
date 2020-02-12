function example<T>(arg: T[]): T { // here we have a generic type and it's going to return the generic type
    // this is good if you don't know what datatypes that you're going to be passing in
    return arg[0];
}

example([5]);