# Utiliza una imagen base con Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json (o yarn.lock)

COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . /app

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que se ejecutará la aplicación (ajústalo según sea necesario)
EXPOSE 5173

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["npm", "run", "dev"]
