#!/bin/bash

echo "Testing LazySlide website setup..."

# Check if required files exist
files=(
  "package.json"
  "tsconfig.json"
  "next.config.js"
  "postcss.config.js"
  "src/pages/_app.tsx"
  "src/pages/index.tsx"
  "README.md"
  ".gitignore"
)

missing=0
for file in "${files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "❌ Missing file: $file"
    missing=$((missing+1))
  else
    echo "✅ Found file: $file"
  fi
done

# Check if required directories exist
directories=(
  "src"
  "src/pages"
  "public"
  "public/images"
)

for dir in "${directories[@]}"; do
  if [ ! -d "$dir" ]; then
    echo "❌ Missing directory: $dir"
    missing=$((missing+1))
  else
    echo "✅ Found directory: $dir"
  fi
done

# Check package.json for required dependencies
dependencies=(
  "@mantine/core"
  "@mantine/hooks"
  "@tabler/icons-react"
  "next"
  "react"
  "react-dom"
)

for dep in "${dependencies[@]}"; do
  if ! grep -q "\"$dep\":" package.json; then
    echo "❌ Missing dependency: $dep"
    missing=$((missing+1))
  else
    echo "✅ Found dependency: $dep"
  fi
done

# Summary
if [ $missing -eq 0 ]; then
  echo "✅ All required files, directories, and dependencies are present."
  echo "✅ Setup is complete. You can now run 'npm install' and 'npm run dev' to start the development server."
else
  echo "❌ Missing $missing files, directories, or dependencies. Please check the output above."
fi