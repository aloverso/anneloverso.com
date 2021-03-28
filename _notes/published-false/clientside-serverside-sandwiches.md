---
title: Server-Side and Client-Side Rendering - explained with sandwiches
weight: 200
tags: illustrations software 
published: false
---

Learning Next.js? Modern static sites? In this post, we'll cover server-side rendering (SSR), client-side rendering (CSR), pre-rendering, hybrid models. And we'll do it all with something simpler than a web app... a sandwich 🥪.

In the world of web content delivery, there are three actors we care about. The user, the browser, and the server.



{% Slide src: "/assets/images/sandwiches/user2.png" alt: "person at a bar" %} {{
"The user is the person at their laptop or mobile phone, navigating to a URL and expecting to see content."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/sandwiches/browser.svg" alt: "bartender with a sandwich" %} {{
"The browser is a program running on the device that responds to the user. It's limited by the resources it has on its device."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}

{% Slide src: "/assets/images/sandwiches/server.svg" alt: "bartender with a sandwich" %} {{
"And the server provides content to the browsers on request."
| newline_to_br | newline_to_br | markdownify }} {% endSlide %}


In our analogy, the user is a patron at a restaurant or bar. They hop up on a barstool and make requests of the browser: the bartender standing in front of them, dishing out food for them. The server is the back-kitchen chef. They might make food or prep ingredients in the kitchen and pass it off to the bartender to give to a user.
The user going to a webpage and expecting to see content is like the bar customer ordering a sandwich.
Server-Side Rendering
In a server-rendered world, the sandwich is prepared by the server - the back-kitchen chef.
The bartender does no work. They just ask the chef for a sandwich and, upon receiving one, gives it to the customer.