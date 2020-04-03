FROM node:lts-alpine

LABEL version="1.0.0" description="API" maintainer="João Felipe<thecurrentuser@live.com>"

RUN apk add git

RUN cd ~ && mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

RUN git clone https://github.com/thecurrentuser/API-NodeJS-Express-Mongo.git

RUN echo "Copiando os fontes e removendo arquivos desnecessários"
RUN mv API-NodeJS-Express-Mongo/* .
RUN rm -rf API-NodeJS-Express-Mongo

USER node
COPY --chown=node:node . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]