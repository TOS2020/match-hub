@echo off
SET REPO_NAME=match-hub
SET GITHUB_USER=TOS2020

echo ==========================================
echo MatchHub GitHub Deployment Initializer
echo ==========================================
echo.

:: Initialize Git
echo [*] Initializing Git repository...
git init
git checkout -b main
git add .
git commit -m "Initialize MatchHub alignment suite"

:: Attempt to create repo with GH CLI
where gh >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [*] GitHub CLI detected. Creating remote repository...
    gh repo create %REPO_NAME% --public --source=. --remote=origin --push
) else (
    echo [!] GitHub CLI not detected.
    echo Please follow these manual steps:
    echo 1. Go to https://github.com/new
    echo 2. Create a repository named '%REPO_NAME%'
    echo 3. Run the following commands:
    echo    git remote add origin https://github.com/TOS2020/%REPO_NAME%.git
    echo    git push -u origin main
)

echo.
echo ==========================================
echo Next Steps for Deployment:
echo 1. Go to https://github.com/%GITHUB_USER%/%REPO_NAME%/settings/pages
echo 2. Under 'Build and deployment' -> 'Source', select 'GitHub Actions'.
echo 3. The website will go live at: https://%GITHUB_USER%.github.io/%REPO_NAME%/
echo ==========================================
pause
