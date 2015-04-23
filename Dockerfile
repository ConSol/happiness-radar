FROM google/nodejs

MAINTAINER tobias.schneck@consol.de, christoph.deppisch@consol.de

WORKDIR /app
ADD package.json /app/
RUN npm install
ADD . /app

CMD []
ENTRYPOINT ["/nodejs/bin/npm", "start"]
