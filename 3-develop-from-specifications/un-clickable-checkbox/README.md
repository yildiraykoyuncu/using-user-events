# Un-Clickable Checkbox

A user can never click the checkbox because it follows their mouse.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| `<section>` | `id='user-interface'`, `class='full-screen'` | contains the user-interface elements & tracks the mouse movements |
| `<input>` | `class='shaddow'`, `id='follower'`, `type='checkbox'` | is infuriating |

## Styling

| class name | description | role |
| --- | --- | --- |
| `.full-screen` | sets an element to cover the entire screen | to capture all mouse movements, the element must cover the whole web page |
| `.shaddow` | makes the element positionable with coordinates | so the check-box can be repositioned to follow the mouse |

## Listeners

| type | attached to | callback |
| --- | --- | --- |
| `mousemove` | `id='user-interface'` | `shaddowMouse` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `shaddowMouse(event)` | _Event_: a user generated event | _Boolean_ | reads current mouse coordinates from the event, formats the coordinates to a CSS string (`left` & `top`), then resets the style property for the `follower` DOM element.  Logs action for developers |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `coordinatesToStyle(x, y)` | x (_Number): number of pixels left. <br>  y (_Number): number of pixels from the top. | _String_: a CSS string generated from `x` and `y` | takes in the mouse coordinates and returns a CSS string to reposition the checkbox |

