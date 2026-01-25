# Image Sequence Issue & Fix

## Problem
The image sequence animation is causing 404 errors on Cloudflare Pages because:
1. Folder name has spaces: `sqeantial files`
2. Filenames have spaces and parentheses: `A_cinematic_drone_202601252333_qtjih (1)_XXX.webp`
3. URL encoding isn't working properly on Cloudflare's static file serving

## Current Status
✅ Image sequence section is **temporarily disabled** in `app/page.tsx`
✅ Website is now fully functional without it
✅ All other features working correctly

## To Re-enable (Choose One Option)

### Option 1: Rename Files (Recommended)
This is the cleanest solution:

1. **Rename the folder**:
   - From: `public/assets/sqeantial files/`
   - To: `public/assets/sequence/`

2. **Rename all image files** to remove spaces and parentheses:
   - From: `A_cinematic_drone_202601252333_qtjih (1)_010.webp`
   - To: `drone_sequence_010.webp`

3. **Update VideoShowcase.tsx**:
   ```javascript
   img.src = `/assets/sequence/drone_sequence_${frameNumber}.webp`;
   ```

4. **Re-enable in page.tsx**:
   ```tsx
   <VideoShowcase />
   ```

### Option 2: Convert to Video (Better Performance)
Convert the image sequence to a video file:

1. Use FFmpeg to create video:
   ```bash
   ffmpeg -framerate 30 -i "A_cinematic_drone_202601252333_qtjih (1)_%03d.webp" -c:v libx264 -pix_fmt yuv420p drone-sequence.mp4
   ```

2. Create WebM version:
   ```bash
   ffmpeg -i drone-sequence.mp4 -c:v libvpx-vp9 -crf 30 drone-sequence.webm
   ```

3. Replace VideoShowcase with video player controlled by scroll

**Benefits**:
- Much smaller file size (1-2MB vs 30MB+ for images)
- Faster loading
- Better performance
- No file path issues

### Option 3: Keep It Disabled
The website works perfectly without the image sequence. It was a nice visual effect but not essential for functionality.

## Quick Fix Commands

If you want to rename files quickly:

### Windows PowerShell:
```powershell
# Navigate to the folder
cd "tacosreact\public\assets"

# Rename folder
Rename-Item "sqeantial files" "sequence"

# Rename files (in sequence folder)
cd sequence
Get-ChildItem -Filter "*.webp" | ForEach-Object {
    $newName = $_.Name -replace "A_cinematic_drone_202601252333_qtjih \(1\)_", "drone_sequence_"
    Rename-Item $_.FullName $newName
}
```

### Linux/Mac:
```bash
# Navigate to the folder
cd tacosreact/public/assets

# Rename folder
mv "sqeantial files" sequence

# Rename files
cd sequence
for file in *.webp; do
    mv "$file" "${file//A_cinematic_drone_202601252333_qtjih (1)_/drone_sequence_}"
done
```

## Recommendation

For the best user experience, I recommend **Option 2 (Convert to Video)**:
- Fastest loading time
- Smallest file size
- Best performance
- No compatibility issues

The video would be controlled by scroll position just like the image sequence, but with much better performance.

---

**Current Status**: Image sequence disabled, website fully functional
**Next Step**: Choose one of the options above to re-enable or improve the feature
