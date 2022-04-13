import * as React from 'react';
import {
  Checkbox,
  ColorPicker,
  createTheme,
  Dropdown,
  ThemeProvider, // NOTE: Use Fabric instead in version 7 or earlier
  initializeIcons,
  PrimaryButton,
  Slider,
  TextField,
  Toggle
} from '@fluentui/react';

initializeIcons();

const Index = () => (
  <ThemeProvider>
    <div>
      <PrimaryButton>Hello, world</PrimaryButton>
      <Toggle defaultChecked label="Hello" />
      <TextField defaultValue="hello" />
      <Dropdown disabled options={[]} />
      <Checkbox defaultChecked label="Hello" />
      <Slider defaultValue={50} max={100} />
      <ColorPicker color='red' />
    </div>
  </ThemeProvider>
);
export default Index;
