@echo off
title EliteXSAT  -  keep this window open while you use the site
cd /d "%~dp0"

REM Try to start a small local web server (best experience). If Python is
REM not available, just open the page directly in the browser instead.
where python >nul 2>nul
if %errorlevel%==0 (
  echo Starting EliteXSAT...
  echo.
  echo   A browser tab will open in a moment.
  echo   KEEP THIS BLACK WINDOW OPEN while you use the site.
  echo   When you are finished, just close this window.
  echo.
  start "" http://localhost:5180/index.html
  python -m http.server 5180
) else (
  start "" "%~dp0index.html"
)
