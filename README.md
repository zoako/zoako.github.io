**WIP: deploying first, readme later**
jekyll build
cp -rf _site/* ../cbwebbackup/
cd ../cbwebbackup
git add -A .
git commit -a -m "fixing stuff"
git push origin master
cd ../colorballsweb

# zoako.gitlab.io
This is the source content for a Jekyll generated static site.
When the continuous integration (CI) works as intended, this should have our website up on
- http://zoako.gitlab.io/colorballsweb/
- http://colorballsgame.com/
- http://zoako.com/
The above domains should point to the static pages output by Gitlab Pages output.
When the CI fails, follow the instructions below.

# zoako.github.io
This repo was created as a backup to be used with GitHub pages when our Gitlab fails. Unfortunately we depend on a custom plugin for generation of our website, so we cannot use GitHub pages 

## To deploy to GitHub:
- Push the output of the gitlab website jekyll generator to this repo. Do not link the same repo as we depend on the 