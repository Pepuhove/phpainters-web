FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY style.css .
COPY script.js .
COPY sitemap.xml .
COPY google82d31c59fed171d4.html .
COPY images ./images

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]