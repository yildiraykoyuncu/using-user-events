# Slidulator

An approximate calculator.  Users can move the sliders and change the operation, new results are automatically displayed to users.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| `<section>` | `id='user-input'` | contains the user interface elements |
| `<form>` | `id='inputs'` | contains the user interaction elements and allows capturing all inputs with one event |
| `<input>` | `type='range'`, `name='left'`, `class='input-slider'` | allows users to set the left operand || `<option>` | `value='number'` |  a target type for the `typeCaster` function's first argument |
| `<select>` | `name='operation'` | contains the possible operations as a selection field |
| `<option>` | `value='add'` | indicates to use  addition |
| `<option>` | `value='subtract'` | indicates to use  subtraction |
| `<option>` | `value='multiply'` | indicates to use  multiplication |
| `<option>` | `value='divide'` |  set the current operation to division |
| `<input>` | `type='range'`, `name='right'`, `class='input-slider'` | allows users to set the right operand |
| `<code>` | `id='program-output'`, `class='output-field'` | displays the most recent result |

## Styling

| class name | description | role |
| --- | --- | --- |
| `.input-slider` | makes nice sliders | styles the two sliders to be large enough on the screen |
| `.output-field` | centers and styles text | makes sure the most recent result is displayed nicely for the user |

## Listeners

| type | attached to | callback |
| --- | --- | --- |
| `change` | `id='inputs'` | `showResult` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `showResult(event)` | _Event_: a user-generated event | _Boolean_ | reads the current left/right numbers and operation from the event, calculates the result, and displays it in the user interface. log action for developers |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `doMath(op, a, b)` | op (_String_): the operation to use <br> a (_Number): the left operand <br> b (_Number): the right operand | _Number_: result of doing math | conditionally uses different operators on two Number arguments |

