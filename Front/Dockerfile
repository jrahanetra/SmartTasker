# DECLARATION DE L'IMAGE DE BASE (FROM nomIMAGE:VERSION)
FROM node:22
WORKDIR /Front

COPY package*.json ./

RUN npm install

COPY . ./

CMD [ "npm","run", "dev" ]