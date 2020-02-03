# Typing Practice

A user can practice their typing skills by entering text in the upp visible()) field, then trying to replicate it in the lower (obscured) field.  They will know they have succeeded when the red user interface turns yellow.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| `<section>` | `class='failing'`, `id='user-interface'` | contains the user interface for styling & positioning |
| `<form>` | `class='inputs'` | for gathering user input on interaction events |
| `<input>` | `id='visible'`, `type='text'`, `name='target'` | where users enter the challenge string |
| `<input>` | `id='obscured'`, `type='password'`, `name='guess'` | where users try to replicate the target string |

## Styling

| class name | description | role |
| --- | --- | --- |
| `.failing` | colors the background | visually cues the uers their input doesn't match the hidden phrase |
| `.passing` | colors the background | visually cues the uers their input does match the hidde phrase |
| `.inputs` | centers & columns children elements | aligns the user input fields |
| (id) `#user-interface` | positions & scales the root user interface element | makes sure the pass/fail coloring covers the entire user interface |

## Listeners

| type | attached to | callback |
| --- | --- | --- |
| `keyup` | `id='obscured'` | `doTheyMatch` |
| `keyup` | `id='visible'` | `doTheyMatch` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `doTheyMatch(Event)` | _Event_: a user generated event | _Boolean_: true | reads uer input from the event, executes core logic on user inputs, updates the className of the user-interface to indicate passing/failing, logs action for developers |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `compareThem(first, second)` | first (_Primitive_): the first value to compare <br> second (_Primitive_): the second value to compare | _String_: `'passing'` or `'failing'` | returns "passing" or "failing" to indicate if two primitive values have the same type & value |

