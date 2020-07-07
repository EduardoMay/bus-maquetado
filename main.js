let data = [
    {seat: 1, occupied: true},
    {seat: 2, occupied: false},
    {seat: 3, occupied: false},
    {seat: 4, occupied: true},
    {seat: 5, occupied: true},
    {seat: 6, occupied: false},
    {seat: 7, occupied: false},
    {seat: 8, occupied: false},
    {seat: 9, occupied: false},
    {seat: 10, occupied: true},
    {seat: 11, occupied: false},
    {seat: 12, occupied: false},
    {seat: 13, occupied: false},
    {seat: 14, occupied: false},
    {seat: 15, occupied: false},
    {seat: 16, occupied: false},
    {seat: 17, occupied: false},
    {seat: 18, occupied: false},
    {seat: 19, occupied: false},
    {seat: 20, occupied: false},
    {seat: 21, occupied: false},
    {seat: 22, occupied: false},
    {seat: 23, occupied: false},
    {seat: 24, occupied: false},
    {seat: 25, occupied: false},
    {seat: 26, occupied: true},
    {seat: 27, occupied: false},
    {seat: 28, occupied: true},
    {seat: 29, occupied: false},
    {seat: 30, occupied: false},
    {seat: 31, occupied: false},
    {seat: 32, occupied: false},
    {seat: 33, occupied: false},
    {seat: 34, occupied: false},
    {seat: 35, occupied: false},
    {seat: 36, occupied: false},
    {seat: 37, occupied: true},
    {seat: 38, occupied: false},
    {seat: 39, occupied: false},
    {seat: 40, occupied: false},
    {seat: 41, occupied: false},
    {seat: 42, occupied: false},
    {seat: 43, occupied: false},
    {seat: 44, occupied: false},
    {seat: 45, occupied: false},
    {seat: 46, occupied: false},
    {seat: 47, occupied: false},
    {seat: 48, occupied: false},
    {seat: 49, occupied: false},
    {seat: 50, occupied: false},
    {seat: 51, occupied: false},
    {seat: 52, occupied: false},
    {seat: 53, occupied: false},
    {seat: 54, occupied: false}
];

console.table(data)

data.forEach(seat => {
    if (seat.occupied) {
        document.querySelector(`#seat-${seat.seat}`).disabled = true;
        document.querySelector(`label[data-seat-num='${seat.seat}']`)
            .classList.add("occupied")
    }
});