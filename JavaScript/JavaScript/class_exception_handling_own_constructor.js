class Error {
    constructor(name) {
        this.name = name;
        this.message = `Error :-( (details: ${name})`;
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message); // call parent class constructor
        this.name = "ValidationError"; // Change the parent Error object's "name" attribute from the value of "message" to "ValidationError"
        this.code = "42";
    }

    printCustomerMessage() {
        return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
    }
}

try {
    throw new ValidationError("Not a valid phone number");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(error.name); // ValidationError
        console.log(error.printCustomerMessage()); // Validation failed :-( (details: Error :-( (details: Not a valid phone number))
    } else {
        console.log("Unknown error", error);
    }
}