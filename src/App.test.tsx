import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Timer from './components/Timer'

Enzyme.configure({ adapter: new Adapter() })

let wrapper = shallow(<App />)

describe('App' , () => {
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
      });
    
      it("Should render Timer component", () => {
        expect(wrapper.containsMatchingElement(<Timer />)).toEqual(true)
      })
    
})