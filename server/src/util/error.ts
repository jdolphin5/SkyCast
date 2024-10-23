type ErrorWithMessage = {
    message: string;
};

//type guard (if returns true ts knows that the object is of type ErrorWithMessage)
const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
    return (
        typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof (error as Record<string, unknown>).message === "string"
    );
};

const toErrorWithMessage = (maybeError: unknown): ErrorWithMessage => {
    if (isErrorWithMessage(maybeError)) return maybeError;

    try {
        return new Error(JSON.stringify(maybeError));
    } catch {
        // fallback in case there's an error stringifying the maybeError
        return new Error(String(maybeError));
    }
};

export const reportError = ({ message }: { message: string }) => {
    // send the error to our logging service...
};

export const getErrorMessage = (error: unknown) => {
    return toErrorWithMessage(error).message;
};
