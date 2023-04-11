.PHONY: build dev stop k8s-start k8s-stop

build:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

stop:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v

k8s-start:
	kubectl apply -f kubernetes/duo-server/duo-server.yml    
	kubectl apply -f kubernetes/mongodb/mongo.yml
	kubectl apply -f kubernetes/redis/redis.yml

k8s-stop:
	kubectl delete -f kubernetes/duo-server/duo-server.yml    
	kubectl delete -f kubernetes/mongodb/mongo.yml
	kubectl delete -f kubernetes/redis/redis.yml
