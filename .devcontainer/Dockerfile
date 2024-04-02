FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

ARG UID=501

RUN apt-get update && apt-get install -y \
    vim \
    && rm -rf /var/lib/apt/lists/*

# RUN chown -R $UID:0 /home/node/.npm

# USER $UID
# USER node
# ENV HOME=/home/node
# WORKDIR /workspaces/mysched-3.0
RUN npm install -g typescript --save-dev
# RUN npm install -g typescript