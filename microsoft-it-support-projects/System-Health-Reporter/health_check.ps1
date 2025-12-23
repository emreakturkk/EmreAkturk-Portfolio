<#
.SYNOPSIS
    Automated System Health & Asset Report Tool
.DESCRIPTION
    Based on Microsoft IT Support methodology.
    Collects CPU, RAM, Disk, and Network telemetry for diagnostics.
.AUTHOR
    Emre Aktürk
#>

Clear-Host
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "   SYSTEM HEALTH SCAN INITIATED           " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Please wait, gathering telemetry..." -ForegroundColor Yellow
Start-Sleep -Seconds 2

# 1. OS & COMPUTER INFO
$osInfo = Get-CimInstance Win32_OperatingSystem
$compInfo = Get-CimInstance Win32_ComputerSystem

Write-Host "`n[1] SYSTEM INFORMATION" -ForegroundColor Green
Write-Host "Computer Name  : " $compInfo.Name
Write-Host "Operating Sys. : " $osInfo.Caption
Write-Host "Last Boot Up   : " $osInfo.LastBootUpTime

# 2. HARDWARE RESOURCES
$cpu = Get-CimInstance Win32_Processor
$totalRam = [math]::round($compInfo.TotalPhysicalMemory / 1GB, 2)

Write-Host "`n[2] HARDWARE RESOURCES" -ForegroundColor Green
Write-Host "Processor (CPU): " $cpu.Name
Write-Host "Total RAM      : " $totalRam "GB"

# 3. STORAGE STATUS
$disk = Get-Volume -DriveLetter C

Write-Host "`n[3] STORAGE (C: Drive)" -ForegroundColor Green
Write-Host "Total Size     : " $([math]::round($disk.Size / 1GB, 2)) "GB"
Write-Host "Free Space     : " $([math]::round($disk.SizeRemaining / 1GB, 2)) "GB"

if ($disk.SizeRemaining -lt 5GB) {
    Write-Host "WARNING: Low Disk Space!" -ForegroundColor Red
} else {
    Write-Host "Disk Status: Healthy" -ForegroundColor Gray
}

# 4. NETWORK CONNECTION
# Filtering specifically for IPv4 to avoid confusing output
$ip = Get-NetIPAddress | Where-Object { $_.AddressFamily -eq 'IPv4' -and ($_.InterfaceAlias -like '*Wi-Fi*' -or $_.InterfaceAlias -like '*Ethernet*') -and $_.IPAddress -notlike '169.*' } | Select-Object -First 1

Write-Host "`n[4] NETWORK CONNECTION" -ForegroundColor Green
if ($ip) {
    Write-Host "IPv4 Address   : " $ip.IPAddress
    Write-Host "Interface Type : " $ip.InterfaceAlias
} else {
    Write-Host "No active network connection detected." -ForegroundColor Red
}

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "SCAN COMPLETE." -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Read-Host "Press Enter to exit..."