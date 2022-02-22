FROM node:14-alpine
WORKDIR /src/server
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production --silent
COPY . .
RUN npm run build
EXPOSE 5000
ENV MONGO_URL=mongodb://db
CMD ["npm", "run", "start:prod"]