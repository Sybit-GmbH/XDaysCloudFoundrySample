# XDaysCloudFoundrySample

Sybit X-Days Cloud Foundry Example

## BTP Subaccount

sybit-dev2

## Static File Buildpack

cd into StaticFile folder and run:

```bash
cf p xdays01 -m 64M
```

## NodeJS Buildpack

cd into NodeJS folder

### Install dependencies
  
```bash
npm install
```

### Create Logging Service Instance
  
```bash
cf create-service application-logs lite logs
```

### Push application to CloudFoundry

```bash
cf push
```

## Docker Buildpack

### Build Docker Image

```bash
docker build -t marluz/x_days_cloud_foundry_sample .
```

### Run Docker local

```bash
docker run -d -p3000:3000 marluz/x_days_cloud_foundry_sample:latest
```

### Push Docker Image

```bash
docker push marluz/x_days_cloud_foundry_sample:latest
```