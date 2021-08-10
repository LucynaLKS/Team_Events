FROM node:latest as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:latest
COPY --from=build app/dist/team-events /usr/share/nginx/html
EXPOSE 4200:80