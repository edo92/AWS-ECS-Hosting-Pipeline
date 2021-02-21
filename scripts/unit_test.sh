
list=(
    # Create Network
    "docker network create proxy"

    # Run mongodb image
    "docker run --name mongo_test -p 27017:27017 --network proxy -d mongo"

    # Build Client & Backend for unit test
    "docker build -t backend_unit -f ./src/backend/Dockerfile.Test ./src/backend"
    "docker build -t client_unit -f ./src/client/Dockerfile.Test ./src/client"

    # Run Unit/Integration test
    "docker run --network proxy -e MONGO_HOST=mongo_test backend_unit"
    "docker run -e CI=true client_unit"

    # Remove unit containers
    "docker rmi image backend_unit --force"
    "docker rmi image client_unit --force"
)

for cmd in "${list[@]}"
do
    eval $cmd
done