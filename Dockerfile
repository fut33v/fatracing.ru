FROM node:17.5 AS node

MAINTAINER Denis Bolotov 'deker101@gmail.com'
#ENV NODE_ENV=production
WORKDIR /app

COPY *.js .
COPY *.json .
RUN npm install parcel node-fetch
COPY components components
COPY lib lib
COPY pages pages
COPY public public
COPY styles styles
COPY _posts _posts
RUN npm run build
RUN npm run export

FROM python:3.10 
WORKDIR /app
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
COPY --from=node /app/out /app/out
COPY *.py .
EXPOSE 8082
CMD ["python", "fatracing.py"]