# Kubernetes

## Nodes

### `Master node` 
Runs Kubernetes processes including the API server.

- `API server` is the entry point to the cluster.
- `Controller manager` keeps overview of what is happening in the cluster.
- `Scheduler` works out which worker node may need to start a new process based on resources etc.
- `etcd` key value database of the state of the cluster.

### `Worker node` 
Runs kubelet process which allows it to communicate with master node as well as container service i.e. docker.

## Virtual network
Network housing all nodes and allows them to work as a single machine.

## Pod
Pod is the lowest level of Kubernetes. Usually represents 1 application container. Each pod gets an internal IP address. For example a nodejs pod would now be able to communicate with a database pod.

## Service
Provides a permanent IP address. In the event of a Pod going down it's IP may change. In order for other pods to communicate with another pod they can use service to ensure consistent IP.

## Ingress
Ingress maps domain names to specific IP addresses of Pods.

## Config map
Allows you to set config variables which can be changed on the fly.

## Secret
Used to store secrets.

## Volume
Attaches storage to your pod. This allows you to persist DB data when Pods are restarted.


# Questions
- Where is the master node?
- Does load balancer go in front of several master nodes?