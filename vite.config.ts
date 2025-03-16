import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

console.log(process.cwd())

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@app": process.cwd() + "/src/1.App",
            "@pages": process.cwd() + "/src/2.Pages",
            "@widgets": process.cwd() + "/src/3.Widgets",
            "@entities": process.cwd() + "/src/4.Entities",
            "@shared": process.cwd() + "/src/5.Shared",
            "@ui": process.cwd() + "/src/5.Shared/ui",
            "@types": process.cwd() + "/src/5.Shared/types",
            "@api": process.cwd() + "/src/5.Shared/api",
            "@config": process.cwd() + "/src/5.Shared/config",
        },
    },
})
