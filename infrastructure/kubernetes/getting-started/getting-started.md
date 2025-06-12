# getting started
https://www.youtube.com/watch?v=s_o8dwzRlu4

52:39

## Commands
- `minikube start --driver docker`
- `minikube status` logs the current state of k8s services.
- `kubectl get node` logs state of all nodes in the cluster.

## Deploying simple app

### Config kind
Different types of config are demarked by the property kind. Examples of different kind include `ConfigMap`, `Secret`, `Deployment` and `Service`.

### Deployment
More complex than other kind.

Under the spec there is a template and then a nested spec. This is the spec of a single pod within the cluster.

## Labels
K8s convention is to use `app` as a key when labeling applications.

## Notes
Three dashes is a separator in standard .yaml files.
