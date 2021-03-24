import {BadgeComponent} from './badge.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'Core / Badge',
  component: BadgeComponent,
} as Meta;


const Template: Story<BadgeComponent> = (props: BadgeComponent) => ({
  component: BadgeComponent,
  props,
});

export const Default = Template.bind({});
Default.args = {
  value: 42,
};
