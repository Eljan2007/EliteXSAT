@echo off
title EliteXSAT - Publish update
cd /d "%~dp0"

where git >nul 2>nul || (
  echo.
  echo   Git was not found. Install it once from https://git-scm.com  then run this again.
  echo.
  pause
  exit /b
)

echo.
echo   ==================================================
echo     Publishing your latest EliteXSAT changes online
echo   ==================================================
echo.

REM --- Auto-bump the ?v cache version so every visitor gets the newest files ---
where node >nul 2>nul
if %errorlevel%==0 (
  node bump-version.js
) else (
  echo   [skip] Node not found - cache version NOT bumped this time.
)
echo.

git add -A
git commit -m "Update %date% %time%"
git push origin main

echo.
echo   ------------------------------------------------------------
echo   If you saw no red errors above, you're done. Your live site
echo   refreshes in about a minute at:
echo.
echo     https://eljan2007.github.io/EliteXSAT/app.html
echo.
echo   (If it said "nothing to commit" - that just means there were
echo    no changes since last time. Totally fine.)
echo   ------------------------------------------------------------
echo.
pause
