@echo off
title EliteXSAT
cd /d "%~dp0"

where node >nul 2>nul || (
  echo.
  echo   Node.js was not found on your PATH.
  echo   Install it once from https://nodejs.org  then double-click this file again.
  echo.
  pause
  exit /b
)

start "EliteXSAT server" cmd /k "node serve.js"
timeout /t 1 /nobreak >nul
start "" "http://localhost:8080/app.html"
exit /b
