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
				<div>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<Home />} />
							<Route path='post/:id' element={<Single />} />
							<Route path='write' element={<Write />} />
						</Route>
						<Route path='login' element={<Login />} />
						<Route path='register' element={<Register />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
