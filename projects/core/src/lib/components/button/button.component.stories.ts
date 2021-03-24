import {ButtonComponent} from './button.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'Core / Button',
  component: ButtonComponent,
} as Meta;


const Template: Story<ButtonComponent> = (props: ButtonComponent) => ({
  component: ButtonComponent,
  props,
});

export const Default = Template.bind({});
Default.args = {};
