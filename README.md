# Core 2 Interaction: Lab

Spring 2024

## Page setup

This repo has a ["convention over configuration"](https://en.wikipedia.org/wiki/Convention_over_configuration) setup. 

Pages are divided into two parts: `index.html` and `show.html`

`index.html` is a placeholder file that essentially exists only to load stylesheets, scripts, etc.
> I wanted to figure out dynamic routing, but couldn't. Perhaps in the future. Note that if you make new directories, update the paths accordingly (ex: `../stylesheets`)

`show.html` is the actual content of the page. It is inserted into the <body> of `index.html` (specifically, a `<div>` called `.site-container`)

## Workflow

The easiest thing is to copy/paste a `template` folder from the desired directory. Output your content to HTML and name it `show.html`, being aware that it will be inserted inside a `<body>` context. So if you are exporting HTML from Notion, for instance, get rid of all the <head> output and everything not inside the `<body>`.

You can also do something like write a markdown file and convert it to HTML with something like [markedjs](https://marked.js.org/)

## Weekly Agendas

Previous weeks can be accessed at: `/home/week-#`. By default, `/home` will serve the upcoming week, changing automatically on Monday at 9am. Make sure these files are named `/week-1`, `/week-2`, etc. for this to work properly.

## Reference

Output markdown file (`lecture.md`) into HTML file (`show.html`) \
`marked -i lecture.md -o show.html`
