import App from '../client/src/App.jsx';

describe('<App /> rendering', () => {
    it('check if <App/> is a <div></div>', () => {
        let wrapper = shallow(<App />);
        console.log(wrapper);
        expect(wrapper.type()).toEqual('div');
    });
});