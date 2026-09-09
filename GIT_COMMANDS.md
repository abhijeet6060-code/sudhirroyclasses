# Git Commands for Sudhir Roy Classes (`sudhirroyclasses`)

GitHub Repository: `https://github.com/abhijeet6060-code/sudhirroyclasses.git`

---

## 🚀 Quick 1-Step Push (Whenever you make changes)

### In PowerShell:
```powershell
git add . ; git commit -m "Updated website" ; git push origin main
```

### In Git Bash / CMD:
```bash
git add . && git commit -m "Updated website" && git push origin main
```

---

## 📋 Step-by-Step Commands

### Step 1: Check what changed
```bash
git status
```

### Step 2: Stage all changes
```bash
git add .
```

### Step 3: Commit changes with a descriptive message
```bash
git commit -m "Your commit message here"
```

### Step 4: Push to GitHub (`main` branch)
```bash
git push origin main
```

---

## 🔄 If GitHub is ahead (Pull before pushing)
If you get a push rejected error:
```bash
git pull --rebase origin main
git push origin main
```

---

## 🛠️ First-Time / Setup Reference (Already Configured)
```bash
git init
git branch -M main
git remote add origin https://github.com/abhijeet6060-code/sudhirroyclasses.git
git add .
git commit -m "Initial commit"
git push -u origin main
```
