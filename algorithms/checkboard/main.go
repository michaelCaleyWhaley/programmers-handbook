package main

import (
	"fmt"
	"strconv"
)

func numToLetter(num int64) string { return string('a' - 1 + num) }

func letterToNum(letter rune) int64 {
	return int64(int(letter - 'a' + 1))
}

func stringToInt64(stringVar string) int64 {
	intVar, _ := strconv.Atoi(stringVar)
	return int64(intVar)
}

func calcMoves(start int64, moves int64) int64 {
	finalTotal := start + moves

	if (finalTotal) <= 8 {
		return finalTotal
	}
	normalisedMoves := moves % 8
	if start+normalisedMoves <= 8 {
		return start + normalisedMoves
	}
	return (start + normalisedMoves) % 8
}

func FindPos(startPos string, rowMoves int64, colMoves int64) string {
	startRowPos := stringToInt64(startPos[0:1])
	finalRowPos := calcMoves(startRowPos, rowMoves)

	startColPos := letterToNum([]rune(startPos[1:2])[0])
	finalColPos := calcMoves(startColPos, colMoves)

	return fmt.Sprintf("%d%s", finalRowPos, numToLetter(finalColPos))
}

func main() {

	exampleOne := FindPos("5h", 11, 25)
	fmt.Println("exampleOne", exampleOne)
	// expected outcome 8a

	exampleTwo := FindPos("5h", 12, 25)
	fmt.Println("exampleTwo", exampleTwo)
	// expected outcome 1a

	exampleThree := FindPos("5h", 25, 9)
	fmt.Println("exampleThree", exampleThree)
	// expected outcome 6a
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
