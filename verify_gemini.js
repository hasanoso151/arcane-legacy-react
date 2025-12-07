
import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function verifyGemini() {
    console.log("🔍 Starting Advanced Gemini Diagnostics...");

    // 1. Read .env file manually
    // We strictly look for .env in the current directory
    let apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        try {
            const envPath = path.join(__dirname, '.env');
            if (fs.existsSync(envPath)) {
                console.log(`📂 Found .env file at: ${envPath}`);
                const envContent = fs.readFileSync(envPath, 'utf-8');

                const match = envContent.match(/GEMINI_API_KEY=(.*)/);
                if (match && match[1]) {
                    apiKey = match[1];
                    console.log("🔑 Extracted Key from file.");
                } else {
                    console.log("❌ GEMINI_API_KEY not found in .env text content.");
                }
            } else {
                console.log("❌ .env file NOT found in root directory.");
            }
        } catch (e) {
            console.error("❌ Error reading .env file:", e.message);
        }
    }

    if (!apiKey) {
        console.error("❌ CRTICAL: Could not load API Key.");
        return;
    }

    // 2. Analyze the Key
    console.log(`📏 Raw Key Length: ${apiKey.length}`);

    let cleanKey = apiKey;

    // Check for common issues
    if (apiKey.includes('"') || apiKey.includes("'")) {
        console.warn("⚠️  WARNING: Key contains quotes. Removing them...");
        cleanKey = cleanKey.replace(/['"]+/g, '');
    }

    if (cleanKey !== cleanKey.trim()) {
        console.warn("⚠️  WARNING: Key has leading/trailing whitespace. Trimming...");
        cleanKey = cleanKey.trim();
    }

    console.log(`✨ Cleaned Key Length: ${cleanKey.length}`);

    // 3. Test Connection
    try {
        const ai = new GoogleGenAI({ apiKey: cleanKey });

        console.log("\n🔄 Attempting connection with 'gemini-2.0-flash-lite-preview-02-05'...");

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.0-flash-lite-preview-02-05',
                contents: 'Hello!',
            });
            console.log("\n🌺 SUCCESS! gemini-2.0-flash-lite is working.");
            console.log("📝 Robot says:", response.text);
            return;
        } catch (e) {
            console.log(`❌ gemini-2.0-flash-lite failed: ${e.message}`);
            throw e;
        }

    } catch (error) {
        console.log("\n🛑 FINAL FAILURE DIAGNOSIS:");
        if (error.message.includes("API key not valid") || error.message.includes("INVALID_ARGUMENT")) {
            console.log("👉 The Key itself is rejected by Google.");
            console.log("   - Did you copy the full string?");
            console.log("   - Is the project billing/API enabled?");
        } else {
            console.log("👉 Unknown error:", error.message);
        }
    }
}

verifyGemini();
