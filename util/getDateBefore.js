export function getDateBefore(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}