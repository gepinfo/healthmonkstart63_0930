module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "medicationmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart63-0930-medicationmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8018",
                    "protocol": "tcp",
                    "hostPort": "8018"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart63.local:27017/healthmonkstart63_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart63.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart63.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart63.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart63.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart63.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart63.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart63.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart63.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart63"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart63",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "medicationmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart63-0930-medicationmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8018",
                    "protocol": "tcp",
                    "hostPort": "8018"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart63.local:27017/healthmonkstart63_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart63.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart63.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart63.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart63.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart63.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart63.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart63.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart63.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart63"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart63",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "prescriptionmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart63-0930-prescriptionmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8020",
                    "protocol": "tcp",
                    "hostPort": "8020"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart63.local:27017/healthmonkstart63_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart63.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart63.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart63.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart63.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart63.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart63.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart63.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart63.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart63"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart63",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "prescriptionmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart63-0930-prescriptionmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8020",
                    "protocol": "tcp",
                    "hostPort": "8020"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart63.local:27017/healthmonkstart63_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart63.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart63.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart63.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart63.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart63.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart63.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart63.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart63.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart63"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart63",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "medicationmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart63-0930-medicationmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8022",
                    "protocol": "tcp",
                    "hostPort": "8022"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart63.local:27017/healthmonkstart63_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart63.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart63.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart63.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart63.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart63.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart63.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart63.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart63.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart63"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart63",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "mealsmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart63-0930-mealsmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8022",
                    "protocol": "tcp",
                    "hostPort": "8022"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart63.local:27017/healthmonkstart63_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart63.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart63.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart63.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart63.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart63.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart63.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart63.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart63.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart63"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart63",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "prescriptionmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart63-0930-prescriptionmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8024",
                    "protocol": "tcp",
                    "hostPort": "8024"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart63.local:27017/healthmonkstart63_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart63.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart63.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart63.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart63.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart63.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart63.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart63.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart63.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart63"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart63",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "dishmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart63-0930-dishmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8024",
                    "protocol": "tcp",
                    "hostPort": "8024"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart63.local:27017/healthmonkstart63_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart63.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart63.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart63.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart63.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart63.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart63.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart63.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart63.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart63"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart63",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "mealsmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart63-0930-mealsmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8024",
                    "protocol": "tcp",
                    "hostPort": "8024"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart63.local:27017/healthmonkstart63_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart63.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart63.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart63.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart63.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart63.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart63.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart63.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart63.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart63"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart63",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "dishmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart63-0930-dishmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8027",
                    "protocol": "tcp",
                    "hostPort": "8027"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart63.local:27017/healthmonkstart63_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart63.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart63.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart63.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart63.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart63.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart63.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart63.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart63.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart63"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart63",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "healthmonkstart63",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "healthmonkstart630",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
