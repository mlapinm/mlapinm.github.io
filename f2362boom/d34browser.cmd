set a=%1
browser-sync start --server --files "%a%*.css, %a%*.html, %a%*.js" --startPath "%a%d34regions.html"
