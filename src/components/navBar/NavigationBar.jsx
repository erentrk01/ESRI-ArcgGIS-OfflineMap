import React from 'react';
import Icon from '../common/Icon';
import { Brand, ButtonSection, NavBar, NavButton } from './elements';

export default function NavigationBar() {

    return (
        <NavBar>
            <Brand href={'/'}>{'esri arcgis offline map'}</Brand>
            <ButtonSection>
                <NavButton href={'https://github.com/erentrk01'}>
                    <Icon name={'github'}/>
                </NavButton>
            </ButtonSection>
        </NavBar>
    )
}
