FROM squidfunk/mkdocs-material:8.5.11 as build

COPY mkdocs.yml /docs/mkdocs.yml
COPY docs /docs/docs
RUN mkdocs build

FROM nginx:stable-alpine

COPY --from=build /docs/site/ /usr/share/nginx/html
