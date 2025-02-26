function validateUsername(username : string) {
    if (username.length >= 6 && username.length <= 20) {
        return true;
    }

    return false;
};

export default validateUsername;
