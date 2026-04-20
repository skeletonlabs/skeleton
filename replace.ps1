Get-ChildItem -Path . -Recurse -File -Include *.svelte, *.ts, *.astro |
Where-Object { $_.FullName -notmatch '\\node_modules\\' } |
ForEach-Object {
    try {
        $content = Get-Content $_.FullName -Raw -ErrorAction Stop
    } catch {
        return
    }

    if (-not $content) { return }

    $updated = [regex]::Replace(
        $content,
        "import\s*\{\s*([^}]+)\s*\}\s*from\s*'@lucide/svelte';",
        {
            param($match)

            $icons = $match.Groups[1].Value -split ',' | ForEach-Object {
                $_.Trim()
            }

            $lines = $icons | ForEach-Object {
                $name = $_ -replace 'Icon$', ''

                $kebab = ($name -creplace '([a-z0-9])([A-Z])', '$1-$2').ToLower()

                "import $_ from '@lucide/svelte/icons/$kebab';"
            }

            $lines -join "`n"
        }
    )

    if ($content -ne $updated) {
        try {
            Set-Content $_.FullName $updated -ErrorAction Stop
        } catch {
        }
    }
}