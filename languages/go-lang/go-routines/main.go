package main

import (
	"fmt"
	"runtime"
	"sync"
)

func findCpuCoreCount(wg *sync.WaitGroup, cpuCount *int) {
	// Adds 1 to the WaitGroup counter.
	wg.Add(1)
	go func() {
		*cpuCount = runtime.NumCPU()
		// Subtracts 1 from the WaitGroup counter.
		wg.Done()
	}()
}

func findMemStats(wg *sync.WaitGroup, memoryAlloc *uint64) {
	// Adds 1 to the WaitGroup counter.
	wg.Add(1)
	go func() {
		var m runtime.MemStats
		runtime.ReadMemStats(&m)
		*memoryAlloc = m.Alloc
		// Subtracts 1 from the WaitGroup counter.
		wg.Done()
	}()
}

func main() {
	var cpuCount int
	var memoryAlloc uint64

	// Creates WaitGroup which enables us to pause the program to wait for parallel processes to complete.
	var wg sync.WaitGroup

	// Passes variables by pointer so that we can retrieve the values once processes are complete.
	findCpuCoreCount(&wg, &cpuCount)
	findMemStats(&wg, &memoryAlloc)

	// Pauses here to wait for the WaitGroup counter  to reach 0.
	wg.Wait()

	fmt.Println("memoryAlloc", memoryAlloc)
	fmt.Println("cpuCount", cpuCount)
}
