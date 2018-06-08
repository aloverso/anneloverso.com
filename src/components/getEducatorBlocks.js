import workshopmobile from '../assets/img/folio-mobile/workshop.jpg'
import research from '../assets/img/eduresearch.JPG'
import insper from '../assets/img/folio-mobile/ade2.jpg'
import GridItemWide from "./GridItemWide";
import GridItemSideBySide from "./GridItemSideBySide";
import React from 'react';

export default function getEducatorBlocks(callback, blockOpenStates) {
    return (
        [
            <GridItemWide
                img={workshopmobile}
                title="Teaching Portfolio"
                alignText="bottom-right"
                color="blue"
                onClick={() => {callback('teaching')}}
                childVisible={blockOpenStates['teaching']}
            >
                <div>
                    <p>I developed my teaching portfolio as my final deliverable for my Fall 2016 course in Teaching and Learning.</p>

                    <p>The course allowed us a chance to explore our own understandings of teaching and learning, and examine them through the lenses of research and literature on the subjects. We studied such topics as: teaching philosophies, writing syllabi, cognition, learning styles, motivation, pedagogies, and diversity.</p>

                    <p>Our final project for the class involved creating a fully-developed lesson plan and carrying it out, going through each step of developing learning objectives and outcomes, selecting pedagogies, developing feedback mechanisms, and creating course content. For my project, I taught a class at the MIT Splash program for high schoolers. I held a discussion-based seminar investigating the intersections of technology and society.</p>

                    <p>This class allowed me a chance to better develop by teaching identity by building off the educational knowledge and skills I had previously developed. I had already taken a course at Wellesley College called Understanding and Improving Schools, in which we discussed justice and injustice in the classroom. Additionally, my years of engineering education research and prior teaching experiences gave me substantial background which I could analyze through the literature lens provided by this class.</p>

                    <p>This teaching portfolio is centered on my experiences in Teaching and Learning, but includes my experiences in other classes and positions as well, and applies to my general attitude towards teaching, as developed in this class.</p>
                </div>
            </GridItemWide>,

            <GridItemSideBySide
                img={research}
                title="Research: what makes someone a teacher?"
                snippet={
                    <div>
                        Grounded theory analysis of qualitative data through a lens of practiced learning and reflection
                    </div>
                }
                color="blue"
                onClick={() => {callback('research')}}
                childVisible={blockOpenStates['research']}
            >
                <div>
                    <p>All four years of college, I did four credits of research per semester in the field of engineering education with Professor Yevgeniya Zastavker. Our research group was made of several smaller student teams, working on anything from assessment to student motivation to discourse analysis on teams.</p>
                        <p>My team of three-to-four students were studying what makes a person become interested in teaching, and how their personal philosophy of teaching relates to that interest. We conducted a case study of (pseudonymized) “Celadon College”, where students enter teaching careers at twice the national average for engineering students. We collected survey data from over 200 current students and alumni, and analyzed that data using grounded theory. We wrote a paper, presented at the 2014 IEEE Frontiers in Education conference, to describe our emergent finding that suggested relationships between aspects of Celadon's academic culture and student interest in teaching.</p>
                        <p>We continued the same study by selecting 14 respondents and conducting in-depth, hour-plus interviews with each. We read, coded, and analyzed those interviews using grounded theory and related synthesis techniques. In Spring 2016, we wrote a paper about our emergent theories from this work, which focuses on how participants define "teaching" in their own words, and how that definition compares to their descriptions of their actual teaching experiences, and the discrepancies between them. I led the team in writing and presenting this paper at the 2016 Frontiers in Education conference in Erie, PA.</p>

                </div>
            </GridItemSideBySide>,

            <GridItemWide
                img={insper}
                title="Higher-education consulting in Brazil"
                color="blue"
                alignText="bottom-right"
                onClick={() => {callback('insper')}}
                childVisible={blockOpenStates['insper']}
            >
                <div>asfdasdfsda</div>
            </GridItemWide>,

            <GridItemSideBySide
                img={research}
                title="Documentary storytelling: politics and engineering"
                snippet={
                    <div>
                        Examining the role of politics in engineering through film
                    </div>
                }
                color="blue"
                onClick={() => {callback('documentary')}}
                childVisible={blockOpenStates['documentary']}
            >
                <div>asfdasdfsda</div>
            </GridItemSideBySide>
        ]
    )
}