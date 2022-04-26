# ESIB2022-FrontEnd

This frontend application is developed using ReactJs. This frontend application is running behind an Apache Web Server, deployed on our virtual machine. It can be accessed using https://cloudcomputingpatterns.com

Prerequisites:
- To be able to run this project, you will need NodeJs and NPM installed on your machine.

In order to simply run the web application, follow these steps:

- First Clone the repo using the command: git clone https://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@github.com/assix/ESIB2022-FrontEnd.git
- Then delete the package-lock.json file using the command: rm -f ~/ESIB2022-FrontEnd/package-lock.json
- Go into the cloned directory: cd ESIB2022-FrontEnd
- Install the dependencies: npm install --save --legacy-peer-deps
- Run the application: npm run 

By default, the web application will run on port 3000.

To run the web application behind our apache web server, follow these steps:

- First Clone the repo using the command: git clone https://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@github.com/assix/ESIB2022-FrontEnd.git
- Then delete the package-lock.json file using the command: rm -f ~/ESIB2022-FrontEnd/package-lock.json
- Go into the cloned directory: cd ESIB2022-FrontEnd
- Install the dependencies: npm install --save --legacy-peer-deps
- Run the build: npm run build
- Remove the old build: sudo rm -rf /var/www/FYP-Frontend/build 
- Move the new build: sudo mv build /var/www/FYP-Frontend/ 
- Give enough permissions for apache: sudo chown -R www-data:www-data /var/www/FYP-Frontend/ 
- Give enough permissions for apache: sudo chmod -R 755  /var/www/FYP-Frontend/ 
- Restart apache to apply the changes: sudo systemctl restart apache2