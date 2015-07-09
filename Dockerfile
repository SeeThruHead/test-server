FROM node
COPY . /src
RUN cd /src; npm install
EXPOSE 8080
CMD ["npm", "start"]