FROM mongo

MAINTAINER Tobias Schneck "tobias.schneck@consol.de", Christoph Deppisch "christoph.deppisch@consol.de"
ENV REFRESHED_AT 2015-07-14

ENV MONGO_PORT_27017_TCP_PORT 27000

CMD ["mongod", "--noprealloc", "--smallfiles","--port", "$MONGO_PORT_27017_TCP_PORT"]
EXPOSE $MONGO_PORT_27017_TCP_PORT