$copies = Read-Host "How many copies?"

$template = Get-Clipboard -Raw
$template = $template.Trim()

$blocks = for ($i = 1; $i -le [int]$copies; $i++) {
    "    " + ($template -replace "`r?`n", "`r`n    ").TrimEnd()
}

Set-Clipboard -Value ($blocks -join "`r`n")

Write-Host "$copies copies placed in clipboard."