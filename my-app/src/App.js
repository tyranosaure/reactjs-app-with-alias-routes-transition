import React from "react"
import { AnimatedRoutes } from "@services/index"
import { BrowserRouter } from "react-router-dom"
import "./App.scss"
export default function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<AnimatedRoutes />
			</BrowserRouter>
		</div>
	)
}
