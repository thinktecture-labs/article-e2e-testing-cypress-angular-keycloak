import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {DockComponent} from './dock.component';
import {CoreModule} from '../../../../../../../article-e2e-testing-cypress-angular/projects/core/src/lib/core.module';

export default {
  title: 'Core / Dock',
  component: DockComponent,
  decorators: [
    moduleMetadata({
      imports: [CoreModule],
    }),
  ],
} as Meta;


const Template: Story<DockComponent> = (props: DockComponent) => ({
  template: `
    <!-- background hack, use this instead https://github.com/storybookjs/storybook/pull/12663 -->
    <div style="background: url('background.jpg') center center no-repeat;background-size: cover; display: block; position: absolute; left:0;top:0;right:0;bottom: 0;"></div>
    <labs-dock [items]="items"></labs-dock>
  `,
  props,
});

export const Default = Template.bind({});
Default.args = {
  items: [{}, {value: 42}, {}, {}],
};
Default.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  chromatic: { viewports: [320] },
};
