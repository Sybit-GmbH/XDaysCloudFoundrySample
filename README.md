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
