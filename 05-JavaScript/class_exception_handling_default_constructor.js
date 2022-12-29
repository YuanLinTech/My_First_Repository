class Error {
    constructor(name) {
        this.name = name;
        this.message = `Error :-( (details: ${name})`;
    }
}

class ValidationError extends Error {
    printCustomerMessage() {
        return `Validation failed :-( (details: ${this.message})`;
    }
}

try {
    throw new ValidationError("Not a valid phone number");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(error.name); // “error” is an instance of Error rather than ValidationError!
        console.log(error.printCustomerMessage());
    } else {
        console.log("Unknown error", error);
    }
}