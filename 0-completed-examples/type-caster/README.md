# Type Caster

As a programmer, I will need to work with all types and values. But inputs from the DOM are almost always strings.  So that I can build meaningful applications without errors (and to catch errors when they occur!) I need to understand how types and type casting work in JavaScript.  This mini-app will help me learn.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| `<section>` | `id='user-interface'` | the section that contains all user interface elements |
| `<form>` | | groups user input to be handled with one event |
| `<input>` | `name='value'`, `type='text'` | this is where a user enters the string value they want to cast |
| `<select>` | `name='type'` | this is the drop-down where a user can select what type to cast the string into |
| `<option>` | `value='string'` | a target type for the `typeCaster` function's first argument |
| `<option>` | `value='number'` |  a target type for the `typeCaster` function's first argument |
| `<option>` | `value='boolean'` | a target type for the `typeCaster` function's first argument |
| `<option>` | `value='undefined'` |  a target type for the `typeCaster` function's first argument |
| `<button>` | `type='button'`, `id='user-action'` | this button is used to trigger the event & handler for carrying out this user story |

## Styling

| class name | description | role |
| --- | --- | --- |
| `.output` | sets position & font styling | makes the program output clear and the center of attention |
| `.inputs` | aligns to center | centers user input above program output for usability |

## Listeners

| type | attached to | callback |
| --- | --- | --- |
| `click` | `id='user-action'` | `typeCastHandler` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `typeCastHandler(event)` | Event: a user-triggered event | Boolean: should the browser continue as normal? | reads user input from the event, passes input through core logic, renders result for user, logs action for developer, and alerts the browser 'OK' |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `typeCaster(type, value)` | type (_String_): the target primitive type. <br> value (_any type_):  the value to be cast. | _String, Number, Boolean or undefined_ | it takes in a desired type and a value, casts the value to the desired type, and returns the result |
