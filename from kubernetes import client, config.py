from kubernetes import client, config

def scale_deployment(name, namespace, replicas):
    config.load_kube_config()

    api = client.AppsV1Api()

    # Update the replicas in the spec
    body = {
        "spec": {
            "replicas": replicas
        }
    }

    # Call the Kubernetes API to scale the deployment
    api.patch_namespaced_deployment(name=name, namespace=namespace, body=body)

scale_deployment(name="myapp-deployment", namespace="default", replicas=5)