FROM node:14-alpine
WORKDIR /src/server
ARG PORT=3000
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production --silent
COPY . .
RUN npm run build
ENV PORT=${PORT}
EXPOSE ${PORT}
ENV MONGO_URL=mongodb://db
CMD ["npm", "run", "start:prod"]