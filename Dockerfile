FROM node:14-slim


SHELL [ "/bin/bash", "-c" ]

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


ENV ENVIRONMENT=PRODUCTION
ENV HOST=localhost
ENV APP_HOST=http://localhost
ENV APP_PORT=3001
ENV DB_HOST=partners-db
ENV DB_ENGINE=mysql
ENV DB_PORT=3306
ENV DB_USER=partners
ENV DB_DATABASE=partners
ENV DB_PASSWORD=partners
ENV NODE_ENV=production

EXPOSE 3001

CMD npm start