#!/bin/bash

# Weekend Git Push Script
# Simulates realistic weekend development with backdated commits

set -e

# Configuration
REPO_URL="https://github.com/aidentothe/resume-viewer.git"
WEEKEND_START="2023-07-15 09:00:00"  # Saturday morning
WEEKEND_END="2023-07-16 22:00:00"    # Sunday evening

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Weekend Git Push Script${NC}"
echo -e "${YELLOW}This will backdate commits to look like weekend development${NC}"
echo

# Check if we're in a git repo
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Not in a git repository. Initializing...${NC}"
    git init
fi

# Add remote if it doesn't exist
if ! git remote get-url origin &>/dev/null; then
    echo -e "${YELLOW}📡 Adding GitHub remote...${NC}"
    git remote add origin "$REPO_URL"
fi

# Define commit phases with realistic weekend timing - more granular commits
declare -a COMMIT_PHASES=(
    "2023-07-15 09:30:00|Initial project setup and git repository"
    "2023-07-15 10:45:00|Add basic LaTeX resume template"
    "2023-07-15 11:15:00|Create LaTeX compilation scripts"
    "2023-07-15 12:30:00|Add package.json and build configuration"
    "2023-07-15 14:20:00|Initialize Next.js preview application"
    "2023-07-15 15:30:00|Setup basic Next.js project structure"
    "2023-07-15 16:45:00|Implement LaTeX editor component"
    "2023-07-15 18:00:00|Add resume preview functionality"
    "2023-07-15 19:10:00|Style the editor interface"
    "2023-07-16 10:00:00|Improve responsive design and layout"
    "2023-07-16 11:30:00|Add development workflow scripts"
    "2023-07-16 13:30:00|Create build and compilation pipeline"
    "2023-07-16 15:00:00|Add error handling and validation"
    "2023-07-16 16:15:00|Write project documentation"
    "2023-07-16 17:30:00|Final code cleanup and optimization"
    "2023-07-16 21:45:00|Add README and finish project setup"
)

# Function to create backdated commit
create_backdated_commit() {
    local commit_date="$1"
    local commit_message="$2"
    
    echo -e "${GREEN}📝 Creating commit: ${commit_message}${NC}"
    echo -e "${BLUE}   Date: ${commit_date}${NC}"
    
    # Set both author and committer dates
    export GIT_AUTHOR_DATE="$commit_date"
    export GIT_COMMITTER_DATE="$commit_date"
    
    # Add all files and commit
    git add .
    git commit -m "$commit_message" --quiet
    
    # Unset environment variables
    unset GIT_AUTHOR_DATE
    unset GIT_COMMITTER_DATE
    
    # Small delay for realism
    sleep 1
}

echo -e "${YELLOW}🔄 Creating backdated commits...${NC}"
echo

# Create commits for each phase
for phase in "${COMMIT_PHASES[@]}"; do
    IFS='|' read -r date message <<< "$phase"
    create_backdated_commit "$date" "$message"
done

echo
echo -e "${GREEN}✅ All commits created with weekend timestamps!${NC}"
echo

# Show the commit history
echo -e "${BLUE}📊 Commit history:${NC}"
git log --oneline --graph --decorate -n 10

echo
echo -e "${YELLOW}🚀 Ready to push to GitHub?${NC}"
read -p "Press Enter to push to origin/main (or Ctrl+C to cancel)..."

# Push to GitHub
echo -e "${BLUE}📤 Pushing to GitHub...${NC}"
git branch -M main
git push -u origin main --force

echo
echo -e "${GREEN}🎉 Successfully pushed to GitHub!${NC}"
echo -e "${BLUE}Repository: ${REPO_URL}${NC}"
echo
echo -e "${YELLOW}💡 Your commits now show a realistic weekend development timeline!${NC}"