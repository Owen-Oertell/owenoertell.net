FROM node

WORKDIR /
COPY . .

RUN npm install
RUN npm ci --only=production

EXPOSE 8080
CMD ["node","app.js"]