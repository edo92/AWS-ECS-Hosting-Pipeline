
list=(
    # Build production images
    "docker build -t backend -f ./src/backend/Dockerfile ./src/backend"
    "docker build -t client -f ./src/client/Dockerfile ./src/client"
    "docker build -t nginx -f ./src/nginx/Dockerfile ./src/nginx"
)

for cmd in "${list[@]}"
do
    eval $cmd
done