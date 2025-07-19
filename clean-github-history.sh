#!/bin/bash

# GitHub History Cleaner
# Removes all commit history and starts fresh with 2023 commits

set -e

REPO_URL="https://github.com/aidentothe/resume-viewer.git"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${RED}🗑️  GitHub History Cleaner${NC}"
echo -e "${YELLOW}⚠️  This will PERMANENTLY delete all commit history!${NC}"
echo -e "${YELLOW}⚠️  Only the current files will remain, with new 2023 commits${NC}"
echo

read -p "Are you absolutely sure? Type 'yes' to continue: " confirm
if [ "$confirm" != "yes" ]; then
    echo "Aborted."
    exit 0
fi

echo -e "${BLUE}🔄 Starting history cleanup...${NC}"

# Step 1: Create orphan branch (no history)
echo -e "${YELLOW}📝 Creating orphan branch...${NC}"
git checkout --orphan temp-branch

# Step 2: Stage all current files
echo -e "${YELLOW}📁 Staging all files...${NC}"
git add -A

# Step 3: Create initial commit (will be overwritten by weekend script)
echo -e "${YELLOW}💾 Creating temporary commit...${NC}"
git commit -m "Temp commit - will be replaced"

# Step 4: Delete old main branch
echo -e "${YELLOW}🗑️  Removing old main branch...${NC}"
git branch -D main 2>/dev/null || true

# Step 5: Rename current branch to main
echo -e "${YELLOW}🔄 Renaming branch to main...${NC}"
git branch -m main

# Step 6: Reset to remove the temp commit
echo -e "${YELLOW}↩️  Resetting to clean state...${NC}"
git reset --soft HEAD~1

echo -e "${GREEN}✅ History cleaned! Ready for weekend script.${NC}"
echo
echo -e "${BLUE}Next steps:${NC}"
echo -e "${YELLOW}1. Run: ./weekend-push.sh${NC}"
echo -e "${YELLOW}2. This will create 16 backdated commits from July 2023${NC}"
echo -e "${YELLOW}3. Force push will overwrite GitHub completely${NC}"
echo