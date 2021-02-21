
log(){
    tput setaf 2; 
    echo '  ' 🌎  "nodemon is runing"   🚀'
    ';
};

# Get ENVs from .env file
envlist=''
while IFS="" read -r p || [ -n "$p" ]
do
  envlist+="$p "
done < .env


log; # print log

# Run nodejs file with nodemon inject evironmental variables
command_run_dev="nodemon -q -e ts -w ./src -x $envlist ts-node src/index.ts";

# If output includes warning or error make it colored
$command_run_dev |
  while IFS= read -r line
  do
    if [[ $line == *"warning"* || $line == *"warnings"* ]]; then
        tput setaf 3; 
        echo $line
    elif [[ $line == *"error"* ]]; then
        tput setaf 1;
        echo $line
    else
        tput setaf 2; 
        echo  $line
    fi
  done