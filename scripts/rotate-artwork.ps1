# rotate-artwork.ps1
param (
    [Parameter(Mandatory=$true)]
    [int[]]$Numbers, # e.g. 1, 5, 12
    
    [Parameter(Mandatory=$false)]
    [ValidateSet(90, 180, 270)]
    [int]$Angle = 90 # Direction: 90 degrees CW by default
)

Add-Type -AssemblyName System.Drawing

$stagingDir = "C:\Nikeeta\nikeeta-rawat-resin\public\images\raw-staging"
$successCount = 0

foreach ($num in $Numbers) {
    $numStr = $num.ToString("D2")
    $fileName = "artwork-$numStr.jpg"
    $filePath = Join-Path $stagingDir $fileName
    
    if (Test-Path -Path $filePath) {
        try {
            $img = [System.Drawing.Image]::FromFile($filePath)
            
            $rotateType = [System.Drawing.RotateFlipType]::RotateNoneFlipNone
            switch ($Angle) {
                90  { $rotateType = [System.Drawing.RotateFlipType]::Rotate90FlipNone }
                180 { $rotateType = [System.Drawing.RotateFlipType]::Rotate180FlipNone }
                270 { $rotateType = [System.Drawing.RotateFlipType]::Rotate270FlipNone }
            }
            
            $img.RotateFlip($rotateType)
            
            # Save to a temp file first, then overwrite
            $tempPath = [System.IO.Path]::GetTempFileName() + ".jpg"
            $img.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
            $img.Dispose()
            
            Move-Item -Path $tempPath -Destination $filePath -Force
            Write-Host "Rotated $fileName by $Angle degrees CW successfully." -ForegroundColor Green
            $successCount++
        } catch {
            Write-Host "Error rotating $fileName: $_" -ForegroundColor Red
        }
    } else {
        Write-Host "File not found: $fileName" -ForegroundColor Yellow
    }
}

Write-Host "Success: Rotated $successCount files."
