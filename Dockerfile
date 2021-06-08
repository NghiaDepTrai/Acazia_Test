# Prepare nginx
FROM nginx:1.19-alpine
#for performance issue, copy already build/dist from build ci/cd instead of build on node docker
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY build/dist /usr/share/nginx/html

# Fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
