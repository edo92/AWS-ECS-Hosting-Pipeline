
command_list=(
    # Built e2e images
    "docker build -t backend_e2e -f ./src/backend/Dockerfile ./src/backend"
    "docker build -t client_e2e -f ./src/client/Dockerfile ./src/client"
    "docker build -t nginx_e2e -f ./src/nginx/Dockerfile ./src/nginx"

    # Run images
    "docker run --network proxy -p 80:80 -d nginx_e2e"
    "docker run --network proxy -p 3001:3001 -d backend_e2e"
    "docker run --network proxy -p 3000:3000 -d client_e2e"

    # Run Cypress
    "node_modules/.bin/cypress run --headed "

    # Remove e2e containers
    "docker rmi image backend_e2e --force"
    "docker rmi image client_e2e --force"
)

for cmd in "${command_list[@]}"
do
    eval $cmd
done