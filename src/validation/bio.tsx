function validateBio(bio : string) {
    if (bio.length <= 30) {
        return true;
    }

    return false;
}

export default validateBio;
