FROM node:11-alpine
WORKDIR /daweb
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "server"]