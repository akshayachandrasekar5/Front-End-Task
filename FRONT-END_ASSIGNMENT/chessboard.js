function printChessboard(size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                row += 'X ';
            } else {
                row += 'O ';
            }
        }
        console.log(row.trim());
    }
}

printChessboard(8);
