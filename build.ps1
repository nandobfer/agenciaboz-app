yarn build
Write-Output 'Uploading build to server'
scp -r -P 22022 build/* root@agenciazop.com.br:/home/agenciaboz/app.agenciaboz.com.br/
ssh -p 22022 root@agenciazop.com.br "chown -R agenciaboz:agenciaboz /home/agenciaboz/app.agenciaboz.com.br/*"