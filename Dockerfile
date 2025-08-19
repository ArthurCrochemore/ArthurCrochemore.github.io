FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build the project for production
RUN npm run build

# Define the output directory for deployment
CMD ["sh", "-c", "cp -r /app/dist /output && echo 'Build complete. Files are in /output'"]
