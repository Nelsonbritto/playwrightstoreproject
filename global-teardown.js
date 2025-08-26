import { execSync } from "child_process";

async function globalTeardown() {
  try {
    console.log("🧹 Cleaning old Allure reports...");
    execSync('npx allure generate "allure-results" --clean', { stdio: "inherit" });

    console.log("📊 Opening Allure report...");
   execSync('npx allure open "allure-report"', { stdio: "inherit" });
  } catch (error) {
    console.error("❌ Failed to generate/open Allure report:", error.message);
  }
}

export default globalTeardown;