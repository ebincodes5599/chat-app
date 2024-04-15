import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    // Set cookie options for security and functionality
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // Prevent access through client-side scripts
        sameSite: "strict", // Strictly same site
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production (over HTTPS)
        // Note: Set `secure: true` if your production environment uses HTTPS. If testing locally (http),
        // you might need to set it to `false` or use `secure: process.env.NODE_ENV === "production"`
    });
};

export default generateTokenAndSetCookie;

// import jwt from "jsonwebtoken";

// const generateTokenAndSetCookie = (userId, res) => {
// 	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
// 		expiresIn: "15d",
// 	});

// 	// res.cookie("jwt", token, {
// 	// 	maxAge: 15 * 24 * 60 * 60 * 1000, // MS
// 	// 	httpOnly: true, // prevent XSS attacks cross-site scripting attacks
// 	// 	sameSite: "strict", // CSRF attacks cross-site request forgery attacks
// 	// 	secure: process.env.NODE_ENV !== "development",
// 	// });

//   res.cookie("jwt", token);
// };

// export default generateTokenAndSetCookie;
