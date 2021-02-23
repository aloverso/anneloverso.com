---
title: Systems Thinking & Software Practices
weight: 300
tags: essays featured
published: November 2020
---

A system is not just a collection of things.{% Foot num: "1" %} In the words of systems thought leader Donella Meadows, it is "an interconnected set of elements that is coherently organized in a way that achieves something." Put another way, a system has elements, relationships, and a purpose.

What, then, is systems thinking? It is a holistic approach to analysis that takes all of these constituent parts into account for decision-making. A systems thinker does not just observe events and actors (the parts that are most tangible and visible), but considers interconnections—those flows of tangible goods and intangible concepts that tie elements together. They observe patterns of behavior, and look for the rules which govern that behavior, all while considering the values and paradigms that create structures of rules and incentives.

Systems make up the structures we live in, and analyzing them allows us to isolate the parts that we want to change and the leverage points that make such change possible. As technologists, understanding the goals, incentives, feedback loops, and paradigms that define a system allows us to transform software organizations. But will introducing user-centered design practices to a product team help them deliver value faster? Or will disciplined, test-driven development be a better fulcrum of change? Using systems thinking, these are the questions we can begin to answer.

## Leveraging systems thinking with Pivotal Act
At [[VMware Pivotal Labs]], we enable software organizations’ digital transformations through processes like lean, agile, and [[extreme programming]] (XP). Within Pivotal Labs is [Pivotal Act](https://tanzu.vmware.com/act), a division that drives social and environmental impact by helping nonprofits design and build technology through similar techniques, which they can learn themselves and continue to apply to new problems. In the social impact space, systems thinking allows us to understand the root causes of human problems and their consequences so we can act accordingly.

As a Labs engineer, I was recently staffed on a Pivotal Act project consisting of a short design sprint with [Save the Children](https://www.savethechildren.org/). Our goal was to identify problems in designing effective programs to treat and prevent malnutrition in developing countries, and to explore solutions related to nutrition causal analysis. Our findings would help the organization decide if it was worth prioritizing resources to build a tool to facilitate causal analysis.

In typical Labs projects, we use a process called discovery and framing to uncover and prioritize problems and then generate and validate potential solutions. We adapted this approach for the Pivotal Act context in order to frame social or environmental impact as a key driver of prioritization needs instead of business value. In my experience, much of the systems thinking mindset we leverage in the humanitarian space is widely applicable to the general world of technology development, but unfortunately social impact designer is not a role typically found on technology teams.

## Using systems thinking in organizational change
Digital transformation is ultimately about systems-level change within an organization. There’s no way to effectively digitally transform an organization without considering the systems-level factors that contribute to where in that journey the organization is at and why.

> "Change comes first from stepping outside the limited information that can be seen from any single place in the system and getting an overview. From a wider perspective, information flows, goals, incentives, and disincentives can be restructured so that separate bounded rational actions do add up to results that everyone enjoys."
>
>   —Donella Meadows


With Save the Children, we were investigating challenges within the organization in measuring impact and iterating on effective programs designed to reduce malnutrition. The systems thinking we engaged in involved multilayered abstraction; questions included, for example: Looking within a program, what is its life cycle? Through what processes and flows does a program go from being a proposal to being implemented? Does funding drive program design, or does program design drive funding? What are the feedback loops that allow for learning and iterating over the course of a program? What behavior is the proposal/funding/reporting system incentivizing?

We then abstracted outwards, to the systems between programs, asking: How do they interact with one another? How do they coordinate? What are the feedback loops that allow for learning from the results of one program and applying it to the next one?

Through structural analysis of the rules that govern the systems by which nonprofits seek funding from donors, we determined that the first problem—focusing within a single program life cycle—was largely out of our control. Changing the system to allow for more in-program iteration would require changing the global system of NGO funding structures—not, of course, an achievable goal.

The second problem, however, was largely within our control. At the higher level of iteration between programs, Save the Children had the power to change its own structural behaviors that prevented it from effectively learning from past programs and applying those learnings to future programs. And changing those behaviors would impact the overall problem we were addressing.

Systems have three primary characteristics that make them work—that keep them from collapsing, and that act as driving forces for how they self-perpetuate:

- Resilience – An ability to survive and persist in a varied environment
- Self-organization – A capacity to make their own structures more complex
- Hierarchy – A structure of coordinated decomposition into self-regulating subsystems

In identifying the distinction among leverage points within and between programs at Save the Children, we were taking advantage of the principle of systemic hierarchy. Indeed, if making organizational change is impenetrable within a system, either look at manageable subsystems within it, or expand outwards to the supersystems to which it contributes. Each is organized differently and as such, may offer different opportunities for leveraging change.

Considering these three factors may also allow you to diagnose a system that is not working. Many organizations tend to sacrifice resilience and self-organization for stability. A common example of this is the use of waterfall methodology, which disempowers teams by separating the software designers from the implementers, removing their capacity to self-organize a software architecture.  It also sacrifices resilience by assuming large amounts of risk up front. But because of its stability and ability to make clear exactly what will get built and when, waterfall lives on. In a systems mindset, recognizing the dangers of a non-resilient system like waterfall and the strength of a resilient one can be a powerful justification for using iterative, lean, or agile thinking instead.

## Feedback reinforces systems
One of the five primary principles of [[extreme programming]] (XP) is **feedback** — the process of receiving information about the impact of behaviors and using it to adjust any future decisions. Its relation to systems thinking is no coincidence.

Feedback—both in the form of balancing (negative) feedback loops and reinforcing (positive) feedback loops—is a core component of any system. These loops exist in every system, always. They define the ways in which elements and actors of a system relate and behave while driving the system’s overall purpose or goal.

Feedback loops also exist in some form on every team (software or otherwise), whether they are explicit or not. They define a team’s success and drive any actions it takes. In the absence of explicit feedback loops, feedback can be more subtle, such as a powerful stakeholder expressing their satisfaction, or lack thereof, with a project’s output.

Feedback is an XP value because it urges software teams to take control of their own feedback loops. XP recognizes the power of feedback loops as defining system behavior and goals. When teams value rapid feedback, we see certain practices emerge. They conduct user research, for example, and test-drive their code to create short feedback loops in order to validate assumptions. When an assumption proves to be valid, that’s a reinforcement, in that it gives us confidence that we’re proceeding in an effective direction. When we prove that an assumption is wrong, that’s a loop that both asks us to re-balance our ideas of success and prevents us from falling into the failure trap of seeking the wrong goal.

Within Save the Children, we mapped out the incentives and behaviors influencing our identified problem of program designers not applying learnings from past programs to the design of future ones. It was, at its core, a problem of feedback; there was a missing feedback loop between one program and the next. The organization was not seeing the value it could have been getting from testing assumptions and re-balancing goals appropriately.

## Putting it all together
Why was that feedback loop missing from the Save the Children design process? In attempting to answer that question, we uncovered a dozen more problems in organizational culture, individual incentives, technological access and ease of use, along with time, money, and data. We were swimming in problems and we had only scraped the first layer of the proverbial systems barrel.

Luckily, many of the techniques that we as agile practitioners use for business problem-solving allowed us to prioritize each problem and address it. And by using systems-level analysis to understand root problems and the sub-problems that contribute to them, we could apply traditional design tools and conduct user testing, validation interviews, and experiments to invalidate our assumptions.

Systems thinking helped us understand all the pieces in play and how they each pulled the system in different directions, all with different forces and conditions. Meanwhile, we leveraged agile practices like user-centered design, prioritization grids, and lean experimentation to keep ourselves grounded instead of being boggled by the infinite complexity of a global humanitarian aid system.

## A core tool
Given the frequency with which software teams are responsible for analyzing complex interactions and designing solutions, systems thinking should be a core tool in their product-oriented toolbox. Additionally, beyond the individual product and the individual team, systems thinking is a paradigm for agile advocates to identify points of change within an organization. There is power in identifying the elements, relationships, and goals of any system. The skilled designer, engineer, or general problem-solver can leverage their understanding of all of these factors to enact real change.

*For more information and reference, and for the intrigued systems thinker, see Thinking in Systems: A Primer (Chelsea Green Publishing, 2008) by Donella Meadows.*

{% FootnoteContainer %}
    {% Footnote num: "1" %}
        This post was <a href="https://tanzu.vmware.com/content/blog/systems-thinking-pivotal-act-tool-software-project">originally published on VMware Tanzu blog</a>.
    {% endFootnote %}
{% endFootnoteContainer %}

