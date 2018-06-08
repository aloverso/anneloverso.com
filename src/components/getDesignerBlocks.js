import hmhbga from '../assets/img/hmhbga.jpg'
import shiftingrhythms from '../assets/img/shiftingrhythms.png'
import uocd from '../assets/img/folio-mobile/birth.gif'
import tests from '../assets/img/tests.jpeg'
import GridItemWide from "./GridItemWide";
import GridItemSideBySide from "./GridItemSideBySide";
import React from 'react';

export default function getDesignerBlocks(callback, blockOpenStates) {
    return (
        [
            <GridItemSideBySide
                img={shiftingrhythms}
                title="Shifting Rhythms"
                color="purple"
                snippet={
                    <div>
                        Co-designing a mobile makerspace offering hands-on learning experiences to youth in rural Mississippi
                    </div>
                }
                onClick={() => {callback('insper')}}
                childVisible={blockOpenStates['insper']}
            >
                <div>
                    <p>I took a class called Affordable Design and Entrepreneurship (ADE) during my senior year of college, as a capstone of my engineering education.  It’s a class that places students in community-oriented design projects, handed off between teams from year-to-year to allow sustained community collaboration.  My project involved working with the community of Coahoma County, Mississippi, to co-create a mobile youth education space.</p>
                    <p>Previous semesters of students had identified a makerspace as a way to strengthen the community’s network of educational opportunities, by providing hands-on learning resources. It needed to be mobile (a bus or trailer) so it would be available to youth in a rural community without access to reliable transportation.</p>
                    <p>In my time on the project, we developed this loose into idea into Shifting Rhythms: a mobile guitar-building program for youth ages 14-18 in Coahoma County.  We secured formal community partners, co-developed a twelve-week guitar building curriculum that integrated design, art, music, technology, hands-on fabrication, and entrepreneurship.  We developed a cohesive business model and, under my leadership as project manager, secured over $45,000 in grants that future teams are now using to launch a pilot program that will test the curriculum and the social impact of Shifting Rhythms.</p>
                    <p>Additionally, as community liaison for the team, I was responsible for all communication and planning between the team in Boston and our Mississippi partners.  I organized trips, planned meetings, facilitated conversations and workshops, and relayed status updates.</p>

                </div>
            </GridItemSideBySide>,

            <GridItemWide
                img={tests}
                title="Museum exhibit design: standardized testing"
                alignText="bottom-right"
                color="purple"
                onClick={() => {callback('tests')}}
                childVisible={blockOpenStates['tests']}
            >
                <div>sfd</div>
            </GridItemWide>,

            <GridItemSideBySide
                img={hmhbga}
                title="Healthy Mothers, Healthy Babies Coalition of Georgia"
                alignText="bottom-right"
                color="purple"
                onClick={() => {callback('hmhbga')}}
                childVisible={blockOpenStates['hmhbga']}
                >
                <div>
                    <p>For an upper-level design class, I was on a team of five students that collaborated with Healthy Mothers, Healthy Babies Coalition of Georgia (HMHBGA) to apply human-centered design principles to identifying and implementing ways to enable more women to become certified birth-support professionals (such as doulas) in the state of Georgia.</p>
                    <p>We spent time investigating the “state of birth” in Georgia, such as maternal/infant mortality rates and the numbers of existing birth professionals in the state.  We interviewed over ten doulas in the state, focusing on listening to their stories and learning about what drives them, how they stay connected to their community and their practice, and how they develop themselves as a professional businessperson.  We developed personas to describe the trends we saw, and from these insights, pitched an idea to HMHBGA to run doula development seminars and workshops that focus on the less-talked-about aspects of becoming a doula, such as business, branding, and personal marketing, identity and reflection on practices, and how to price your services.  With the doulas we had made connections with, we prototyped some of these seminars as roundtable discussions.  We saw firsthand the impact of bringing together doulas with different values to the same table, as well as the mentorship and relationship-building opportunities of bringing together new and experienced doulas to discuss their work at a higher level.</p>
                    <p>Our development of the workshops and the design that drove them was passed along to HMHBGA at the end of the semester, so that they could continue to develop and implement the program under the umbrella of their organization.</p>

                </div>
            </GridItemSideBySide>,

            <GridItemWide
                img={uocd}
                color="purple"
                title="#YesThisIsBirth"
                onClick={() => {callback('uocd')}}
                childVisible={blockOpenStates['uocd']}
                alignText="bottom-right"
            >
                <div>asfdasdfsda</div>
            </GridItemWide>
        ]
    )
}