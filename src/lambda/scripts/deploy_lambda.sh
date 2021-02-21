#!/bin/bash

set -e 

for i in src/* ;
do
    file=${i#*src/}
    # copy package.json from src/file to dist/file
    eval cp -r src/$file/package.json ./dist/$file

    # inside dist/file install and zip each dir
    eval cd dist/$file && {
        npm install --only=prod
        zip -r ../../$file.zip *
        cd ../..
    }
    
    # Upload/Update lambda
    eval aws lambda update-function-code --function-name=$file --region=us-east-2 --zip-file=fileb://$file.zip 
done