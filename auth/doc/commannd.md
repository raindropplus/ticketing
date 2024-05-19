npm init -y

npm install typescript ts-node-dev express @types/express

tsc --init

docker build -t raindropplus/auth .

docker push raindropplus/auth

skaffold dev

C:\Windows\System32\drivers\etc