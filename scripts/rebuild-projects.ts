import fs from "fs";
import path from "path";
import db from "../backend/connection";

async function rebuildProjects() {
    try {
        const { rows } = await db.query(
            "SELECT * FROM projects ORDER BY id ASC"
        );

        const outputPath = path.join(
            process.cwd(),
            "src/data/projects.json"
        );

        fs.mkdirSync(path.dirname(outputPath), { recursive: true });

        fs.writeFileSync(
            outputPath,
            JSON.stringify(rows, null, 2),
            "utf-8"
        );

        console.log("✅ Projects rebuilt successfully! 😄");
    } catch (error) {
        console.error("❌ Failed to rebuild projects! ☹️ Error:", error);
        process.exit(1);
    }
}

rebuildProjects();