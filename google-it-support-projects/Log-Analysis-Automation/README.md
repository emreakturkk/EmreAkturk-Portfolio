# 🛠️ System Log Analysis & Automation Script

This project is a Python-based automation tool designed to parse, analyze, and report system logs. It was developed to apply the **IT Automation** and **Troubleshooting** concepts from the **Google IT Support Professional Certificate**.

## 🚀 Project Overview
In large-scale IT environments, manually checking server logs (syslog) is inefficient. This script automates the process by reading log files, using **Regular Expressions (RegEx)** to identify specific patterns, and generating a summary report of system health.

### 🔑 Key Features
- **Automated Parsing:** Reads raw log files dynamically.
- **Error Tracking:** Identifies and counts distinct error messages using RegEx.
- **Categorization:** Separates `INFO` and `ERROR` logs to assess system stability.
- **Reporting:** Generates a human-readable summary of the most frequent errors.
- **OS Independent:** Uses the `os` module to ensure path compatibility across different environments (Windows/Linux).

## 🛠️ Technologies Used
- **Python 3**
- **Regular Expressions (re module)**
- **File I/O Operations**
- **Data Structures (Dictionaries for counting)**

## 📂 How to Run
1. Ensure you have Python installed.
2. Clone this repository or download the files.
3. Place your log file named `server_log.txt` in the same directory.
4. Run the script:

```bash
python log_analyzer.py


📊 Sample Output

--- Islem Baslatiliyor... ---
Okunan Dosya Yolu: .../server_log.txt

-> Hata tespit edildi: Connection to DB failed
-> Hata tespit edildi: Timeout while retrieving information
...

******************************
GENEL DURUM RAPORU
******************************
Toplam Bilgilendirme (INFO): 3
Toplam Kritik Hata (ERROR): 4
------------------------------
Sık Yasanan Hatalar:
- Connection to DB failed -> 2 kere tekrarlandi.
- The user does not exist -> 1 kere tekrarlandi.