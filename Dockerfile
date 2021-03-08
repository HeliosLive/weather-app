### THIS DOCKER FILE LITERALLY IS AN EXAMPLE! NOT TESTED YET.. PROBABLY COMPLETELY TRUE BUT STILL BE CAUTIOUS ###


### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:10-alpine as builder

COPY package.json package-lock.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build

RUN npm ci && mkdir /weather-app && mv ./node_modules ./weather-app

WORKDIR /weather-app

COPY ./ ./

## Build the angular app in production mode and store the artifacts in dist folder

RUN npm run build:prod

### STAGE 2: Setup ###

FROM nginx:1.14.1-alpine

## Copy our default nginx config
COPY nginx.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /weather-app/dist/weather-app /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

