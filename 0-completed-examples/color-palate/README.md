# Color Palate

A simple program that allows users to preview, then set the background color of the website.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| `<section>` | `id='user-interface'` | the section that contains all user interface elements |
| `<form>` | `id='user-interface'` | the form that allows us to handle all user input with one event |
| `<input>` | `type='color'`, `name='selection'` | a pop-up color palate so users can select what color they want to set the screen |
| `<input>` | `type='button'`, `id='set-color'`, `value='set background'` | the button used to trigger the event that will change the web page background |

## Styling

| class name | description | role |
| --- | --- | --- |
| `.color-selection` | positions the user interface | creates a more pleasant experience for the user |

## Listeners

| type | attached to | callback |
| --- | --- | --- |
| `click` | `id='set-color'` | `setColorHandler` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `setColorHandler(event)` | _Event_: a user-triggered event | _Boolean_: telling the browser whether to continue as normal | when a user triggers this handler it will read in the selected color, create a style property, and assign it to the body.  the action is then logged to the developer and the browser is told 'OK' |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `colorToStyle(colorCode)` | colorCode (_String_): a valid CSS color | _String_: a CSS background-color property set to the given color | this function takes in a CSS color and returns a style property that the program can use to style an element |
