# Navigate By Key Flow Component for Salesforce

This component allows you to navigate between your flow screens by pressing a keyboard key. For example, you can navigate to the next screen by pressing Enter.

## Basic Concept
The flow component adds a keydown listener to the screen, that evaluates all keyboard inputs on your flow screen. If your keyboard input equals a certain value, the component will navigate to another flow screen.

## Features

- Fully compatible to all browsers
- Supports event.code, event.key and event.keyCode
- Can be disabled

## Flow input and output variables

- `Key Code Next`: The key for navigating to the next screen.
- `Key Code Previous`: The key for navigating to the previous screen.
- `Key Code Finish`: The key for finish.
- `Use event.key?`: If true use the event.key values as key codes. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
- `Use event.code?`: If true use the event.code values as key code. This is the recommended way and defaults to true. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values
- `Use event.keyCode? (deprecated)`: If true, use the event.keyCode values. This is deprecated javascript and won't be supported by  browsers in the future. Nevertheless, it's the only way to use with IE11. 'Enter' is for example 13. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
- `Disabled?`: If true, navigation by key won't work. Defaults to false.

## Example

You want to navigate to the next screen by pressing Enter? Set `Use event.code?` to true, leave `Use event.key?` and `Use event.keyCode? (deprecated)` to false and type in `Key Code Next` Enter (I mean type in the the word 'Enter' without apostrophs).

## Installation instructions

### Part 1
Use the Deploy to Salesforce button to install the component:\
<a href="https://githubsfdeploy.herokuapp.com">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

### Part 2
Place the flow component on a screen and configure it to your wishes.


## FAQ
- Does this component work with Internet Explorer?
  - Yes, but you must use keyCodes, which is deprecated. The value for Enter is for example `13`.
  
- Does this component work with Smartphones?
  - Yes. It should work with hardware and software keys.

## Warning
Be careful when you use this component. For example you don't want to use the tabstop key to navigate to the next screen, when it's actually intended to set the focus on the next input element. Also don't use the Enter key to navigate to the next screen, if a text area field is placed on your screen. Your users will be sent to the next screen instead of making a linebreak. Once again, consider using this component with utmost care.
