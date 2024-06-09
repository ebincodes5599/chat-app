import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (login, password) => {
		const success = handleInputErrors(login, password);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: login, password }),
				credentials: 'include',
			});
			
			if (!res.ok) {
				const errorData = await res.json(); // Assuming the server responds with JSON even on errors
				throw new Error(errorData.error || 'An unknown error occurred');
			}
			
			const data = await res.json(); // Read the response body once
			if (!res.ok) {
					throw new Error(data.error || 'An unknown error occurred');
			}
			if (data.error) {
					throw new Error(data.error);
			}

			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors(login, password) {
	if (!login || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}
