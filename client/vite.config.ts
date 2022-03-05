import { fileURLToPath, URL } from "url";

import { defineConfig, loadEnv, type ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default ({ mode }: ConfigEnv) => {
  console.log(mode);

  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  const serverUrl = process.env.VITE_VUE_APP_API_SERVER_URL;
  console.log(serverUrl);

  return defineConfig({
    plugins: [vue()],

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      // proxy: {
      //   "/api": {
      //     target: "https://eesoymilk-mevn.df.r.appspot.com",
      //     changeOrigin: true,
      //     secure: false,
      //     ws: true,
      //     // rewrite: (path) => path.replace(/^\/api/, ""),
      //   },
      // },
    },
  });
};

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
//   server: {
//     proxy: {
//       "/api": {
//         target: VITE_VUE_APP_API_SERVER_URL,
//         changeOrigin: true,
//         secure: false,
//         // rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// });
