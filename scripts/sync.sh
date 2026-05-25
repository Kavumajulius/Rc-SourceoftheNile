
#!/bin/bash

# Configuration and Synchronization Script for RC Source of the Nile
# Usage: 
#   npm run git:setup -- <REPO_URL> <NAME> <EMAIL>
#   npm run git:push -- "Your commit message"

COMMAND=$1

if [ "$COMMAND" == "setup" ]; then
    REPO_URL=$2
    NAME=$3
    EMAIL=$4

    if [ -z "$REPO_URL" ]; then
        echo "❌ Error: Missing Repository URL."
        echo "Usage: npm run git:setup -- https://github.com/user/repo.git 'RC Source of the Nile' 'info@rcsourcethenile.org'"
        exit 1
    fi

    echo "⚙️ Configuring Git for $NAME..."
    [ ! -z "$NAME" ] && git config user.name "$NAME"
    [ ! -z "$EMAIL" ] && git config user.email "$EMAIL"

    echo "🔗 Connecting to Remote..."
    git remote remove origin 2>/dev/null
    git remote add origin "$REPO_URL"
    git branch -M main
    
    echo "✅ Setup complete. You can now use 'npm run git:push'."

elif [ "$COMMAND" == "push" ]; then
    MESSAGE=${2:-"Update from RC Source of the Nile Website"}

    echo "🚀 Starting Synchronization..."
    
    # Check if remote exists
    if ! git remote get-url origin > /dev/null 2>&1; then
        echo "❌ Error: Remote not configured. Run 'npm run git:setup' first."
        exit 1
    fi

    # Add, Commit, and Push
    git add .
    git commit -m "$MESSAGE"
    git push -u origin main

    echo "✨ Code pushed successfully to GitHub!"

else
    echo "❓ Unknown command. Use 'setup' or 'push'."
fi
