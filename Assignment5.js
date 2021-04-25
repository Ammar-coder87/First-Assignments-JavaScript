//Assignment 5 Js (Home Security)

function key(check) {
    const privatePhoto = 'capMHD6';
    const keyChecking = 'MHD6';
    if (check === privatePhoto || keyChecking){
        return true;
    } else {
        return false;
    }
};

function person(check) {
    const privateName = 'Mohammad';
    if (check === privateName) {
        return true;
    } else {
        return false;
    }
};

function security(keyVar, nameVar) {
    if (keyVar && nameVar) {
        return "Welcome";
    } else {
        return "You can't access";
    }
    
};

const result = security(key(true), person('Mohammad'));
alert (result);
