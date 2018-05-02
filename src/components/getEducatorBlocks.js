import workshopmobile from '../assets/img/folio-mobile/workshop.jpg'
import research from '../assets/img/eduresearch.JPG'
import insper from '../assets/img/folio-mobile/ade2.jpg'
import GridItemWide from "./GridItemWide";
import GridItemSideBySide from "./GridItemSideBySide";
import React from 'react';

export default function getEducatorBlocks(callback, blockOpenStates) {
    return (
        <div>
            <GridItemWide
                img={workshopmobile}
                title="Teaching Portfolio"
                alignText="bottom-right"
                color="blue"
                onClick={() => {callback('teaching')}}
                childVisible={blockOpenStates['teaching']}
            >
                <div>sfd</div>
            </GridItemWide>

            <GridItemSideBySide
                img={research}
                title="Research: what makes someone a teacher?"
                color="blue"
                onClick={() => {callback('research')}}
                childVisible={blockOpenStates['research']}
            >
                <div>asfdasdfsda</div>
            </GridItemSideBySide>

            <GridItemWide
                img={insper}
                title="Higher-education consulting in Brazil"
                color="blue"
                alignText="bottom-right"
                onClick={() => {callback('insper')}}
                childVisible={blockOpenStates['insper']}
            >
                <div>asfdasdfsda</div>
            </GridItemWide>

            <GridItemSideBySide
                img={research}
                title="Documentary storytelling: politics and engineering"
                color="blue"
                onClick={() => {callback('documentary')}}
                childVisible={blockOpenStates['documentary']}
            >
                <div>asfdasdfsda</div>
            </GridItemSideBySide>
        </div>
    )
}