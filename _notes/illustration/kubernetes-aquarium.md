---
title: The Kubernetes Aquarium
img: /assets/images/k8s-aquarium/container.png
ext: https://medium.com/@AnneLoVerso/the-kubernetes-aquarium-6a3d1d7a2afd
weight: 100
tags: illustrations
published: December 2020
---

{% Slide src: "/assets/images/k8s-aquarium/01-fish.png" alt: "fish" %} {{
"This is an app.
It’s a whole functional unit on its own, but it can’t survive on its own. It needs a correctly provisioned environment.
This fish app in particular needs water in order to be able to live."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/02-shark.png" alt: "fish getting eaten by shark" %} {{
"We could toss it in the ocean alongside all the other random apps and programs out there.
But it would have to compete for resources and deal with everything else in the ocean.
It doesn’t have its own dedicated space and resources."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/03-containers.png" alt: "fish and shark in tanks" %} {{
"This is why we containerize.
Using a tool like Docker, we can provision containers for our apps to separate them and give them their own environment."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/04-pod.png" alt: "fish in tank in Pod box" %} {{
"This is a Pod, the basic building block of Kubernetes.
It’s just a box in which we place our containerized app. It’s given a label so that Kubernetes knows what it is and how to reference it.
Now that our fish is safely provisioned in Pod, it is able to be managed by the Kubernetes aquarium." 
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/05-resources.png" alt: "fish in tank with water filter" %} {{
"Sometimes, apps need resources, like memory and CPU.
Here, our fish tank container requires 60W of power to use its water filter."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/06-room.png" alt: "room with both outlets taken" %} {{
"There are different rooms in the aquarium that we could put the tank.
Here, this first room here has no more resources available — both power outlets are already in use."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/07-nodes.png" alt: "room with wrong power outlet" %} {{
"This second room has outlets available, but the room lets us know its outlets only provide 40W of power, and we need 60 watts for our fish tank.
These rooms are Nodes in our Kubernetes cluster — workers on which pods are running."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/08-director.png" alt: "director deciding on rooms" %} {{
"Kubernetes is the aquarium director.
 It knows which rooms it has, what resources they have, and decides where to put the new fish tank based on all this information.
 Without any other constraints, they will default to placing tanks across all rooms evenly."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/09-deployment.png" alt: "deep sea exhibit with anglerfish, jellyfish, and a squid" %} {{
"We’re typically not dealing in a single fish in a single tank. More frequently, the aquarium director is putting together an exhibit — a collection of tanks that all go together.
 Here, the Deep Sea exhibit is made up of some anglerfish tanks, some jellyfish tanks, and the giant squid tank. When they are created as part of an exhibit, we determine how many of each container to create."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/10-recipe.png" alt: "recipe for the squid tank" %} {{
"When designing the exhibit, we provide instructions for creating each item in the exhibit.
 We detail how many of each tank we want, and how to create a new tank in case one needs to be fixed. We lay out how much to fill it, what temperature the water needs to be, how much food it gets."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/11-replica-set.png" alt: "giving instructions to intern" %} {{
"Giving these instructions to the the Kubernetes aquarium director, they are then able to delegate the actual job of maintaining the right number of tanks of each app to someone else — the aquarium intern.
 Their job is to make sure there’s always the right number of tanks on display at the aquarium. In Kubernetes speak, this intern that gets created along with the deployment is called a Replica Set."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/12-pod-switch.png" alt: "switching out jellyfish tanks" %} {{
"The aquarium visitors don’t care if they’re looking at Fred the Jellyfish or Pearl the Jellyfish — they just want to see a jellyfish.
 The intern switches out a jellyfish for a brand new one using the instructions provided when the jellyfish on display gets tired and needs a break.
 In Kubernetes world, Replica Sets make sure that when Pods go down, a new one gets spun up to keep the correct number of pods available."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/13-pod-app.png" alt: "Pod: fish in tank in box" %} {{
"There’s another important consideration when designing your exhibit.
 So far, for illustration purposes, we’ve been showing the Pods like this — a box in which we place the containerized app."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/14-pod-box.png" alt: "Pod: box that we cannot see through" %} {{
"A more accurate depiction of the Pod would be this. From the outside, it’s just a Pod with some labels.
 We can ask the Kubernetes aquarium director to tell us more about what’s inside, sure. But this isn’t very useful for us to put on display so that our users — the aquarium visitors — can see and interact with the app."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/15-pod-exposed.png" alt: "box with hole cut in it" %} {{
"What we need is some way to allow the visitors to the aquarium a peek into the pod.
 We need to expose some kind of window where they can access viewing the fish inside."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/16-service.png" alt: "scissors labelled as service, cutting pod box" %} {{
"In the Kubernetes aquarium, the answer is a Service. Services have a few different roles, but a primary one is to expose a port in the container so that it is externally accessible.
 Applying a service to our pods will let the aquarium visitors access the fish experience inside."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/17-services-pods.png" alt: "services as tubes between pod boxes" %} {{
"Services also serve the role of allowing Pods and containers to have access to one another.
 If we want the fishes in two tanks to be able to exchange water and food back and forth, we can set up a service that allows this interaction."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/18-network-policy.png" alt: "valve on tube flowing from pod" %} {{
"A Network Policy is an additional kind of thing we can apply here.
 Here, it’s a one-way valve that allows this fish tank to have water flow outwards, but not inwards."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/k8s-aquarium/19-config-map.png" alt: "food attached to wall of tank" %} {{
"A Config Map is a set of variables or values that a Pod needs in order to operate.
 The fish needs a bin of food in order to operate. The devices get mounted on a container.
 We also see transparent and opaque Config Maps — because they can contain either mundane or secret values."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

There’s many more pieces to Kubernetes, but these are many of the basic building blocks that make up the aquarium and describe the choices made by its director.

Why did I make this aquarium analogy? Here’s the thing — Kubernetes has a lot of Things. So many nouns, which are things wrapped in things wrapped in things that overlap with things. It’s layered like an onion.

{% Slide src: "/assets/images/k8s-aquarium/20-diagram.png" alt: "confusing diagram of overlapping boxes" %} {{
"A lot of diagrams look something like this, explaining all the nouns that are covered here.
It’s technically accurate, but it’s not very helpful to me. Applying analogies like fishes and aquariums to a tech help me parse it all together in my head."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

![many fish tanks and happy aquarium director](/assets/images/k8s-aquarium/21-aquarium.png)

**Externally published on [Medium](https://medium.com/@AnneLoVerso/the-kubernetes-aquarium-6a3d1d7a2afd)**