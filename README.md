# ContainerFlow
A scalable backend server using node, mongodb, redis and ngnix hosted using docker and kubernetes

# Environment Variables

```ENV
PORT=4000
NODE_ENV=development
MONGO_USER=shubham
MONGO_PASSWORD=mypassword
MONGO_IP=mongo
SESSION_SECRET=secret
MONGO_INITDB_ROOT_USERNAME=shubham
MONGO_INITDB_ROOT_PASSWORD=mypassword

REDIS_PORT=6379
REDIS_IP=redis
```

# docker build
```bash
make build
```

#### or

# kubernetes deployment
```bash
make deploy
```


