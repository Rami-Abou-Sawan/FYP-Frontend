# ESIB2022-FrontEnd

This frontend application is developed using ReactJs. This frontend application is running behind an Apache Web Server, deployed on our virtual machine. It can be accessed using https://cloudcomputingpatterns.com

To be able to run this project, you will need NodeJs and NPM installed on your machine.

To run the web application behind an apache web server, follow these steps:

git clone https://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@github.com/assix/ESIB2022-FrontEnd.git
rm -f ~/ESIB2022-FrontEnd/package-lock.json
cd ESIB2022-FrontEnd
npm install --save --legacy-peer-deps
npm run build
sudo rm -rf /var/www/FYP-Frontend/build 
sudo mv build /var/www/FYP-Frontend/ 
sudo chown -R www-data:www-data /var/www/FYP-Frontend/ 
sudo chmod -R 755  /var/www/FYP-Frontend/ 
sudo systemctl restart apache2