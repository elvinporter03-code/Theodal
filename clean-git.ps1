# Clean desktop.ini files from .git directory
Get-ChildItem -Path ".git" -Filter "desktop.ini" -Recurse -Force -ErrorAction SilentlyContinue | Remove-Item -Force -ErrorAction SilentlyContinue
