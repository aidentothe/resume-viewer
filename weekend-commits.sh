#!/bin/bash

# Create 10 realistic weekend commits in 2023

set -e

REPO_URL="https://github.com/aidentothe/resume-viewer.git"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}🚀 Creating 10 weekend commits for July 2023${NC}"

# Function to create backdated commit
create_commit() {
    local date="$1"
    local message="$2"
    
    echo -e "${GREEN}📝 ${message}${NC}"
    echo -e "${YELLOW}   ${date}${NC}"
    
    export GIT_AUTHOR_DATE="$date"
    export GIT_COMMITTER_DATE="$date"
    
    git add .
    git commit -m "$message" --allow-empty --quiet
    
    unset GIT_AUTHOR_DATE
    unset GIT_COMMITTER_DATE
    sleep 0.5
}

# Reset to clean state
git reset --soft HEAD~1 2>/dev/null || true

# Create 10 commits across the weekend
create_commit "2023-07-15 09:30:00" "Initialize resume project structure"
create_commit "2023-07-15 11:15:00" "Add LaTeX resume template and compilation"
create_commit "2023-07-15 13:20:00" "Setup Node.js build environment"
create_commit "2023-07-15 15:45:00" "Create Next.js preview application"
create_commit "2023-07-15 17:30:00" "Implement LaTeX editor component"
create_commit "2023-07-15 19:10:00" "Add real-time preview functionality"
create_commit "2023-07-16 10:00:00" "Style editor interface and layout"
create_commit "2023-07-16 13:30:00" "Add development workflow scripts"
create_commit "2023-07-16 16:15:00" "Write documentation and README"
create_commit "2023-07-16 21:45:00" "Final cleanup and project completion"

echo
echo -e "${GREEN}✅ Created 10 commits across July 15-16, 2023!${NC}"
echo

# Show history
git log --oneline --graph -10

echo
echo -e "${YELLOW}Push to GitHub? (y/n)${NC}"
read -r response
if [[ "$response" =~ ^[Yy]$ ]]; then
    git remote add origin "$REPO_URL" 2>/dev/null || true
    git branch -M main
    git push -u origin main --force
    echo -e "${GREEN}🎉 Pushed to GitHub!${NC}"
fi