import { shallowMount } from '@vue/test-utils';
import Main from '@/views/Main.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Main, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
