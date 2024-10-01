import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.scss";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};
function App() {
	return (
		<>
			<div className='app'>
				<div className='container'>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route path='/' element={<Home />}></Route>
							<Route path='/post/:id' element={<Single />}></Route>
							<Route path='/write' element={<Write />}></Route>
						</Route>
						<Route path='/login' element={<Login />}></Route>
						<Route path='/register' element={<Register />}></Route>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
