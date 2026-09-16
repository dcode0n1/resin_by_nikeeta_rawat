# organize-images.ps1
$sourceDir = "C:\Nikeeta\nikeeta-rawat-resin\public\nikeeta rawat resin"
$destDir = "C:\Nikeeta\nikeeta-rawat-resin\public\images\raw-staging"

# Ensure staging directory exists
if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
}

# Copy and rename files sequentially
$files = Get-ChildItem -Path $sourceDir -Filter *.jpeg | Sort-Object Name
$count = 0

foreach ($file in $files) {
    $count++
    $numStr = $count.ToString("D2") # Pad numbers (01, 02, etc.)
    $newName = "artwork-$numStr.jpg"
    $destPath = Join-Path $destDir $newName
    
    Copy-Item -Path $file.FullName -Destination $destPath -Force
}

Write-Host "Success: Organized $count images into public/images/raw-staging/" -ForegroundColor Gold
