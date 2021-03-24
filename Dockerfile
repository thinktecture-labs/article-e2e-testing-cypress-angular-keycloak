FROM quay.io/keycloak/keycloak:12.0.4
WORKDIR /app

COPY demo_realm.json .

ENV KEYCLOAK_USER=admin
ENV KEYCLOAK_PASSWORD=admin
ENV KEYCLOAK_IMPORT=/app/demo_realm.json
