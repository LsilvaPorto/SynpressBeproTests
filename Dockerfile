FROM cypress/factory
COPY . .
RUN npm i
RUN npm test
