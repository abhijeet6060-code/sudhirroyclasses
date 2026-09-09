# 🚀 Git Guide — Sudhir Roy Classes

📁 **Repository:** [https://github.com/abhijeet6060-code/sudhirroyclasses](https://github.com/abhijeet6060-code/sudhirroyclasses)  
🌿 **Branch:** `main`

---

## ⚡ 1-Click / 1-Line Command (Fastest Way)

Whenever you edit files and want to save everything directly to GitHub:

### 👉 **In PowerShell (VS Code Terminal / Windows PowerShell):**
```powershell
git add . ; git commit -m "Update website" ; git push origin main
```

### 👉 **In Git Bash or Command Prompt:**
```bash
git add . && git commit -m "Update website" && git push origin main
```

---

## 📝 Step-by-Step Daily Workflow

If you prefer doing it step by step:

### **1. Stage all your changes**
```bash
git add .
```

### **2. Commit with a message**
```bash
git commit -m "Your update message here"
```

### **3. Push to GitHub**
```bash
git push origin main
```

---

## 🔍 Useful Helper Commands

| What you want to do | Command |
| :--- | :--- |
| **Check modified files** | `git status` |
| **View recent commit history** | `git log --oneline -n 5` |
| **Pull latest updates from GitHub** | `git pull origin main` |

---

## ⚠️ If Push Gets Rejected (Remote is Ahead)

Run these 2 lines:
```bash
git pull --rebase origin main
git push origin main
```
