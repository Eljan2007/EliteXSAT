@echo off
title EliteXSAT - Landing
cd /d "%~dp0"

where node >nul 2>nul || (
  echo.
  echo   Node.js was not found on your PATH.
  echo   Install it once from https://nodejs.org  then double-click this file again.
  echo.
  pause
  exit /b
)

rem Start the local server (if one is already running on 8080, this window just
rem reports the port is in use - harmless; the browser still opens below).
start "EliteXSAT server" cmd /k "node serve.js"
timeout /t 1 /nobreak >nul
start "" "http://localhost:8080/landing.html"
exit /b
