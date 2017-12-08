# builtwithbulma
http://builtwithbulma.github.io

![Image of BuiltWithBulma](./assets/Screenshot_of_website.png)

A website containing projects built with [Bulma](http://bulma.io), a CSS framework.

**Goal:** Build a website similar to [http://builtwithbootstrap.com](http://builtwithbootstrap.com) but ad-free and for Bulma instead of Bootstrap. 

**Purpose:** Let there be one place where people can browse projects built with Bulma to see how others have used Bulma and to obtain inspiration for their own projects.

## How do I add my project?

1. Fork the repository

2. Add your project to `index.html` by listing it under the rest
```html
<bulma-project 
title="Title of your project" 
link="https://www.example.com" 
picture="picture_of_project.jpg">
Short description of your project
</bulma-project>
```
**Please place an image/screenshot of your project in the `assets/projects/` folder along with the rest.**
It's highly recommended you compress your image (https://compressor.io/compress).

3. Make a pull request

4. Wait for the pull request to be accepted and then your project will be up!