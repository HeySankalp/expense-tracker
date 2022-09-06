export function dateStringify(date) {
    if(new Date(date).toString() == "Invalid Date"){
        return false;
    }
    return date.toISOString().slice(0,10);
}