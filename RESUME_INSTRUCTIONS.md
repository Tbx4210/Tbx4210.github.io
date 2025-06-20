# Resume Download Feature Instructions

## What Was Added

✅ **Homepage**: Added a "Download Resume" button alongside existing "My Portfolio" and "Contact Me" buttons
✅ **About Page**: Added both "Download My Resume" and "View Resume" buttons after the profile section
✅ **Styling**: Added consistent button styling that matches your existing design
✅ **Placeholder File**: Created a placeholder resume.pdf in the public folder

## How to Add Your Actual Resume

1. **Replace the placeholder file**:
   - Delete the current `public/resume.pdf` 
   - Add your actual resume PDF file as `public/resume.pdf`

2. **Customize the download filename** (optional):
   - In `src/pages/home/index.js`, change `"YourName_Resume.pdf"` to your preferred filename
   - In `src/pages/about/index.js`, change `"YourName_Resume.pdf"` to your preferred filename

3. **Test the feature**:
   - Start your development server: `yarn start`
   - Navigate to the homepage and about page
   - Test both the download and view functionality

## File Locations

- **Homepage button**: `src/pages/home/index.js`
- **About page buttons**: `src/pages/about/index.js`
- **Resume file**: `public/resume.pdf`
- **Button styling**: `src/pages/home/style.css`

## Button Features

- **Download button**: Downloads the resume with a custom filename
- **View button**: Opens the resume in a new tab for viewing
- **Responsive design**: Buttons adapt to different screen sizes
- **Consistent styling**: Matches your existing button design

## Deploy Your Changes

After adding your resume:
1. `yarn build` - Build the project
2. `yarn deploy` - Deploy to GitHub Pages

Your resume will be available at: `https://yourusername.github.io/resume.pdf` 