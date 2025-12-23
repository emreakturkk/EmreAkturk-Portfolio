# 🛠️ System Health Reporter (PowerShell Automation)

This project is an automated diagnostic tool developed to streamline IT troubleshooting. It directly applies the core concepts learned in the **Microsoft IT Support Professional Certificate**, replacing manual checks with a single PowerShell script.

## 📚 Syllabus & Concept Mapping
This tool consolidates knowledge from the following course modules:

- **Week 1 (Computer Fundamentals):**
  - *Applied Concept:* Retrieving Hardware specifications (CPU, RAM) and OS details via WMI/CIM instances.
- **Week 2 (Networking Fundamentals):**
  - *Applied Concept:* Analyzing TCP/IP configurations (`Get-NetIPAddress`) to verify connectivity.
- **Week 3 (Data Management & Security):**
  - *Applied Concept:* Monitoring storage health and disk capacity to prevent data loss.
- **Week 6 (Troubleshooting & Diagnostics):**
  - *Applied Concept:* Creating a systematic report to identify potential bottlenecks (Root Cause Analysis).

## 🚀 Features
The script performs a rapid "Health Check" and outputs:
1.  **System Vitality:** Hostname, OS Version, and Uptime (to detect unexpected reboots).
2.  **Hardware Audit:** Processor model and total installed RAM.
3.  **Storage Analysis:** Checks C: Drive space and alerts if free space is below 5GB.
4.  **Network Status:** Displays the active IPv4 address and interface type (Ethernet/Wi-Fi).

## 💻 How to Run
1.  Open the folder containing the script.
2.  Right-click on `health_check.ps1`.
3.  Select **"Run with PowerShell"**.

> **Note:** If you encounter a permission error, run this command in PowerShell once:
> `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`

## 📊 Sample Output
```text
[1] SYSTEM INFORMATION
Computer Name  : WORKSTATION-01
Operating Sys. : Microsoft Windows 11 Pro
Last Boot Up   : 12/24/2025 09:00:00

[2] HARDWARE RESOURCES
Processor (CPU): Intel(R) Core(TM) i7-10700K CPU
Total RAM      : 16 GB

[3] STORAGE (C: Drive)
Total Size     : 500 GB
Free Space     : 120 GB
Disk Status: Healthy

[4] NETWORK CONNECTION
IPv4 Address   : 192.168.1.105
Interface Type : Wi-Fi