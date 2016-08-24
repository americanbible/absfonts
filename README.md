# Run locally

`npm install`

and then

`grunt`

We're not using `jekyll serve` in this instance so that we can use grunt and livereload.


# To add a new font you will need to

1. add a `fontname.md` to the root and fill out the front matter
2. create an include file and name it `head-fontname.html` and put inside the `_includes` directory.
3. put any necessary css (@fontface) rules inside it. See `head-gotham.html` for examples
