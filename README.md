
# Password Generator
This repository contains a password generator application built with React.js and styled using Tailwind CSS. The application allows users to generate strong, random passwords based on selected criteria such as length, inclusion of numbers and characters along with the combination of UpperCase and LowerCase letters.

# Features

1. Customizable Length: Users can set the desired length of the password.
2. Character Options: Options to include numbers, symbols, uppercase letters, and lowercase letters.
3. Responsive Design: Responsive user interface built with Tailwind CSS.
4. Copy to Clipboard: Easily copy the generated password to the clipboard with a single click.

# Technologies Used

React.js: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for styling.

JavaScript: The programming language used for the logic of password generation.

HTML5: The standard markup language for creating web pages.

# Installation

1.Clone the Repository: 
    git clone https://github.com/yourusername/passwordGenerator.git
   
2. Navigate to the Project Directory:
   cd passwordGenerator

3. Install Dependencies:
   npm install

4. Update vite.config.js:

    import { defineConfig } from 'vite'

    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/

        export default defineConfig({
        plugins: [react()],
    })
# Usage

1. Start the Application:
   npm start dev

2. Open in Browser:
   Open your web browser and navigate to `http://localhost:5173`.

3. Generate Password:
   1. Set the desired password length using the slider.
   2. Select the character options (numbers, characters).
   3. Click the "Generate Password" button to create a new password.
   4. Click the "Copy to Clipboard" button to copy the generated password.