---
sidebar_position: 4
---

# Introduction

Docker is an open-source platform that simplifies the process of building, shipping, and running applications in containers. Containers package an application with its dependencies, ensuring consistent behavior across different environments. Docker allows for efficient resource usage, rapid deployment, and streamlined development workflows, making it popular for both development and production environments.


## Why Docker?

Docker was created to address the challenges of deploying and running applications consistently across different environments,
*  Addresses "dependency hell" by ensuring consistent application deployment across environments
*  Packages applications and dependencies into lightweight, portable containers
*  Isolates applications to reduce dependency conflicts and enable easier collaboration
*  Improves efficiency in development, testing, and deployment processes

## Concepts

### Docker Image

A Docker image is like a recipe for making a running environment for an application. It usually starts with a Linux distribution as a base layer and includes everything needed, like the app itself, required tools, and settings. These images are made using a script called a Dockerfile. You can also download ready-made Docker images from online sources like Docker Hub. These pre-built images are created and maintained by others and offer ready-to-use setups for different apps, languages, and tools, often built on top of a specific Linux distribution.

### Docker Container

A Docker container, on the other hand, is a running instance of a Docker image. Containers provide an isolated environment in which the application can execute consistently across different systems. Containers are created from images and can be started, stopped, and managed using various Docker commands.


## Quick tutorial

```bash
docker pull nginx:latest
```

```bash
docker images
```

```bash
docker ps
```

```bash
docker build
```

```bash
docker exec
```

```bash
docker run
```


Explore the following

* Ensuring the docker daemon is running
* Two ways to build an image locally
	* Explore how the image is created with different layers
* DockerHub
	* Exploration of docker tags
* How to delete an image
* Building an image from a Dockerfile
	* Basic docker keywords: FROM COPY CMD RUN
	* Naming docker images
* How to run an image as a container
	* Persistent vs one-shot containers
* Running containers, stopping containers
	* detached mode
* Exec/Bash into a container
* Docker-compose
* Port forwarding

:::info
In computer science, programs that run and exit are generally referred to as "batch" or "non-persistent" programs, whereas programs that constantly run until they are terminated are called "persistent," "long-running," or "daemon" processes.

There are various terms used to describe the two types of programs. Here's a list of some common terms for each type:

Programs that run and exit:

1.  Batch programs
2.  Non-persistent programs
3.  One-shot programs
4.  Short-lived programs
5.  Ephemeral programs

Programs that constantly run until terminated:

1.  Persistent programs
2.  Long-running programs
3.  Daemon processes
4.  Background processes
5.  Services (in the context of operating systems)

	These terms may be used interchangeably to some extent, and their specific meanings might vary slightly depending on the context in which they are used. However, they generally convey the same idea of whether a program runs once and exits or continues running until it is explicitly stopped. 
:::