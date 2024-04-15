import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5000, // Frontend port
        proxy: {
            "/api": {
                target: "http://localhost:3000", // Backend port
                changeOrigin: true, // might be necessary depending on your backend setup
                secure: false, // might be necessary if your backend uses self-signed certificates
            },
        },
    },
})
// })
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	server: {
// 		port: 3000,
// 		proxy: {
// 			"/api": {
// 				target: "http://localhost:3000",
// 			},
// 		},
// 	},
// });

