

 frontend
 - npm create vite@latest
 - select framework: react
 - select typescript
 -  customize configuration (optional)
 - npm install
 - npm run dev

 Tailwind css
 - npm install -D tailwindcss postcss autoprefixer or npm add -D tailwindcss@latest autoprefixer@latest
 - npx tailwindcss init -p
 - configure tailwind paths: tailwind.config.js
 - add tailwind directives

 Shadcn/ui
- Edit tsconfig.json file
- Update vite.config.ts: npm i -D @types/node
- npx shadcn-ui@latest init
- Configure components.json

```bash
Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › src/index.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes (no)
```
- start adding components: npx shadcn-ui@latest add 'component'

