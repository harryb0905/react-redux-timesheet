import React from 'react';
import { shallow } from 'enzyme';

import Hello from './Hello';

describe('Hello World:', () => {
  it('renders without exploding', () => {
    expect(shallow(<Hello />)).toHaveLength(1);
  });

  it('should render with default text', () => {
    const component = shallow(<Hello />);

    expect(component).toIncludeText('Howdy');
    expect(component).toIncludeText('Partner');
  });

  it('should render with our props', () => {
    const component = shallow(<Hello friend="Fred" />);

    expect(component).toIncludeText('Howdy');
    expect(component).toIncludeText('Fred');
    expect(component).not.toIncludeText('Partner');
  });
});