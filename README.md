# Legal App DevOps Project

This is a beginner-friendly DevOps project built using Ruby, Docker, GitHub Actions, Docker Hub, and Kubernetes.

## Tools Used
- Ruby
- Sinatra
- Git
- GitHub
- Docker
- Docker Hub
- GitHub Actions
- Kubernetes
- VS Code 
## Run Locally
```bash
docker build -t legal-app .
docker run -p 4567:4567 legal-app

## Project Structure

```text
devops-rails-legal-app22/
│
├── app.rb
├── Gemfile
├── Dockerfile
├── .dockerignore
├── .gitignore
├── README.md
│
├── models/
│   └── case.rb
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
│
└── .github/
    └── workflows/
        └── ci.yml
