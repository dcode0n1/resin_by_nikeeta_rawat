# rotate-exif.ps1
Add-Type -AssemblyName System.Drawing

$stagingDir = "C:\Nikeeta\nikeeta-rawat-resin\public\images\raw-staging"
$files = Get-ChildItem -Path $stagingDir -Filter *.jpg

$rotatedCount = 0

foreach ($file in $files) {
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        
        # EXIF Orientation Tag ID is 274 (0x0112)
        $orientationId = 274
        $hasOrientation = $false
        
        # Check if the image contains the Orientation property
        if ($img.PropertyIdList -contains $orientationId) {
            $prop = $img.GetPropertyItem($orientationId)
            $orientationValue = $prop.Value[0]
            $hasOrientation = $true
        }
        
        if ($hasOrientation) {
            $rotate = [System.Drawing.RotateFlipType]::RotateNoneFlipNone
            $needsSave = $true
            
            switch ($orientationValue) {
                1 { $needsSave = $false } # Normal
                2 { $rotate = [System.Drawing.RotateFlipType]::RotateNoneFlipX }
                3 { $rotate = [System.Drawing.RotateFlipType]::Rotate180FlipNone }
                4 { $rotate = [System.Drawing.RotateFlipType]::Rotate180FlipX }
                5 { $rotate = [System.Drawing.RotateFlipType]::Rotate90FlipX }
                6 { $rotate = [System.Drawing.RotateFlipType]::Rotate90FlipNone }
                7 { $rotate = [System.Drawing.RotateFlipType]::Rotate270FlipX }
                8 { $rotate = [System.Drawing.RotateFlipType]::Rotate270FlipNone }
                default { $needsSave = $false }
            }
            
            if ($needsSave) {
                # Rotate the image
                $img.RotateFlip($rotate)
                
                # Clear the orientation tag to avoid double rotation in browsers
                $prop.Value[0] = 1
                $img.SetPropertyItem($prop)
                
                # Save the image to a temp path first to avoid file lock issues, then overwrite
                $tempPath = [System.IO.Path]::GetTempFileName() + ".jpg"
                $img.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
                $img.Dispose()
                
                Move-Item -Path $tempPath -Destination $file.FullName -Force
                $rotatedCount++
                Write-Host "Rotated $($file.Name) (Orientation value: $orientationValue)"
            } else {
                $img.Dispose()
            }
        } else {
            $img.Dispose()
        }
    } catch {
        Write-Host "Error processing $($file.Name): $_"
    }
}

Write-Host "Success: Rotated $rotatedCount images based on EXIF orientation."
