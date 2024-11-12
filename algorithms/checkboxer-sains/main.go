package main

import (
	"fmt"
	"strconv"
)

func numToLetter(num int64) string { return string('a' - 1 + num) }
func letterToNum(letter rune) int {
	return int(letter - 'a' + 1)
}

func calculateMove(startingPos int, moves int64) int64 {
	return int64(startingPos) + (moves % 8)
}

func findPos(startPos string, rowMoves int64, colMoves int64) string {
	rowStartPos, _ := strconv.Atoi(startPos[0:1])
	finalRowPos := calculateMove(rowStartPos, rowMoves)

	colStartPos := letterToNum([]rune(startPos[1:2])[0])
	movedColPos := calculateMove(colStartPos, colMoves)
	colLetter := numToLetter(movedColPos % 8)

	return fmt.Sprintf("%d%s", finalRowPos, colLetter)
}

func main() {
	exampleOne := findPos("2b", 3, 2)
	fmt.Println("exampleOne", exampleOne)
	// expected output 5d

	exampleTwo := findPos("5h", 11, 25)
	fmt.Println("exampleTwo", exampleTwo)
	// expected output 8a

	exampleThree := findPos("6h", 11, 25)
	fmt.Println("exampleThree", exampleThree)
	// expected output 3a
}

//   a b c d e f g h
// 1 # # # # # # # #
// 2 # # # # # # # #
// 3 # # # # # # # #
// 4 # # # # # # # #
// 5 # # # # # # # #
// 6 # # # # # # # #
// 7 # # # # # # # #
// 8 # # # # # # # #

// The checkerboard above has 64 squares, 8 rows and 8 columns. Each row is labeled from 1 to 8 and each column is labeled from a to h (lowercase).A square is located at the intersection of a row and of a column, like square 2C it's the intersection of the row 2 and column C.678func run(startPosition1package main2345/** Write your code the problem\'s require*/var endPosition s9return endPosition10}1112By first positioning a piece to a starting square, you need to figure out where the end square will be by moving the piece R times (rows) vertically to the top and C times (columns) horizontally to the right. If during the moves the piece reaches the end of the board, it will start again from the opposite direction like in the examples below.
