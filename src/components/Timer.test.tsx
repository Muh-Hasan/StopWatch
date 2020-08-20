import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Timer from './Timer'

Enzyme.configure({ adapter: new Adapter() })

let wrapper = shallow(<Timer />)

describe('TimerComponent', () => {
    it("renders correctly", () => {
        shallow(<Timer />);
    });
    it('should render div' , () => {
        expect(wrapper.find('div').length).toBeGreaterThanOrEqual(1)
    })
    it('should render buttons' , () => {
        expect(wrapper.find('button').length).toBeLessThanOrEqual(6)
    })
    it("should click button", () => {
        expect(wrapper.find('button').simulate('click'))
    });
    it('should render initial value' , () => {
        expect(wrapper.find('span.one').text()).toBe('00')
        expect(wrapper.find('span.two').text()).toBe('00')
        expect(wrapper.find('span.three').text()).toBe('01')
    })    
})