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
        console.log(error.name); // Not a valid phone number
        console.log(error.printCustomerMessage()); // Validation failed :-( (details: Error :-( (details: Not a valid phone number))
    } else {
        console.log("Unknown error", error);
    }
}