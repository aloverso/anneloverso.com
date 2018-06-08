import workshopmobile from '../assets/img/folio-mobile/workshop.jpg'
import microsoft from '../assets/img/folio-mobile/microsoft.jpg'
import redhat from '../assets/img/folio-mobile/redhat.png'
import abortion from '../assets/img/abortion.gif'
import pianobot from '../assets/img/folio-mobile/pianobot.png'
import shiftingrhythms from '../assets/img/shiftingrhythms.png'
import GridItemWide from "./GridItemWide";
import GridItemSideBySide from "./GridItemSideBySide";
import React from 'react';

export default function getEngineerBlocks(callback, blockOpenStates) {
    return (
    [
            <GridItemWide
                img={microsoft}
                onClick={() => {callback('microsoft')}}
                childVisible={blockOpenStates['microsoft']}
                removeOverlay
            >
                <div>sfd</div>
            </GridItemWide>,

            <GridItemWide
                img={pianobot}
                title="Piano-playing robot"
                color="green"
                alignText="bottom-right"
                onClick={() => {callback('pianobot')}}
                childVisible={blockOpenStates['pianobot']}
            >
                <div>asfdasdfsda</div>
            </GridItemWide>,

            <GridItemWide
                img={redhat}
                onClick={() => {callback('redhat')}}
                childVisible={blockOpenStates['redhat']}
                removeOverlay
            >
                <div>sfd</div>
            </GridItemWide>,

            <GridItemSideBySide
                img={abortion}
                title="Data visualization"
                color="green"
                onClick={() => {callback('abortion')}}
                childVisible={blockOpenStates['abortion']}
            >
                <div>asfdasdfsda</div>
            </GridItemSideBySide>
        ]
    )
}