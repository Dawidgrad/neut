package main

import (
	"net/http"
	"path/filepath"
)

func main() {
	// Serve the React app
	reactBuildPath := "../ertut_frontend/build"
	absReactBuildPath, _ := filepath.Abs(reactBuildPath)
	fs := http.FileServer(http.Dir(absReactBuildPath))
	http.Handle("/", fs)
	http.ListenAndServe(":8080", nil)
}
