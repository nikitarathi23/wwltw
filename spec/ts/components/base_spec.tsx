import { shallow } from 'enzyme';
import * as React from 'react';

import { Base } from 'components/base';

describe('Base', () => {
    let fixture: any;

    beforeEach(() => {
        fixture = shallow(
            <Base></Base>
        );
    });

    it('should render the form', () => {
        expect(fixture.text()).toContain('Team Name');
    });
});
