FROM node:latest
WORKDIR /usr/src/client
COPY package.json package-lock.json .
# RUN npm install -g npm
RUN npm install
RUN npm run build-dev
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# Build
# docker build -t client .

# Khởi tạo và chạy container từ image client
# docker run -dt -p 3000:3000 --name client client:latest

# Xem các file được lưu trong container
# docker exec -it -u root client /bin/bash
