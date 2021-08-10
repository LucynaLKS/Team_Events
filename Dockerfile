FROM node:16.6.1 as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:1.21.1
COPY --from=build app/dist/team-events /usr/share/nginx/html
EXPOSE 80
