FROM node:8.2.1

WORKDIR /app

RUN npm install nodemon -g

COPY package.json /app/package.json
RUN npm install

COPY main.js /app

EXPOSE 3006

CMD ["npm", "start"]