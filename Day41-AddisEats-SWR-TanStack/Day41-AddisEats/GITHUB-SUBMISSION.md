# GitHub submission checklist

The assignment requires the code to be committed to your existing Next.js repository.

1. Extract `Day41-AddisEats-SWR-TanStack.zip`.
2. Copy the `Day41-AddisEats` folder into the root of your existing `NEXT.JS` repository. Do not copy `node_modules`.
3. Open PowerShell at the repository root and check the folder contents:

   ```powershell
   git status --short
   Get-ChildItem .\Day41-AddisEats
   ```

4. Install and run the project from its folder:

   ```powershell
   cd .\Day41-AddisEats
   npm.cmd install
   npm.cmd run dev
   ```

5. Return to the repository root, stage only this assignment, inspect the staged paths, and commit:

   ```powershell
   cd ..
   git add Day41-AddisEats/
   git --no-pager diff --cached --name-only
   git commit -m "Day 41: Add SWR and TanStack Query data fetching"
   git push origin main
   ```

Before committing, confirm the staged file list contains only `Day41-AddisEats/` paths and does not include `node_modules/`, `.next/`, ZIP files, or unrelated day folders. If `git status` shows changes from another assignment, leave them unstaged.

The ZIP is a source project archive and does not include `node_modules`; `npm.cmd install` recreates dependencies from `package.json`.
