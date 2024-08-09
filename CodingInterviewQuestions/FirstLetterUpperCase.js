function capitalizeFirstLetter(str) {
    if (str.length === 0) return str; // Return the original string if it's empty

    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Usage
const result = capitalizeFirstLetter('hello');