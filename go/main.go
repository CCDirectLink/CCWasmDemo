//+build wasm

package main

import (
	"log"
	"syscall/js"
)

func main() {
	js.Global().Call("alert", "test from go")

	log.Println("Print from go")

	js.Global().Set("goAdd", js.FuncOf(func(this js.Value, i []js.Value) interface{} {
		return js.ValueOf(add(i[0].Int(), i[1].Int()))
	}))

	dontReturn() //Callbacks only work when program has not exited
}

func dontReturn() {
	c := make(chan struct{}, 0)
	<-c
}

func add(a, b int) int {
	return a + b
}
