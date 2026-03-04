FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy our static app files
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY compiler.js /usr/share/nginx/html/
COPY lessons.js /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# Custom nginx config for SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
