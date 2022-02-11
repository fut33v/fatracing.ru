FROM node:17.3 AS node

MAINTAINER Denis Bolotov 'deker101@gmail.com'
#ENV NODE_ENV=production
WORKDIR /app

COPY . .

RUN npm install parcel node-fetch
RUN npm run build
RUN npm run export

FROM python:3.10 
WORKDIR /app
#COPY . .
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
COPY --from=node /app/ /app/
EXPOSE 8082
CMD ["python", "fatracing.py"]