npm init -y

npm install typescript ts-node-dev express express-validator express-async-errors mongooses @types/express @types/mongoose cookie-session @types/cookie-session  jsonwebtoken @types/jsonwebtoken

tsc --init

docker build -t raindropplus/auth .

docker push raindropplus/auth

skaffold dev

C:\Windows\System32\drivers\etc

thisisunfafe



kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
