# PowerShell script to rename image sequence files
# This removes spaces and parentheses from filenames for Cloudflare compatibility

Write-Host "Starting file rename process..." -ForegroundColor Green

# Define paths
$oldFolder = "public\assets\sqeantial files"
$newFolder = "public\assets\sequence"

# Check if old folder exists
if (-not (Test-Path $oldFolder)) {
    Write-Host "Error: Folder '$oldFolder' not found!" -ForegroundColor Red
    exit 1
}

# Create new folder if it doesn't exist
if (-not (Test-Path $newFolder)) {
    Write-Host "Creating new folder: $newFolder" -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $newFolder -Force | Out-Null
}

# Get all webp files
$files = Get-ChildItem -Path $oldFolder -Filter "*.webp"
Write-Host "Found $($files.Count) files to rename" -ForegroundColor Cyan

# Counter for progress
$count = 0

# Rename and move each file
foreach ($file in $files) {
    $count++
    
    # Extract the frame number from the filename
    # Pattern: A_cinematic_drone_202601252333_qtjih (1)_XXX.webp
    if ($file.Name -match '_(\d{3})\.webp$') {
        $frameNumber = $matches[1]
        $newName = "drone_$frameNumber.webp"
        $newPath = Join-Path $newFolder $newName
        
        # Copy file to new location with new name
        Copy-Item -Path $file.FullName -Destination $newPath -Force
        
        Write-Host "[$count/$($files.Count)] Renamed: $($file.Name) -> $newName" -ForegroundColor Gray
    } else {
        Write-Host "Warning: Could not parse filename: $($file.Name)" -ForegroundColor Yellow
    }
}

Write-Host "`nRename complete!" -ForegroundColor Green
Write-Host "New files are in: $newFolder" -ForegroundColor Cyan
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Verify the files look correct in the new folder"
Write-Host "2. Delete the old folder if everything looks good"
Write-Host "3. Run: npm run build"
Write-Host "4. Deploy to Cloudflare Pages"
