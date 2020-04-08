cd ./dashboard
npm run build
git add .
git commit -m "create docs and ready to deploy"
git push origin master
echo ">> frontend deployed successfully"
git add .
git commit -m "deploy"
git push origin master