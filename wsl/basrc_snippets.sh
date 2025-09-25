gitpr(){
    url=$(git config --get remote.origin.url | sed 's/:/\//; s/git@/https:\/\//; s/\.git$//')
    branch=$(git rev-parse --abbrev-ref HEAD)
    echo "$url/compare/$branch?expand=1"
    echo "$url/compare/$branch?expand=1" | clip.exe
}

gitc() {
    command git add .
    command git commit -m "$1"
    command git push

    gitpr
}

r() {
    reset
}

c() {
    clear
}

open() {
    explorer.exe "$(wslpath -w "${1:-.}")"
}