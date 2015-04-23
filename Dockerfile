FROM google/nodejs

MAINTAINER Tobias Schneck "tobias.schneck@consol.de", Christoph Deppisch "christoph.deppisch@consol.de"
ENV REFRESHED_AT 2015-04-23
WORKDIR /app
ADD package.json /app/
RUN npm install
ADD . /app

CMD []
ENTRYPOINT ["/nodejs/bin/npm", "start"]
